const express = require('express');
const db = require('../../database/models');
const { Association } = require('sequelize');
const Op = db.Sequelize.Op;

const generoAPIController = {

    //listado de los generos con sus propiedades (GET)
    list: (req, res) => {
        console.log('Listado de los generos con sus respectivas propiedades');
        db.Genero.findAll(
            {
                include: [
                    { association: 'canciones' },   //foreign_key: 'genero_id'
                ]
            }
        ).then(generos => {
            return res.status(200).json({
                //meta
                meta: {
                    //código de estado
                    status: 200,
                    //información relacionada
                    total: generos.length, //cantidad total
                    url: '/generos' //endpoint
                },
                //data
                data: generos //los generos con sus correspondientes propiedades
            });
        })
        .catch(error => { console.log('Error: ' + error)})
    },
}

module.exports = generoAPIController;