'use strict'
// Prueba let y var

// Prueba con var
var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);

// Prueba con let

var texto = "Curso js";
console.log(texto);

if(true){
    let texto = "Curso java";
    console.log(texto);
}

console.log(texto);