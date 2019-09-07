'use strict'

window.addEventListener('load', () => {
    // Eventos del ratón
    function cambiarColor(){
        var bg = boton.style.background;
        if(bg == "blue"){
            bg = "red";
        }else{
            bg = "blue";
            boton.style.color = "white";
        }
        boton.style.padding = "10px";
        boton.style.border = "3px solid #ccc"
        boton.style.background = bg;
    }

    var boton = document.querySelector("#boton");

    // Doble click
    // boton.addEventListener('dblclick',function(){
    //     cambiarColor();
    // });

    // Click
    boton.addEventListener('click',function(){
        cambiarColor();
        console.log(this);
        this.style.border = "1.5px dashed red";
    });

    // Mouseover
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    });

    // Mouseout
    boton.addEventListener('mouseout', function(){
        boton.style.background = "yellow"
        boton.style.color = "black";
    });

    // Focus
    var input = document.querySelector('#campo_nombre');

    input.addEventListener('focus', function(){
        console.log("Estas en el input");
    });

    // Blur
    input.addEventListener('blur', function(){
        console.log("Estas en el blur");
    });
    // Keyup
    input.addEventListener('keyup', function(){
        console.log("3. Tecla soltada ",String.fromCharCode(event.keyCode));
    });
    // Keypress
    input.addEventListener('keypress', function(){
        console.log("2. Tecla pulsada ",String.fromCharCode(event.keyCode));
    });
    // Keydown
    input.addEventListener('keydown', function(){
        console.log("1. Estas pulsando ",String.fromCharCode(event.keyCode));
    });
});
