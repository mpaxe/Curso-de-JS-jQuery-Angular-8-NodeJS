'use strict'

// Mostrar números impares entre dos números dados

// Escribo un mensaje descriptivo de lo que hace el ejercicio
document.write("<h1>Números impares sobre dos nuemros dados</h1>");
// Pongo una bandera que me va a lanzar un alert si hay error al introducir los números
var flag = 0;
// Uso un do while por si hay algún error al intorducir los números siga pidiendome que introduzca los números
do{
    // Si hay un error al intoducir los números saltará el alert
    if(flag > 0 ){
        alert("Error. Tiene que intoducir dos números entero");
    }
    // Como es un do while la primera iteración está asegurada así podemos solicitar los números como minimo una vez
    var num1 = parseInt(prompt("Introduce el primer número"));
    var num2 = parseInt(prompt("Introduce el segundo número"));
    // Esto se usa solo si hay un error al intoducir los números
    flag++;
    // El bucle se repetirá simepre que no se introduzca un entero
}while(!Number.isInteger(num1) || !Number.isInteger(num2));
// Uso un if por si al usuario le da por intoducir el primer numero mayor que el segundo
if(num1 <= num2){
    // Este bucle irá iterando sobre los números introducidos
    for(num1; num1 <= num2; num1++){
        // Si el número tiene una división entre dos impar se escribe en la página en blanco
        if(num1 % 2 != 0){
            // Pinta el número en la página
            document.write(num1+"<br>")
        }
    }
// Este else es por si el primer número es mayor que el segundo
}else {
    // Este bucle irá iterando sobre los números introducidos
    for(num2; num2 <= num1; num2++){
        // Si el número tiene una división entre dos impar se escribe en la página en blanco
        if(num2 % 2 != 0){
            // Pinta el número en la página
            document.write(num2+"<br>")
        }
    }
}