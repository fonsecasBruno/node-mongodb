const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    cpf: Number,
    telefone: Number,
    email: String
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente
