const Evento = require('../models/EventoSchema');

class EventoController {
    async get(req, res) {
        return res.json(await Evento.find().sort( { createdAt: -1 }).populate('operacao'));
    };

    async store(req, res) {
        const { idUser, operacao, nome, dtInicial, dtFinal, isAtivo } = req.body;
        const evento = await Evento.create({idUser, operacao, nome, dtInicial, dtFinal, isAtivo});
        req.io.emit('evento', evento);
        return res.json(evento);
    };

    async getById(req, res) {
        const response = await Evento.findById(req.params.id);
        return res.json(response);
    }
};

module.exports = new EventoController();
