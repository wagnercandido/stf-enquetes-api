const Usuario = require('../models/UsuarioSchema');

class UsuarioController {
    async store(req, res) {
        const { username, password, name } = req.body;

        await Usuario.findOne({ username: String(username) }, function (err, data) {
            if (err) {
                return res.json({ status: 500, response: 'error', msg: 'Erro na solicitação' });
            }
            if (data) {
                if (username === data.username) {
                    return res.json({ status: 406, response: 'Not Acceptable', msg: 'Usuário já cadastrado' });
                }
            } else {
                return res.json(Usuario.create({ username, password, name }));
            }
        });

    }

    async getUser(req, res) {

        const { username, password } = req.body;

        await Usuario.findOne({ username: String(username) }, function (err, data) {
            if (err) {
                return res.json({ status: 500, response: 'error', msg: err });
            }
            if (data) {
                if (password === data.password) {
                    return res.json({ status: 200, response: 'success', user: data.username, _id: data._id });
                }
                return res.json({ status: 401, response: 'Unauthorized', msg: 'Usuário ou senha inválido(s)' });
            }
            return res.json({ status: 404, response: 'not found' })
        });

    }
}

module.exports = new UsuarioController();