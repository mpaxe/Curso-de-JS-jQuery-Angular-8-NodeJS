'use strict'

// Funciones:
// Conjunto de instrucciones reutilizables

function saludar(nombre = "mundo"){
    console.log("Hola "+nombre);
    console.log("==============");
}

function suma(numero1, numero2){
    return "Suma:            "+(numero1 + numero2);
}

function resta(numero1, numero2){
    return "Resta:           "+(numero1 - numero2);
}

function multi(numero1, numero2){
    return "Multiplicación:  "+(numero1 * numero2);
}

function divi(numero1, numero2){
    return "División:        "+(numero1 / numero2);
}

function porConsola(numero1, numero2){
    console.log(suma(numero1, numero2));
    console.log(resta(numero1, numero2));
    console.log(multi(numero1, numero2));
    console.log(divi(numero1, numero2));
    console.log("***********************");
}

function porPantalla(numero1, numero2){
    document.write(suma(numero1, numero2)+"<br>");
    document.write(resta(numero1, numero2)+"<br>");
    document.write(multi(numero1, numero2)+"<br>");
    document.write(divi(numero1, numero2)+"<br>");
    document.write("***********************<br>");
}

function calculadora(numero1 = 1, numero2 = 1, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

saludar();
saludar("Alvaro");
calculadora();
calculadora(58, 2);
calculadora(9, 3, true);
calculadora(8, 4, true);

// for(var i = 1; i <= 10; i++){
//     console.log(i);
//     calculadora(i, 5);
// }
