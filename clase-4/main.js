/*
Estructura de una funcion


function nombreFuncionEnCamelCase(){

    codigo a ejecutar por la funcion
}

*/

/*
function saludar(){
    console.log("Hola Coder");
}

//lLamamos la funcion de esta forma y la ejecutamos. Primero se declara arriba y luego se llama.
saludar();
*/

/*
function pedirDatos() {
  let nombre = prompt("Ingrese su nombre");
  alert(`Hola ${nombre}`);
}

pedirDatos();
*/

/* 
Estructura de una funcion con parametros

function nombreFuncion (parm1, parm2, ....., parmn){
    codgio a ejecutar
}

*/

/*
function saludar(saludo, nombre) {
  console.log(`${saludo} ${nombre}`);
}

saludar("Hola", "Juan");
saludar("Bienvenida", "Maria");
*/

/*
function enviarCorreo(email) {
  console.log(`Correo enviado a ${email}`);
}

enviarCorreo("ximena@gmail.com");
*/

/*
function enviarCorreo(email) {
  console.log(`Correo enviado a ${email}`);
}


for (let turno = 1; turno < 4; turno++) {
  let nombre = prompt("Ingrese su nombre");
  let correo = prompt("Ingrese su correo");

  if (!correo.includes("@")) {
    alert("Incluya un correo valido por favor");
  } else {
    alert(`Turno #${turno} Nombre: ${nombre}`);
    enviarCorreo(correo);
  }
}
*/

/*
return se utiliza para poder guardar una variable del resultado de una funcion

*/

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// sumar(5, 12);
// sumar(5, 10);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// let resultado = sumar(4, 5);
// console.log("resultado", resultado);

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operacion no identificada";
//       break;
//   }
// }

// let numeroUno = Number(prompt("Ingrese el numero uno"));
// let numeroDos = Number(prompt("Ingrese el numero dos"));
// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numeroUno, numeroDos, operacion);
// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("Chao");
// }

// saludar();

// let resultado;

// function sumar(num1, num2) {
//   resultado = num1 + num2;
// }

// sumar(5, 6);

// console.log(resultado);

// {
//   let nombre = "andres";
// }

// console.log(nombre);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(5, 6));

/* 
formas de la arrow function

si no tiene parámetros dejamos los paréntesis vacíos
si tiene un solo parámetro podemos quitar los paréntesis
si no tiene llaves ni el return la arrow function retorna implicitamente
*/

// const saludar = () => {
//   console.log("Hola");
// };

// saludar();

// const saludar = nombre => {
//   console.log("Hola", nombre);
// };

// saludar("andres");

// const suma = (num1, num2) => num1 + num2;

// console.log(suma(4, 5));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 1000;
let descuento = 100;

// precioProducto + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                // = resta(suma(1000, iva(1000)), 100);
                // = resta(suma(1000, 210), 100);
                // = resta(1210, 100);
                // = 1110

console.log(nuevoPrecio);