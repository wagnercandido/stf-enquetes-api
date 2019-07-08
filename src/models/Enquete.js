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
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comentario"}]
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Enquete', Enquete);