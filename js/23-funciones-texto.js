'use strict'

// Trasformaciones texto

var numero = 444;
var str1 = "Hola Bienvenido";
var str2 = "Adios Suerte";

var datos1 = numero.toString();
var datos2 = str1.toUpperCase();
var datos3 = str2.toLowerCase();

console.log(datos1);
console.log(datos2);
console.log(datos3);

// Longitud
var nombre = "Jon Doe";

console.log(nombre.length);

// Concatenar

var strFinal1 = nombre + ", "+str1;
var strFinal2 = nombre.concat(", "+str1);

console.log(strFinal1);
console.log(strFinal2);

// Buscar en texto
// Busca la posición donde se encuentra la cadena, es "key sensitive"
var busqueda1 = str1.indexOf("Bienvenido");
// Es lo mismo que indexOf
var busqueda2 = str1.search("Bienvenido");

console.log(busqueda1);
console.log(busqueda2);

// Busca elemento iguales a la entrada y los mete en un array
var str3 = "hola buenos dias, hola como esta, esta bien hola de nuevo";
// Tenemos que poner una expresion regular para que no se pare en el primer elemento
var busqueda3 = str3.match(/hola/g);
console.log(busqueda3);

// Sacar un trozo de cadena indicando la posicion inicial y la longitud de la cadena a extraer

var str4 = "Esto es una prueba para usar sbustr";

// var busqueda4 = "Esto es una prueba para usar sbustr".substr(12, 6);
var busqueda4 = str4.substr(12, 6);
// Tiene que salir prueba

console.log(busqueda4);

//Sacar una letra

var busqueda5 = str4.charAt(12);

console.log(busqueda5);

// Si empieza por una cadena, true o false
console.log(str4.startsWith("Esto"));
console.log(str4.startsWith("prueba"));
// Si termina por una cadena, true o false
console.log(str4.endsWith("sbustr"));
console.log(str4.endsWith("Esto"));
// Si incluye una cadena, true o false
console.log(str4.includes("prueba"));
console.log(str4.includes("usar"));

// Remplazar cadenas
var busqueda6 = str4.replace("sbustr", "replace");
console.log(busqueda6);

// Cortar cadenas
var busqueda7 = str4.slice(5, 18);
console.log(busqueda7);

// Trozcear cadenas
var busqueda8 = str4.split(" ");
console.log(busqueda8);
// Quitar espacios sobrantes por delante y por detrás
var str5 = "    Esto es una prueba para usar trim   ";
var busqueda9 = str5.trim();
console.log(str5);
console.log(busqueda9);