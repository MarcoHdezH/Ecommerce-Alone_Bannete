document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function navegacionFija() {
    const barra = document.querySelector('.header');
    const nosotros = document.querySelector('.sobre-nosotros');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function() {
        if( nosotros.getBoundingClientRect().bottom < 0  ) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( enlace =>{
        enlace.addEventListener('click',function(e){
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);

            seccion.scrollIntoView({behavior:"smooth"});
        });
    });
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