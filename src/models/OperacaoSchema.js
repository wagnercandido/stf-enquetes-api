const mongoose = require('mongoose');

const OperacaoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Operacao', OperacaoSchema);
