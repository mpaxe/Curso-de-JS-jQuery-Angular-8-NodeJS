'use strict'

// Localstorage

// Comprobar disponibilidad del localstorage
if(typeof(Storage !== 'undefined')){
    console.log("LocalStorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Python de Luis Posada");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));

// Guardar objetos
var usuario = {
    nombre: "Luis Posada",
    email: "luis@mail.com",
    web: "luisposada.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar Objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

// Eliminar elementos del localstorage, uno a uno
localStorage.removeItem("usuario");
localStorage.removeItem("titulo");

// Eliminar todos los elementos del localstorage
localStorage.clear();