const express = require('express');

const routes = express.Router();

const EnqueteConstroller = require('./controllers/EnqueteController');
const SugestaoControler = require('./controllers/SugestaoController');
const UsuarioController = require('./controllers/UsuarioController');
const EventoController = require('./controllers/EventoController');
const OperacaoController = require('./controllers/OperacaoController');

routes.post('/login', UsuarioController.getUser);
routes.post('/users', UsuarioController.store);

routes.get( '/operacoes', OperacaoController.get);
routes.post('/operacoes', OperacaoController.store);

routes.get( '/eventos', EventoController.get);
routes.post('/eventos', EventoController.store);

routes.get( '/enquetes/evento/:id', EnqueteConstroller.getByidEvento);
routes.post('/enquetes', EnqueteConstroller.store);

routes.get('/sugestoes/enquete/:id', SugestaoControler.getByIdEnquete);
routes.post('/sugestoes', SugestaoControler.store);
routes.post('/sugestoes/votar', SugestaoControler.votar);

module.exports = routes;