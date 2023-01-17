document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="imagen/avif">
            <source srcset="build/img/thumb/${i}.webp" type="imagen/avif">
            <img loading="lazy" width="200" height="300" src="./build/img/thumb/${i}.jpg" alt="Imagen">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/Grande/${id}.avif" type="imagen/avif">
            <source srcset="build/img/Grande/${id}.webp" type="imagen/avif">
            <img loading="lazy" width="200" height="300" src="./build/img/Grande/${id}.jpg" alt="Imagen">
        `;

        //Crear Overlay
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');

        //Cerrar Overlay
        const cerrar = document.createElement('p');
        cerrar.textContent = 'X';
        cerrar.classList.add('btn-cerrar');
        cerrar.onclick = function(){
            const body = document.querySelector('body');
            body.classList.remove('fijar');
            overlay.remove();
        };
        overlay.appendChild(cerrar);

        //Añadir HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar');
}