'use strict'

// Utilizando un bucle, hacer la suma y la media de los números introducidos hasta que se introduzca un número negativo
// y mostrar el resultado

var num = parseInt(prompt("Introduzca 1º número. (Número negativo para salir)"));
var cont = 0;
var suma = 0;

while(num >= 0 || isNaN(num)){
    if(isNaN(num)){
        num = parseInt(prompt("Introduzca número correcto. (Número negativo para salir)"));
    }else{
        suma += num;
        cont++;
        num = parseInt(prompt("Introduzca "+(cont+1)+"º número. (Número negativo para salir)"));
    }
}
alert("La suma es igual a: "+suma);
alert("La media es igual a: "+(suma/cont));


