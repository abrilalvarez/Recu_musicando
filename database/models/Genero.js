module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";

    let cols = {

        // INT PK NOT NULL
        id: {
            allowNull: false,
            primaryKey: true,
            type: dataTypes.INTEGER(11).UNSIGNED
        },
        // VARCHAR DEFAULT NULL
        nombre: {
            field: 'name',
            type: dataTypes.STRING(45)
        },
    };

    let config = {
        //nombre de la tabla en la db
        tableName: 'generos',
        //omite los atributos createdAt y updatedAt
        timestamps: false,
    }

    const Genero = sequelize.define(alias, cols, config);
    
    //RELACION ENTRE GENERO Y CANCIÓN

    Genero.associate = function(models){
        //un genero tiene muchas canciones
        Genero.hasMany(models.Cancion, {
            foreignKey: 'genero_id', //nombre de la columna
            as: 'canciones',//alias para consultar a la db
        })
    }
    
    return Genero;
}