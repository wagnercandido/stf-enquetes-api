const express = require('express');

const routes = express.Router();

const EnqueteConstroller = require('./controllers/EnqueteController');
const ComentarioControler = require('./controllers/ComentarioController');

routes.post('/enquetes', EnqueteConstroller.store);
routes.get('/enquetes', EnqueteConstroller.getEnquetes);
routes.get('/enquetes/:id', EnqueteConstroller.show);

routes.post('/enquetes/:id/comentarios', ComentarioControler.store);

module.exports = routes;