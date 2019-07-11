const Sugestao = require('../models/Sugestao');
const Voto = require('../models/Voto');

class LikeController {
    async store(req, res) {

        const usuario = req.body;
        const sugestao = await Sugestao.findById(req.params.id);

        const votos = sugestao.votos.map(user => user._id);
        const indexOfUser = votos.indexOf(usuario._id);
        const jaVotou = indexOfUser >= 0;

        if (!jaVotou) {
            sugestao.votos.push(usuario);
            sugestao.likes += 1;
        } else {
            sugestao.votos.splice(indexOfUser, 1);
            sugestao.likes -= 1;
        }

        await sugestao.save();

        req.io.emit('like', sugestao);

        return res.json(sugestao);
    }

};

module.exports = new LikeController();