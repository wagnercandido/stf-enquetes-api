const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);