'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest

var espacios = '&nbsp;&nbsp;&nbsp;&nbsp;'

var div_usuarios = document.querySelector('#usuarios');

// Otra forma de hacerlo

// fetch('https://reqres.in/api/users')
//     .then(function(data){
//         return data.json()
//     })
//     .then(users => {
//         usuarios = users.data;
//         console.log(usuarios);
//     });

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users);

        return getUsuario(3);
    })
    .then(data => data.json())
    .then(user => {
        mostrarUsuario(user);
    });

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUsuario(id = 1){
    return fetch('https://jsonplaceholder.typicode.com/users/'+id);
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('p');

        if(user.id < 10){
            nombre.innerHTML = user.id+") <b>Nombre:</b> "+user.name+"<br /><b>"+
            espacios+"Usuario:</b> &nbsp;"+user.username;
        }else if(user.id < 100){
            nombre.innerHTML = user.id+") <b>Nombre:</b> "+user.name+"<br /><b>"+
            espacios+"&nbsp;&nbsp;Usuario:</b> &nbsp;"+user.username;
        }
        
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarUsuario(usuario){
    let nombre = document.createElement('p');
    let separacion = document.createElement('hr');
    let encabezado = document.createElement('h1');

    nombre.innerHTML = usuario.id+") <b>Nombre:</b> "+usuario.name+"<br /><b>"+
    espacios+"Usuario:</b> &nbsp;"+usuario.username;
    encabezado.innerHTML = "<h4>Mostrar usuario</h4>";
   
    div_usuarios.appendChild(separacion);
    div_usuarios.appendChild(encabezado);
    div_usuarios.appendChild(nombre);

    document.querySelector(".loading_dos").style.display = 'none';
}

 