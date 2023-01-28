let Zapatos = [
    { Marca : 'NIKE' , Stock: 8, Precio: 130.50 },
    { Marca : 'PUMA' , Stock: 2, Precio: 190.10 },
    { Marca : 'ADIDAS' , Stock: 5, Precio: 230.70 },
    { Marca : 'CONVERSE' , Stock: 9, Precio: 90.50 },
    { Marca : 'PIRMA' , Stock: 1, Precio: 120.00 }
];

// Imprimir en consola solo las marcas con sus stock.
console.log("Marcas disponibles con su stock \n");
Zapatos.forEach(Marcas=>{
    console.log("Marca: "+Marcas.Marca +" Stock: "+ Marcas.Stock);
})

//Imprimir en consola solo si alguno de los productos cuesta más de 200.
console.log("Productos que Cuestan mas de $200\n");
let Productos = Zapatos.filter(Marcas => Marcas.Precio>200)
console.log(Productos);

//Imprime en consola el precio promedio de los productos.
let promedio=0;
Zapatos.forEach(Elemento=>{
    promedio = promedio+Elemento.Precio;
});
console.log("Promedio del precio de los productos: "+(promedio/Zapatos.length));

// Imprime en consola alfabéticamente el nombre de los productos.
console.log("Productos ordenados Alfabeticamente\n");
Zapatos.sort((a,b)=>{

    if(a.Marca==b.Marca){
        return 0;
    }
    if(b.Marca>a.Marca){
        return -1;
    }
    return 1;
});
console.log(Zapatos);

// Imprime en consola el producto más costoso, y redondea en un número entero.
let PrecioMAX = 0;
Zapatos.forEach(Producto=>{
    PrecioMAX = Math.max(Producto.Precio,PrecioMAX);
});

let ProductoMax = Zapatos.filter(Marcas=>Marcas.Precio==PrecioMAX)

PrecioMAX = Math.round(PrecioMAX);

let Producto = ProductoMax[0].Marca;

console.log("El producto mas caro es "+Producto+" con un precio de: $"+PrecioMAX);