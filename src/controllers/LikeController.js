const Sugestao = require('../models/Sugestao');

class LikeController {
    async store(req, res) {
        const sugestao = await Sugestao.findById(req.params.id);

        sugestao.likes += 1;

        await sugestao.save();

        req.io.emit('sugestao', sugestao);

        return res.json(sugestao);
    }

};

module.exports = new LikeController();