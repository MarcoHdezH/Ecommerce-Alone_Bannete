
// Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function sumar (){
    return 2+3+4;
}
console.log(sumar());

// Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function comparar (){
    if((24+224)>(111*111)){
        return "22 + 224 es Mayor";
    }else{
        return "111*111 es mayor";
    }
}

console.log(comparar());

// Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

const sumar2 = () => { return 2+3+4;}
console.log(sumar2());

const comparar2 = () =>{
    if((24+224)>(111*111)){
        return "22 + 224 es Mayor";
    }else{
        return "111*111 es Mayor";
    }
}
console.log(comparar2());

// Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log(). 

const Producto = {
    ID : 1,
    Nombre : "Taza de Cheems",
    Precio : 350,
    Stock : 10,
    Descripcion: "Taza de 11 Oz con imagen de meme de Perro",
    Ventas : 0,
}

const {Nombre,Precio,Descripcion} = Producto;
console.log(`Nombre de Producto: ${Nombre}. Precio Unitario: ${Precio}. Descripción General: ${Descripcion}`)

// Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const arreglo = ["Hola",10,100,[100,0]];

const [saludo,Diez,Cien,] = arreglo;

console.log(`${saludo}, ¿Comó has estado?. Estamos a ${Diez} de septiembre, ¿De casualidad tienes los ${Cien} pesos que te preste la semana pasada?`)
