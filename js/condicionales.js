let nombres = [

    {
        Nombre : 'Marco',
        Apellido : 'Hernandez',
        Edad : 22,
        Genero : 'Hombre'
    },

    {
        Nombre : 'Nayeli',
        Apellido : 'Martinez',
        Edad : 17,
        Genero : 'Mujer'
    },

    {
        Nombre : 'Aldo',
        Apellido : 'Tlaxca',
        Edad : 23,
        Genero : 'Hombre'
    },

    {
        Nombre : 'Karina',
        Apellido : 'Torres',
        Edad : 21,
        Genero : 'Mujer'
    }
];

for(let i = 0 ; i<nombres.length;i++){

    console.log(nombres[i]);
    if(nombres[i].Edad<=18){
        console.log("Persona menor de Edad Detectada, No Valido");
    }
}


let edades = [15,25,65];
let op=0;
do{
    console.log("Bienvenido Proporciona tu edad");
    for(let i = 0; i < edades.length; i++){
        if(edades[i]>=0 && edades[i]<18){
            console.log("Tienes descuento de estudiente :)");
        }else{
            if(edades[i]>=60){
                console.log("Tienes decuento de Tercera edad :)");
            }else{
                console.log("No Aplica Descuentos");
            }
        }
    }
    op = 3;
}while(op!=3);