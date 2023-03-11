const express = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const cancionAPIController = {

    //listado de las canciones con sus propiedades (GET) > FUNCIONA
    list: (req, res) => {
        console.log('Listado de las canciones con sus respectivas propiedades');
        db.Cancion.findAll(
            {
                include: [
                    { association: 'album' },   //foreign_key: 'album_id'
                    { association: 'genero' },  //foreign_key: 'genero_id'
                    { association: 'artista' },  //foreign_key: 'artista_id'
                ]
            }
        ).then(canciones => {
            return res.status(200).json({
                //meta
                meta: {
                    //código de estado
                    status: 200,
                    //información relacionada
                    total: canciones.length, //cantidad total
                    url: '/canciones/' //endpoint
                },
                //data
                data: canciones //las canciones con sus correspondientes propiedades
            });
        })
        .catch(error => { console.log('Error: ' + error)})
    },

    //crear un nuevo registro de una canción > FUNCIONA
    create: (req, res) => {
        console.log('Creación de un registro en la tabla canciones');
        db.Cancion.create(
            /*notNull Violation: Cancion.id cannot be null*/
            {
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                /*createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt,*/
                generoId: req.body.generoId,
                albumId: req.body.albumId,
                artistaId: req.body.artistaId
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones/create'
                    },
                    data:confirm
                }
            }else{
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones/create'
                    },
                    data:confirm
                }
            }
            return res.status(200).json(respuesta);
        })    
        .catch(error => {console.log('Error: ' + error)})
    },

    //Mostrar una canción (GET) > FUNCIONA
    show: (req, res) => {
        console.log('Muestra del detalle de una canción');
        db.Cancion.findByPk(req.params.id)
        .then(cancion => {
            return res.status(200).json({
                data: cancion,
                status: 200,
                url: '/canciones/'+cancion.id
            });
        })
        .catch(error => { console.log('Error: ' + error)})
    },
    //Editar una cancion (PUT) >
    update: (req,res) => {
        console.log('Edición de un registro de la tabla canciones');
        let cancionId = req.params.id;
        db.Cancion.update(
            {
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt,
                generoId: req.body.generoId,
                albumId: req.body.albumId,
                artistaId: req.body.artistaId
            },
            {
                where: {id: cancionId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204, //204 NO CONTENT SUCCESS STATUS
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }
            return res.json(respuesta);
        })    
        .catch(error => { console.log('Error: '+error)})
    },

    //Eliminar una cancion (DELETE) > FUNCIONA
    destroy: (req,res) => {
        console.log('Destrucción de un registro de la tabla canciones');
        let cancionId = req.params.id;
        db.Cancion.destroy({where: {id: cancionId}, force: true}) // force: true asegura que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204, //204 NO CONTENT SUCCESS STATUS
                        total: confirm.length,
                        url: '/canciones/:id'
                    },
                    data:confirm
                }
            }
            return res.json(respuesta);
        })    
        .catch(error => {console.log("Error: "+error)})
    }

}

module.exports = cancionAPIController;