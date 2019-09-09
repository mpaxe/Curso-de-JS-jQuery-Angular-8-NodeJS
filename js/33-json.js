'use strict'

// JSON JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
for(var i in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[i].titulo+" - "+peliculas[i].year);
    caja_peliculas.append(p);
}