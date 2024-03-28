const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    cpf: Number,
    telefone: Number,
    endereco: String,
    sexo: String, 
    cargo: String, 
})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario