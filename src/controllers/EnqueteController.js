const Enquete = require('../models/Enquete');
const Comentario = require('../models/Comentario');

class EnqueteController {
    async store(req, res) {
        const { author, title } = req.body;
        const enquete = await Enquete.create({ author, title });
        
        return res.json(enquete);
    };

    async show(req, res) {
        const enquete = await Enquete.findById(req.params.id).populate({
            path: "comments",
            options: { sort: { createdAt: -1 } }
        });

        return res.json(enquete);
    }

}

module.exports = new EnqueteController();