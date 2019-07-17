const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema(
    {
        idUser: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
        operacao: { type: mongoose.Schema.Types.ObjectId, ref: "Operacao" },
        nome: { type: String, required: true },
        dtInicial: { type: Date, required: true },
        dtFinal: { type: Date, required: false },
        isAtivo: { type: Boolean, required: true }
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Evento', EventoSchema);
