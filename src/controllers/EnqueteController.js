const Enquete = require('../models/EnqueteSchema');

class EnqueteController {
    async getByidEvento(req, res) {
        const idEvento = req.params.id;
        const enquetes = await Enquete.find({ idEvento: String(idEvento) }).sort('-createdAt');
        return res.json(enquetes);
    };

    async store(req, res) {
        const { author, title, idEvento } = req.body;
        const enquete = await Enquete.create({ author, title, idEvento });
        req.io.emit('enquete', enquete);
        return res.json(enquete);
    };

    async getEnquete(req, res) {
        const {idEnquete} = req.body;
        
        const enquete = await Enquete.findById(idEnquete);
        return res.json(enquete);
    }

}

module.exports = new EnqueteController();
