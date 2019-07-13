const mongoose = require('mongoose');

const EnqueteSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        idEvento: {type: mongoose.Schema.Types.ObjectId, ref: "Evento"},
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Enquete', EnqueteSchema);