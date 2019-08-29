'use strict'

// Tabla de multilicar de un número

// var num = parseInt(prompt("Introduce un número entero para su tabla de multiplicar"));

// while(isNaN(num)){
//     num = parseInt(prompt("Error. Introduce un número entero"));
// }

// document.write("<h1>Tabla de multiplicar del número "+num+"</h1>")

// for(var i = 0;i <= 10; i++){
//     document.write(num +" x "+i+" = "+(num*i)+"<br>");
// }

// Todas las tablas de multiplicar

var num1 = parseInt(prompt("Primer número del rango de las tablas de multiplicar"));
var num2 = parseInt(prompt("Segundo número del rango de las tablas de multiplicar"));

if(num1 > num2){
    num1 -= num2;
    num2 += num1;
    num1 = num2 - num1;
}


while(isNaN(num2) || isNaN(num1)){
    num1 = parseInt(prompt("Error. Introduce el primer número entero"));
    num2 = parseInt(prompt("Error. Introduce el segundo número entero"));
}

for(var j = num1; j <= num2; j++){

    document.write("<h1>Tabla de multiplicar del número "+j+"</h1>")

    for(var i = 0;i <= 10; i++){
        document.write(j +" x "+i+" = "+(j*i)+"<br>");
    }
}
    