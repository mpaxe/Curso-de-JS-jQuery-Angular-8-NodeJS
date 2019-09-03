'use strict'

/**
 * 1. Hacer un programa que pida 6 números por pantalla y los meta en un array 
 * 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
 * 3. Ordenarlo y mostrarlo 
 * 4. Invertirlo y mostralo 
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Buscar un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 * (Se valorará el uso de funciones)
 */

var numeros = [];
// var numeros = new Array(6);

document.write("<h1>Ejercicio con arrays</h1>");
console.log("Ejercicio con arrays");
// Pedimos los 6 números
pedirNumeros();
// Los mostramos en body de la página
pintarBody();
// Los mostramos por consola
sacarConsola();
// Lo invertimos y lo mostramos, lo hacemos primero porque modifica el array
invertir();
// Lo ordenamos y lo mostramos
ordenar();
// Buscar un valor introducido por el usuario
buscar();

function pedirNumeros(){
    for(var i = 0; i < 6; i++){
        var num = parseInt(prompt("Introduzca un número"));
        // numeros[i] = parseInt(prompt("Introduzca un número"));
        while(!Number.isInteger(num)){
            num = parseInt(prompt("Error, introduzca un número entero"));
        }
        numeros.push(num);
    }
}

function pintarBody(){
    document.write("<ul>");
    for(let i in numeros){
        document.write("<li>"+numeros[i]+"</li>");
    }
    document.write("</ul>");
}

function sacarConsola(){
    for(let i in numeros){
        console.log(numeros[i]);
    }
}

function invertir(){
    document.write("<h1>Invertir números</h1>");
    console.log("Invertir números");
    numeros.reverse();
    pintarBody();
    sacarConsola();
}

function ordenar(){
    document.write("<h1>Ordenar números</h1>");
    console.log("Ordenar números");
    numeros.sort(function(a, b){return a - b});
    pintarBody();
    sacarConsola();
}

// Mostrar el número de elementos que tiene un array
document.write("El array tiene "+numeros.length+" elementos");
console.log("El array tiene "+numeros.length+" elementos");

function buscar(){
    var busqueda = parseInt(prompt("Introduce el valor a buscar"));
    var resultado = numeros.findIndex(numero => numero == busqueda);

    console.log("Busqueda");
    console.log("El número "+busqueda+" está en la posición "+resultado);

    document.write("Busqueda: El número "+busqueda+" está en la posición "+resultado+"<br>");
}