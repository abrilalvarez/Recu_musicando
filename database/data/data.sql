insert into albumes(id, nombre, duracion)
values
    (   1,
        "The Car",
        120
    ),
    (   2,
        "13",
        180
    ),
    (
        3,
        "Cracker Island",
        150
    ),
    (
        4,
        "Muta",
        190
    );

insert into artistas(id, nombre, apellido)
values
    (
        1,"Damon","Albarn"
    ),
    (
        2, "Alex", "Turner"
    ),
    (
        3, "Perota", "Chingo"
    );

insert into generos(id, name)
values
(
    1, "Alternativo/independiente"
),
(
    2, "Rock alternativo"
),
(
    3, "Indie"
);

insert into canciones(id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id)
values
(
    1, "Barro", 1680, NULL, NULL, 1, 4, 3
);