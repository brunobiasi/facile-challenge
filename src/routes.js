const express = require('express');
const EncriptController = require('./app/controllers/EncriptController');

const routes = express.Router();

routes.get('/encripts/:id', EncriptController.index);
routes.post('/encripts', EncriptController.store);

module.exports = routes;