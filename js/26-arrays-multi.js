'use strict'

var categorias = ['Acción', 'Terror', 'Drama'];
var peliculas = ['Los Vengadores', 'La purga', 'El color púrpura'];

console.log(peliculas.sort());
console.log(peliculas.reverse());

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

var elemento = "";

do{
    elemento = prompt("Introduzca una pelicula");
    if(elemento != "q"){
        peliculas.push(elemento);
    }

}while(elemento != "q");

var indice = peliculas.indexOf("El color púrpura");

console.log(indice);

if(indice > -1){
    var peli = peliculas.slice(indice, indice + 1);
}

var str_peliculas = peliculas.join();

console.log(peliculas);
console.log(peli);
console.log(str_peliculas);

var texto = "texto1, texto2, texto3";

var arr_texto = texto.split(", ");

console.log(arr_texto);