const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const Produto = require('../models/Produto');
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
});

//Produto
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update (req, res))

//Cliente
router.get('/Cliente', (req, res) =>ClienteController.getAll(req, res))
router.post('/Cliente', (req, res) =>ClienteController.create(req, res))
router.get('/Cliente/:id', (req, res) =>ClienteController.get(req, res))
router.delete('/Cliente/:id', (req, res) =>ClienteController.delete(req, res))
router.put('/Cliente/:id', (req, res) =>ClienteController.update (req, res))

//Comanda
router.get('/Comanda', (req, res) => ComandaController.getAll(req, res))
router.post('/Comanda', (req, res) => ComandaController.create(req, res))
router.get('/Comanda/:id', (req, res) => ComandaController.get(req, res))
router.delete('/Comanda/:id', (req, res) => ComandaController.delete(req, res))
router.put('/Comanda/:id', (req, res) => ComandaController.update (req, res))

//Funcionario
router.get('/Funcionario', (req, res) =>FuncionarioController.getAll(req, res))
router.post('/Funcionario', (req, res) =>FuncionarioController.create(req, res))
router.get('/Funcionario/:id', (req, res) =>FuncionarioController.get(req, res))
router.delete('/Funcionario/:id', (req, res) =>FuncionarioController.delete(req, res))
router.put('/Funcionario/:id', (req, res) =>FuncionarioController.update (req, res))


module.exports = router