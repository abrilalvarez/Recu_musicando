const express = require('express');
const router = express.Router();
const generoAPIController = require('../../controllers/api/generoAPIController');

//Ruta con el respectivo endpoint

//Listado de todos los generos con sus canciones
router.get('/', generoAPIController.list);

module.exports = router;
