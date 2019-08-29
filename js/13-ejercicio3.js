'use stritc'

// Hacer un programa que muestre toods los números entre dos números introducidos por el usuario

var flag = 0;

do {
    if(flag > 0){
        alert("Error. Tiene que introducir un número.");
    }
    var num1 = parseInt(prompt("Introduce el primer número"));
    var num2 = parseInt(prompt("Introduce el segundo número"));
    flag++;
}while(isNaN(num1) || isNaN(num2));

if(num1 <= num2){
    for(num1; num1 <= num2; num1++){
        document.write(num1+"<br>");
    }
}else {
    for(num2; num2 <= num1; num2++){
        document.write(num2+"<br>");
    }
}
