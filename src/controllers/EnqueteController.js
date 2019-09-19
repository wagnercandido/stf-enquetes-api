const Enquete = require('../models/EnqueteSchema');
const Sugestao = require('../models/SugestaoSchema');

class EnqueteController {

    // buscarQtdeSugestoes = async (idEnquete) => {
    //     return await Sugestao.find({ idEnquete: String(idEnquete) }).count();
    // }

    // buscarEnquetes = async (idEvento) => {
    //     return await Enquete.find({ idEvento: String(idEvento) }).sort('-createdAt');
    // }

    getByidEvento(req, res) {
        const idEvento = req.params.id;
        let enquetesReturn = [];

        let promiseEnquetes = new Promise((resolve, reject) => {
            return Enquete.find({ idEvento: String(idEvento) }).sort('-createdAt').then((enquetes) => {
                for (let i = 0; i < enquetes.length; i++) {
                    let idEnquete = enquetes[i]._id;
                    Sugestao.aggregate([
                        { "$group": { _id: "$idEnquete", count: { $sum: 1 } } },
                        { '$match': { '_id': idEnquete } }
                    ]).then((data) => {
                        enquetes[i]['sugestoes'] = data[0] !== undefined ? data[0].count : 0;
                        enquetesReturn.push(enquetes[i]);
                        if (enquetesReturn.length === enquetes.length)
                            resolve(enquetes)
                    }).catch((error) => {
                        console.log(error);
                        reject(error)
                    });

                }
            })

        });

        promiseEnquetes.then((enquetes) => {
            return res.json(enquetes);
        })
            .catch(error => {
                return res.json(error)
            })

    };

    async store(req, res) {
        const { author, title, idEvento } = req.body;
        const enquete = await Enquete.create({ author, title, idEvento });
        req.io.emit('enquete', enquete);
        return res.json(enquete);
    };

    async getEnquete(req, res) {
        const { idEnquete } = req.body;

        const enquete = await Enquete.findById(idEnquete);
        return res.json(enquete);
    }

    async getEnquetes(req, res) {
        const enquete = await Enquete.find();
        return res.json(enquete);
    }

}

module.exports = new EnqueteController();
