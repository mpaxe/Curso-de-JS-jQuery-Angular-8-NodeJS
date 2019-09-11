'use strict'

// Mostrar usuario por id
var id;
var div_usuario = document.querySelector('#mostrar_usuario');
var div_usuarios = document.querySelector('#mostrar_usuarios');

function obtenerId() {
    id = document.querySelector('#id_usuario').value;
    return id;
}
 
function obtenerUsuarioPorId(id){
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(data => data.json()
    .then(user => {
        let tabla = document.createElement('tr');
        let id = document.createElement('td');
        let nombre = document.createElement('td');
        let nombre_usuario = document.createElement('td');
        let email = document.createElement('td');
        let telefono = document.createElement('td');
        let web = document.createElement('td');
        id.innerHTML = user.id;
        nombre.innerHTML = user.name;
        nombre_usuario.innerHTML = user.username;
        email.innerHTML = user.email;
        telefono.innerHTML = user.phone;
        web.innerHTML = user.website;
        div_usuario.appendChild(tabla);
        div_usuario.appendChild(id);
        div_usuario.appendChild(nombre);
        div_usuario.appendChild(nombre_usuario);
        div_usuario.appendChild(email);
        div_usuario.appendChild(telefono);
        div_usuario.appendChild(web);
        document.querySelector('#id_usuario').value = '';
        document.querySelector('.loading').style.display = 'none';
    }));
}

function obtenerUsuarios(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json()
    .then(users => {
        users.map((user ,i) => {
            let usuario = document.createElement('h4');
            usuario.innerHTML = user.id+" - "+user.name;
            div_usuarios.appendChild(usuario);
        });
    }));
}

var boton = document.querySelector('#boton');

obtenerUsuarios();

boton.addEventListener('click', function(){
    id = obtenerId();
    obtenerUsuarioPorId(id);
});