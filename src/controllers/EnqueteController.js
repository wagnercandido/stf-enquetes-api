const Enquete = require('../models/Enquete');

class EnqueteController {
    async getEnquetes(req, res) {
        const enquetes = await Enquete.find().sort('-createdAt');
        return res.json(enquetes);
    };

    async store(req, res) {
        const { author, title } = req.body;
        const enquete = await Enquete.create({ author, title });
        req.io.emit('enquete', enquete);
        return res.json(enquete);
    };

    async show(req, res) {
        const enquete = await Enquete.findById(req.params.id).populate({
            path: "sugestoes",
            options: { sort: { createdAt: -1 } }
        });

        return res.json(enquete);
    }

}

module.exports = new EnqueteController();