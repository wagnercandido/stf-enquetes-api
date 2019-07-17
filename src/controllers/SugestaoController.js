const SugestaoSchema = require('../models/SugestaoSchema');
const EnqueteSchema = require('../models/EnqueteSchema');

class SugestaoController {

    async store(req, res) {

        const { author, title, idEnquete } = req.body;
        const sugestao = await SugestaoSchema.create({ author, title, idEnquete });
        await sugestao.save();
        const enquete = await EnqueteSchema.findById(idEnquete);
        req.io.emit('sugestao', { sugestao, enquete });
        return res.json(sugestao);
    };


    async votar(req, res) {

        const { idUser, idSugestao } = req.body;
        const sugestao = await SugestaoSchema.findById(idSugestao);

        const votos = sugestao.votos.map(user => user._id);
        const indexOfUser = votos.indexOf(idUser);
        const jaVotou = indexOfUser >= 0;

        if (!jaVotou) {
            sugestao.votos.push({ _id: idUser });
            sugestao.likes += 1;
        } else {
            sugestao.votos.splice(indexOfUser, 1);
            sugestao.likes -= 1;
        }

        await sugestao.save();

        req.io.emit('like', sugestao);

        return res.json(sugestao);
    }

    async getByIdEnquete(req, res) {
        const sugestoes = await SugestaoSchema.find({idEnquete:req.params.id}).sort( { createdAt: -1 });

        return res.json(sugestoes);
    }
};

module.exports = new SugestaoController();