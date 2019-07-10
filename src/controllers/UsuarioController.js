const Usuario = require('../models/Usuario');

class UsuarioController {
    async store(req, res) {
        // console.log(req.body);
        // usuarios = req.body;
        // usuarios.map(usuario => console.log('user', usuario))
        const { username, password } = req.body;
        
        const usuario = await Usuario.create({ username, password });
        return res.json(usuario);
    }

    async getUser(req, res) {

        const { username, password } = req.body;
        console.log(req.body);
        

        await Usuario.findOne({ username: String(username) }, function (err, data) {
            if (err) {
                return res.json({ status: 500, response: 'error', msg: err });
            }
            if (data) {
                if (password === data.password) {
                    return res.json({ status: 200, response: 'success' });
                }
                return res.json({ status: 401, response: 'Unauthorized' });
            }
            return res.json({ status: 404, response: 'not found' })
        });

    }
}

module.exports = new UsuarioController();