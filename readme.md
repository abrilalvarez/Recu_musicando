# Musicando

### Esta es la base de datos musicando, a continuación vas a ver como fue creada
_Esta base de datos está compuesta por las siguientes tablas_
- Artistas > modelo listo
- Canciones > modelo listo
- Albumes > modelo listo
- Generos > modelo listo

_Las relaciones están definidas de la siguiente forma_
- Una canción tiene un album > listo
- Un album tiene muchas canciones > listo

- Una canción tiene un genero > listo
- Un genero tiene muchas canciones > listo

- Una canción tiene un artista > listo
- Un artista tiene muchas canciones > listo

ENDPOINTS:
/canciones (GET) 
    que muestre un listado de las canciones con sus propiedades
/canciones (POST) 
    para crear un nuevo registro de una canción
/canciones/:id (GET) 
    que muestre una canción
/canciones/:id (PUT) 
    para editar una canción
/canciones/:id (DELETE) 
     eliminar una canción
/generos (GET) 
    listado de todos los géneros con sus canciones

ACLARACIÓN: para todos los endpoints se debe devolver un json con su código de estado y el resultado correspondiente, en caso de haberlo.

FORMATO DE ENTREGA
El tiempo para realizar este proyecto es de 14 días a partir del 08/03. Eso quiere decir que el 22/03 a las 23.59 hs es el último día de entrega. En caso de terminarlo antes, puedes enviarlo sin problemas.
El método de entrega será a través de GitHub.