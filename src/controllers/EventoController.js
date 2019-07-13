const Evento = require('../models/EventoSchema');

class EventoController {
    async get(req, res) {
        return res.json(await Evento.find());
    };

    async store(req, res) {
        const { idUser, idOperacao, nome, dtInicial, dtFinal, isAtivo } = req.body;
        const evento = await Evento.create({idUser, idOperacao, nome, dtInicial, dtFinal, isAtivo});
        return res.json(evento);
    };
};

module.exports = new EventoController();
