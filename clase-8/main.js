// Objeto Math

// Son herramientas matematicas

// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.max(5,4,8,10,55,456,112));
// console.log(Math.min(5,4,8,10,55,456,112));

// console.log(Math.max(5,4,8,10,55,456, Infinity,112));
// console.log(Math.min(5,4,8,10,55, -Infinity,456,112));

// console.log(Math.ceil(3.24)); //aproxima hacia arriba

// console.log(Math.floor(3.78)); // aproxima hacia el entero de abajo

// console.log(Math.round(3.2));
// console.log(Math.round(3.6)); //aproxima el mas cercano como tal.

//raiz cuadrada
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1)); //no se puede calcular

// console.log(Math.random()); //random entre 0 y 1
// console.log(Math.random() * 10); // random entre 0 y 10

// console.log(Math.ceil(Math.random() * 10)); // numeros enteros

//math.random() * rango + desplazamiento

// random de 37 al 52.
// console.log(Math.round(Math.random() * 15 + 37));

// // random de entre 2 al 7
// console.log(Math.round(Math.random() * 2 + 5));

// // random entre 0 y 100
// console.log(Math.round(Math.random() * 100));


// funcion para generar numeros random
// const generadorNumero = (rango, desplazamiento) => {
//   return Math.round(Math.random() * rango + desplazamiento);
// };

// console.log(generadorNumero(30,5));
// console.log(generadorNumero(45,7));
// console.log(generadorNumero(55,2));

//Dado un arreglo de nombres crear una funcion que devuelva nombres aleatorios


//EJERCICIO DE ARMAR UNA FUNCION DE NOMBRES ALEATORIOS EN BASE A UN ARRAY

/*
const nombres =  ["juan", "pedro", "luis", "anita", "mabel", "angie", "helena"]

const nombreAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        return nombres[indiceAleatorio];
}

console.log(nombreAleatorio());
*/


//Clase Date nos permite manejar fechas

// console.log(Date());

// console.log(new Date(2023,9,9));

// const navidad = new Date(2023,11,24,23,59,59)

// console.log(navidad);

// const navidad2 = new Date("December 24, 2023 23:59:59")

// console.log(navidad2);

// console.log((navidad2.toDateString()));
// console.log((navidad2.toLocaleString()));
// console.log((navidad2.toLocaleDateString()));
// console.log(navidad2.toTimeString());

// console.log(navidad2.getFullYear());
// console.log(navidad2.getMonth());
// console.log(navidad2.getDay()); //el 0 representa el lunes


const navidad2 = new Date("December 24, 2023 23:59:59")
const hoy = new Date("October 9, 2023")

console.log(navidad2 - hoy);
console.log((navidad2 - hoy) / 86400000);

