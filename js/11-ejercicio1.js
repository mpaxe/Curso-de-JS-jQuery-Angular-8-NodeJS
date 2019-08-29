'use strict'

// Pedir dos números y que diga cual es mayor
// si los números son menores a 0 o no son números, que los vuelva a pedir

do {
    var numero1 = parseInt(prompt("¿Intoduce un número?"));
    var numero2 = parseInt(prompt("¿Intoduce otro número?"));
    if(numero1 <=0 || numero2 <= 0) {
        alert("Introduce números positivos");
    }else if (numero1 < numero2) {
        alert(numero1+" < "+numero2);
    }else if (numero1 > numero2) {
        alert(numero1+" > "+numero2);
    }else if (numero1 == numero2){
        alert(numero1+" = "+numero2);
    }else {
        alert("Introduce números");
    }
}while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2));
