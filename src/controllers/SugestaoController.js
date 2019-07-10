const Sugestao = require('../models/Sugestao');
const Enquete = require('../models/Enquete');

class SugestaoController {
    async store(req, res) {
        const enquete = await Enquete.findById(req.params.id);
        
        const { author, title } = req.body;

        const sugestao = await Sugestao.create({ author, title });

        enquete.sugestoes.push(sugestao);

        await enquete.save();

        console.log('no socket');
        

        // req.io.sockets.in(enquete._id).emit('sugestao', sugestao);

        req.io.emit('sugestao', sugestao);

        return res.json(sugestao);
    };

};

module.exports = new SugestaoController();