const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda
