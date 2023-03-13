const express = require('express');
const router = express.Router();
const cancionAPIController = require('../../controllers/api/cancionAPIController');
/*const generoAPIController = require('../../controllers/api/generoAPIController');*/

//Rutas con los respectivos endpoints

//Listado de las canciones con sus propiedades
/* (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) */
router.get('/', cancionAPIController.list);

//Crear un nuevo registro de una cancion
router.post('/', cancionAPIController.create);

//Mostrar una canción
router.get('/:id', cancionAPIController.show);

//Editar una cancion
router.put('/:id', cancionAPIController.update);

//Eliminar una cancion
router.delete('/:id', cancionAPIController.destroy);

module.exports = router;