'use strict'

// Ejercicio que nos diga si un número es par o impar

var flag = 0;
var flag2 = 0;

do{
    if(flag > 0){
        alert("Error. Introduzca un número entero");
    }
    var num = parseInt(prompt("Introduzca un número"));
}while(!Number.isInteger(num));

do{
    if(flag2 > 0){
        num = parseInt(prompt("Introduzca otro número. (Cero para salir)"));
    }
    if(num != 0){
        if(num % 2 == 0) {
            alert("El número "+num+" es par");
        }else {
            alert("El número "+num+" es impar");
        }
    }
    
    flag2++;
}while(num != 0);
