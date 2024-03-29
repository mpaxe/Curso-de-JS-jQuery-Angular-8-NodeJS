'use strict'

// Fetch (ajax) y peticiones a servicios / api rest

var div_usuarios = document.querySelector('#usuarios');


fetch('https://reqres.in/api/users')   
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        
    });

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + '. '+user.first_name +' '+user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector('.loading').style.display = 'none';
    });
}