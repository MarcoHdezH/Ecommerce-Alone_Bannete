const cargarJSONArrayBtn = document.querySelector('#cargarJSON');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('empleados.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>ID: ${id} </p>
            <p>Empleado: ${nombre} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}