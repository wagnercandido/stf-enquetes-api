const mongoose = require('mongoose');

const Voto = new mongoose.Schema(
    { 
        idUser: {
            type: String,
            required: true,
        }
    }, {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

module.exports = mongoose.model('Voto', Voto);