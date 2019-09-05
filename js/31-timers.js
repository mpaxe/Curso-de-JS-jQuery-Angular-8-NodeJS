'use strict'

window.addEventListener('load', () => {
    // Timers
    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");
    var tiempo;
    
    stop.addEventListener("click", () =>{
        clearInterval(tiempo);
    });

    start.addEventListener("click", () => {
        tiempo = intervalo();
    });

    // Se ejecuta cuando termina el tiempo marcado
    // var tiempo = setTimeout(() => {
    //     console.log("Set interval ejecutado");
    //     var encabezado = document.querySelector("h1");

    //     if(encabezado.style.fontSize == "50px"){
    //         encabezado.style.fontSize = "30px";
    //     }else{
    //         encabezado.style.fontSize = "50px";
    //     }
    // },500);

    function intervalo(){
        // Se ejecuta el evento cada intervalo de tiempo
        var tiempo = setInterval(() => {
            var encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        },1000);
    
        return tiempo;
    }
});

