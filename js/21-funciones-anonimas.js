'use strict'

// Funciones anonimas, es una función que no tiene nombre

function sumar(numero1, numero2, mostrarSuma, sumarPorDos){
    var suma = numero1 + numero2;

    mostrarSuma(suma);
    sumarPorDos(suma);

    return suma;
}

console.log("1. Funciones Anonimas");
sumar(2, 8, function(dato){
    console.log("La suma es: "+dato);
},
function(dato){
    console.log("La suma por dos es: "+(dato*2));
});
console.log("**************************");
// Fución flecha 
console.log("2. Funciones Flecha");
sumar(2, 8, dato => {
    console.log("La suma es: "+dato);
},
dato => {
    console.log("La suma por dos es: "+(dato*2));
});
console.log("**************************");