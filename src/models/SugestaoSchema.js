const mongoose = require('mongoose');

const SugestaoSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        idEnquete: { type: mongoose.Schema.Types.ObjectId, ref: "Enquete" },
        votos: [{idUser:String}]
    }, {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

module.exports = mongoose.model('Sugestao', SugestaoSchema);