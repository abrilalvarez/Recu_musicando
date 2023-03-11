module.exports = (sequelize, dataTypes) => {
    let alias = "Album";

    let cols = {

        // INT PK DEFAULT NULL
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        // VARCHAR DEFAULT NULL
        nombre: {
            type: dataTypes.STRING
        },
        // VARCHAR DEFAULT NULL
        duracion: {
            type: dataTypes.STRING
        },
    };

    let config = {
        //nombre de la tabla en la db
        tableName: 'albumes',
        //omite los atributos createdAt y updatedAt
        timestamps: false,
    }

    const Album = sequelize.define(alias, cols, config);
    
    //RELACION ENTRE ALBUM Y CANCIÓN

    Album.associate = function(models){
        //un album tiene muchas canciones
        Album.hasMany(models.Cancion, {
            foreignKey: 'album_id', //nombre de la columna
            as: 'canciones',//alias para consultar a la db
        })
    }
    
    return Album;
}