const express = require('express');
const Produto = require('../models/Produto');
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
});

router.get('/produtos', async function(req, res){
    res.json(await Produto.find())
});

router.post('/produtos', async function(req, res){
    res.json(await Produto.create({nome: 'Coca-Cola'}))
});

router.get('/produtos/:id', async function(req, res){
    res.json(await Produto.findById(req.params.id))
});

router.delete('/produtos/:id', async function(req, res){
    res.json(await Produto.findByIdAndDelete(req.params.id))
});

router.put('/produtos/:id', async function(req, res){
    res.json(await Produto.findByIdAndUpdate(req.params.id, req.body))
});

router.get('/comanda', function(req, res){
    res.json({})
});

module.exports = router