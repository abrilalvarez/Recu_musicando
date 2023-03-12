module.exports = (sequelize, dataTypes) => {
    let alias = "Cancion";

    let cols = {

        // INT PK NOT NULL
        id: {
             /*notNull Violation: Cancion.id cannot be null*/
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: dataTypes.INTEGER(11)
        },
        // VARCHAR DEFAULT NULL
        titulo: {
            type: dataTypes.STRING(45)
        },
        // INT DEFAULT NULL
        duracion: {
            type: dataTypes.INTEGER(11)
        },
        // INT NOT NULL
        generoId: {
            allowNull: false,
            type: dataTypes.INTEGER(11),
            field: 'genero_id',
        },
        // INT NOT NULL
        albumId: {
            allowNull: false,
            type: dataTypes.INTEGER(11),
            field: 'album_id',
        },
        // INT NOT NULL
        artistaId: {
            allowNull: false,
            type: dataTypes.INTEGER(11),
            field: 'artista_id',
        },
        /*
        // TIMESTAMP NULL DEFAULT NULL
        createdAt: {
            field: 'created_at',
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("NULL"),
        },
        // TIMESTAMP NULL DEFAULT NULL
        updatedAt: {
            field: 'updated_at',
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("NULL"),
        }*/
    };

    let config = {
        //nombre de la tabla en la db
        tableName: 'canciones',
        //añade los atributos createdAt y updatedAt
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Cancion = sequelize.define(alias, cols, config);
    
    //RELACION ENTRE CANCION Y ALBUM
    Cancion.associate = function(models){
        //una cancion tiene un album
        Cancion.belongsTo(models.Album, {
            foreignKey: 'album_id', //nombre de la columna
            as: 'album', //alias para consultar a la db
        })
        //una cancion tiene un genero
        Cancion.belongsTo(models.Genero, {
            foreignKey: 'genero_id', //nombre de la columna
            as: 'genero', //alias para consultar a la db
        })
        //una cancion tiene un artista
        Cancion.belongsTo(models.Artista, {
            foreignKey: 'artista_id', //nombre de la columna
            as: 'artista', //alias para consultar a la db
        })
    }
    
    return Cancion;
}