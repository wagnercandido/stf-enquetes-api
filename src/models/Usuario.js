const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
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

module.exports = mongoose.model('Usuario', Usuario);