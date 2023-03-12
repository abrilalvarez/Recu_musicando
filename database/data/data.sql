insert into albumes(id, nombre, duracion)
values
    (   1,
        "The Car",
        11
    ),
    (   2,
        "13",
        10
    ),
    (
        3,
        "Cracker Island",
        9
    ),
    (
        4,
        "Muta",
        8
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
    1, "Alternativo"
),
(
    2, "Rock Alternativo"
),
(
    3, "Indie"
);

insert into canciones(id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id)
values
(
    0, "Barro", 11, NULL, NULL, 1, 4, 3
);