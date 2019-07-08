const Comentario = require('../models/Comentario');
const Enquete = require('../models/Enquete');

class ComentarioController {
    async store(req, res) {
        const enquete = await Enquete.findById(req.params.id);
        
        const { author, title } = req.body;

        const comentario = await Comentario.create({ author, title });

        enquete.comments.push(comentario);

        await enquete.save();

        req.io.sockets.in(box._id).emit('comentario', comentario);

        return res.json(comentario);
    };

};

module.exports = new ComentarioController();