'use strict'

// Mostrar usuario por id
var div_usuario = document.querySelector('#usuario');

function idUsuario(){
    var id_usuario = document.querySelector('#id_usuario').value;
    fetch('https://jsonplaceholder.typicode.com/users/'+id_usuario)
        .then(data => data.json()
        .then(user => {
            let usuario = document.createElement('p');
            usuario.innerHTML = user.name;
            div_usuario.appendChild(usuario);
            document.querySelector(".loading").style.display = 'none';
        }));
    
    
}

