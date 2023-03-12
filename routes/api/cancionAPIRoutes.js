/*
/canciones (GET) que muestre un listado de las canciones con sus propiedades
/canciones (POST) para crear un nuevo registro de una canción
/canciones/:id (GET) que muestre una canción
/canciones/:id (PUT) para editar una canción
/canciones/:id (DELETE) para eliminar una canción
*/

const express = require('express');
const router = express.Router();
const cancionAPIController = require('../../controllers/api/cancionAPIController');
/*const generoAPIController = require('../../controllers/api/generoAPIController');*/

//Rutas con los respectivos endpoints

//Listado de las canciones con sus propiedades LISTO
/* (id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id) */
router.get('/', cancionAPIController.list);

//Crear un nuevo registro de una cancion LISTO (corregir: si elimino todos los registros de la tabla, el id no comienza en 0. continua partiendo del ùltimo id generado)
router.post('/', cancionAPIController.create);

//Mostrar una canción LISTO
router.get('/:id', cancionAPIController.show);

//Editar una cancion FALTA
router.put('/:id', cancionAPIController.update);

//Eliminar una cancion LISTO
router.delete('/:id', cancionAPIController.destroy);

module.exports = router;