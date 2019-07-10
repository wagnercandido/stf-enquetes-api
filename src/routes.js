const express = require('express');

const routes = express.Router();

const EnqueteConstroller = require('./controllers/EnqueteController');
const SugestaoControler = require('./controllers/SugestaoController');
const LikeController = require('./controllers/LikeController');
const UsuarioController = require('./controllers/UsuarioController');

routes.post('/enquetes', EnqueteConstroller.store);
routes.get('/enquetes', EnqueteConstroller.getEnquetes);
routes.get('/enquetes/:id', EnqueteConstroller.show);

routes.post('/enquetes/:id/sugestoes', SugestaoControler.store);
routes.post('/sugestoes/:id/like', LikeController.store);
routes.post('/users', UsuarioController.getUser);

module.exports = routes;