const OperacaoSchema = require('../models/OperacaoSchema');

class OperacaoController {
    async get(req, res) {
        return res.json(await OperacaoSchema.find());
    };

    async store(req, res) {
        const { nome: nome } = req.body;
        const Operacao = await OperacaoSchema.create({ nome: nome });
        return res.json(Operacao);
    };

    async getById(req, res) {
        const response = await OperacaoSchema.findById(req.params.id);
        return res.json(response);
    }; 
};

module.exports = new OperacaoController();
