'use strict'

// Funciones con argumentos variables
/*
Ejercicio que utiliza una función con un argumento variable para imprimir dinamicamente los elementos de entrada ya sean variables o arrays 
*/

function listaPelis(...peliculas){

    if(Array.isArray(peliculas[0])){
        for(var peli in peliculas[0]){
            console.log(peliculas[0][peli]);
        }
    }else{
        for(var peli in peliculas){
            console.log(peliculas[peli]);
        }
    }
    console.log("*********************************************");
}

var pelis = ["Vengadores", "X-Men", "Superman", "Batman"];
var peli1 = "El señor de los anillos: La comunidad del anillo";
var peli2 = "El señor de los anillos: Las dos torres";
var peli3 = "El señor de los anillos: El retorno del rey";

listaPelis(pelis);
listaPelis(peli1, peli2, peli3);
listaPelis(peli3);
listaPelis(peli2);
listaPelis(peli1);

