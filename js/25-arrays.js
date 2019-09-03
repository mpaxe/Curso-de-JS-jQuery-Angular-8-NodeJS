'use strict'

// Arrays, arreglos, matrices

var nombre = "Toni Stark";
var nombres = new Array("Toni Stark", "Steve Rogers", "Natasha Romanoff", "Bruce Banner", "Clint Barton");
var lenguajes = ["Java", "JavaScript", "PHP", "C#", "Python", "C++"];

document.write("<h1>Personjes de los Vengadores</h1>");
document.write("<ul>");

// var elemento = parseInt(prompt("Introduce la posición del elemento del array"));

// if(elemento >= nombres.length || elemento < 0){
//     alert("El número no puede ser mayor o igual a "+nombres.length+" ni menor a 0");
// }else{
//     alert("El elemento es: "+nombres[elemento]);
// }
// console.log(nombres[elemento]);
// For tradicional
// for(var i = 0; i < nombres.length; i++){
//     document.write("<li>"+nombres[i]+"</li>");
// }

// For extendido
// for(var i in nombres){
//     document.write("<li>"+nombres[i]+"</li>");
// }

// For Each
// reutilizo la variable nombre declarada más arriba
nombres.forEach((nomb, index, arr)=>{
    console.log(arr);
    document.write("<li>"+index+". "+nomb+"</li>");
});

// lenguajes.forEach((elemento, index, arr)=>{
//     console.log(arr);
//     document.write("<li>"+index+". "+elemento+"</li>");
// });

var busqueda1 = lenguajes.find(function(lenguaje){
    return lenguaje = "Java";
});
// Es lo mismo que el de arriba
var busqueda2 = lenguajes.find(lenguaje => lenguaje == "Java");
// Para sacar el indice
var busqueda3 = lenguajes.findIndex(lenguaje => lenguaje == "Java");

var precios = [10,25,37,88];
// Hacer una busqueda sobre un rango
var busqueda4 = precios.some(precio => precio >= 1);

document.write("</ul>");

console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);