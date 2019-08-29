'use strict'

// Condicionales if

var edad = 19;
var nombre = "David Suarez";

// Operadores relacionales
/*
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if (edad >= 18) {
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else {
        console.log("Ya no eres millenial");
    }
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

// Operadores lógicos
/*
AND(Y): &&
OR(O): ||
NEGACION(NOT): !
*/
var year = 2018;

// NOT
if (year != 2016) {
    console.log("El año no es 2016, el año es: "+year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Era actual");
}else{
    console.log("Era postmoderna");
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}