insert into albumes(id, nombre, duracion)
values
    (   1,
        "Let Go",
        11
    ),
    (   2,
        "Sin Miedo (del Amor y otros Demonios)",
        10
    ),
    (
        3,
        "Kaya",
        9
    );

insert into artistas(id, nombre, apellido)
values
    (
        1,"Avril","Lavigne"
    ),
    (
        2, "Kali", "Uchis"
    ),
    (
        3, "Bob", "Marley"
    );

insert into generos(id, name)
values
(
    1, "Rock Alternativo"
),
(
    2, "R&B"
),
(
    3, "Reggae"
);

insert into canciones(id, titulo, duracion, created_at, updated_at, genero_id, album_id, artista_id)
values
(
    1, "Complicated", 11, NULL, NULL, 1, 1, 1
),
(
    2, "Is This Love", 10, NULL, NULL, 3, 3, 3
),
(
    3, "vaya con dios", 9, NULL, NULL, 2, 2, 2
);

