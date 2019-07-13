const OperacaoSchema = require('../models/OperacaoSchema');

class OperacaoController {
    async get(req, res) {
        return res.json(await OperacaoSchema.find());
    };

    async store(req, res) {
        const { nome: nome } = req.body;
        const Operacao = await OperacaoSchema.create({ nome: nome });
        return res.json(Operacao._id);
    };

    async getById(req, res) {
        return res.json(await OperacaoSchema.findById(req.params.id));
    }; 
};

module.exports = new OperacaoController();
