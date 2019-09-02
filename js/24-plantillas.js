'use strict'

// Hacer plantilla de texto

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");
// Uso sin plantillas
// var texto = "Mi nombre es: "+nombre+"<br>Mis apellidos son: "+apellidos;
// Uso con plantilas
var texto = `
    <h1>Uso de plantillas</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);