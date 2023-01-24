
// Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function sumar (A,B,C){
    return A+B+C;
}
console.log(sumar(15,15,100));

// Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function comparar (X,Y){
    if((X)>(Y)){
        return X+" Es Mayor";
    }else{
        return Y+ " Es Mayor";
    }
}

console.log(comparar(250,420));

// Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

const sumar2 = (A,B,C) => { return A+B+C;}
console.log(sumar2(2,2,2));

const comparar2 = (X,Y) =>{
    if((X)>(Y)){
        return X+ " Es Mayor que "+Y;
    }else{
        return Y+ " Es Mayor que "+ X;
    }
}
console.log(comparar2(450,250));

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
