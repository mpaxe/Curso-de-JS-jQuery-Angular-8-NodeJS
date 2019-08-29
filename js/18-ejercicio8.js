'use strict'

/*
Calculadora:
- Pida dos números por pantalla
- Si metemos un mal que nos los vuelva a pedir
- Mostrar el resulatdo en el cuerpo de la página, en una alerta y por consola 
 de sumar, restar multiplicar y dividir 
*/

var num1 = parseInt(prompt("Introduzca el primer número de las operaciones"));
var num2 = parseInt(prompt("Introduzca el segundo número de las operaciones"));

while(isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Error, el número introducido tiene que ser un entero"));
    num2 = parseInt(prompt("Error, el número introducido tiene que ser un entero"));
}

// Operaciones

var suma = num1 + num2;
var rest = num1 - num2;
var mult = num1 * num2;
var divi = num1 / num2;

var resul = "La suma: "+num1+" + "+num2+" = "+suma+"<br>"+
            "La resta: "+num1+" - "+num2+" = "+rest+"<br>"+
            "La multiplicación: "+num1+" x "+num2+" = "+mult+"<br>"+
            "La división: "+num1+" / "+num2+" = "+divi+"<br>";

var resulCMD = "La suma: "+num1+" + "+num2+" = "+suma+"\n"+
            "La resta: "+num1+" - "+num2+" = "+rest+"\n"+
            "La multiplicación: "+num1+" x "+num2+" = "+mult+"\n"+
            "La división: "+num1+" / "+num2+" = "+divi+"\n";

alert(resulCMD);

console.log(resulCMD);

document.write("<h1>Operaciones</h1>");
document.write(resul);
