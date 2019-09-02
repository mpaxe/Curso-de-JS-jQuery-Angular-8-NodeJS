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

document.write("</ul>");