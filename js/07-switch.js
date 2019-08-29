'use strict'

// Switch

var edad = 39;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "ya eres un adulto";
        break;
    case 40:
        imprime = "crisis de los cuarenta";
        break;
    case 75:
        imprime = "eres un anciano";
        break;
    default:
        imprime = "edad neutra";
        break;
}

console.log(imprime);