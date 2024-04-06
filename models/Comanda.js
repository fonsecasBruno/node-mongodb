const mongoose = require('mongoose')

const schema = mongoose.Schema({
    mesa: Number,
    data_pagamento: String
    
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda
