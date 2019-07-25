const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema(
    {
        idUser: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
        operacao: { type: mongoose.Schema.Types.ObjectId, ref: "Operacao" },
        nome: { type: String, required: true },
        dtInicial: { type: Date, required: true },
        dtFinal: { type: Date, required: false },
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Evento', EventoSchema);
