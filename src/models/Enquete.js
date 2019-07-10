const mongoose = require('mongoose');

const Enquete = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        sugestoes: [{type: mongoose.Schema.Types.ObjectId, ref: "Sugestao"}]
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Enquete', Enquete);