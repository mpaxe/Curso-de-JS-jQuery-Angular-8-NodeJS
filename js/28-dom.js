'use strict'

// DOM - Document Object Model

function cambiarColor(elemento, color){
    elemento.style.background = color;
}

// Conseguir elementos con un ID 

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Cambio desde JS";
// caja.style.background = "red";
cambiarColor(caja, "green");
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "caja1 caja2";

// Conseguir elementos por sus etiquetas
var todosLosDiv = document.getElementsByTagName('div');

var seccion =  document.querySelector("#miseccion");
var separacion = document.createElement("hr");

for(var i in todosLosDiv){
    if(typeof todosLosDiv[i].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[i].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(separacion);

var contenido = todosLosDiv[3];
contenido.innerHTML = "Vuelvo a cambiar desde JS";
cambiarColor(contenido, "yellow");


var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

for(var i in divsRojos){
    if(divsRojos[i].className == "rojo"){
        divsRojos[i].style.background = "red";
    }
}

console.log(divsRojos);

// Query selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);
