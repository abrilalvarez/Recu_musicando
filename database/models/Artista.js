module.exports = (sequelize, dataTypes) => {
    let alias = "Artista";

    let cols = {

        // INT PK NOT NULL
        id: {
            allowNull: false,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        // VARCHAR DEFAULT NULL
        nombre: {
            type: dataTypes.STRING
        },
        // VARCHAR DEFAULT NULL
        apellido: {
            type: dataTypes.STRING
        }
    };

    let config = {
        //nombre de la tabla en la db
        tableName: 'artistas',
        //omite los atributos createdAt y updatedAt
        timestamps: false,
    }

    const Artista = sequelize.define(alias, cols, config);
    
    //RELACION ENTRE ARTISTA Y CANCIÓN

    Artista.associate = function(models){
        //un genero tiene muchas canciones
        Artista.hasMany(models.Cancion, {
            foreignKey: 'artista_id', //nombre de la columna
            as: 'canciones',//alias para consultar a la db
        })
    }
    
    return Artista;
}