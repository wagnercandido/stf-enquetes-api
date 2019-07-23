const OperacaoSchema = require('../models/OperacaoSchema');

class OperacaoController {
    async get(req, res) {
        return res.json(await OperacaoSchema.distinct('nome'));
    };

    store = async (req, res) => {
        const { nome: nome } = req.body;

        const Operacao = await OperacaoSchema.create({ nome: nome });
        return res.json(Operacao);
    };

    async getById(req, res) {
        const response = await OperacaoSchema.findById(req.params.id);
        return res.json(response);
    };

    getByNmae = async (req, res) => {

        const { nome } = req.body;

        const operation = await OperacaoSchema.findOne({ nome: String(nome) }, function (err, data) {
            if (err) {
                return res.json({ status: 500, response: 'error', msg: err });
            }
            if (data) {
                return res.json(data);
            }
        })

        if (!operation) {
            const operacao = await OperacaoSchema.create({ nome: nome });
            return res.json(operacao);
        }

    }

};

module.exports = new OperacaoController();
