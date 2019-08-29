'use strict'

// Mostrar todos los divisores de un número dado

document.write("<h1>Divisores de un número</h1>");

var flag = 0;

do {
    if(flag > 0){
        alert("Error. Introduzca un número entero");
    }
    var num = parseInt(prompt("Introduce un número"));
    flag++;
}while(!Number.isInteger(num));

for(var i = 1; i <= num; i++){
    if(num % i == 0){
        document.write("El número "+num+" es divisible entre "+i+"<br>");
    }
}