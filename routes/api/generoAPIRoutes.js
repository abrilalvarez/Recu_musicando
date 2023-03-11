/*
/generos (GET) listado de todos los géneros con sus canciones
*/

const express = require('express');
const router = express.Router();
const generoAPIController = require('../../controllers/api/generoAPIController');

//Rutas (endpoints)

//Listado de todos los generos con sus canciones LISTO
router.get('/', generoAPIController.list);

module.exports = router;
