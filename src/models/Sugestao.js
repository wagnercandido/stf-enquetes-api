const mongoose = require('mongoose');

const Sugestao = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0
        },
        votos: [{idUser:String}]
    }, {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

module.exports = mongoose.model('Sugestao', Sugestao);