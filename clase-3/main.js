/*Estructura del bucle for


for(desde; hasta; actualizacion){
    codigo a repetir
}
*/

// i = i + 1 === i++ //ESTE ES EL MAS COMUN

/*
for(let i = 0; i <= 100; i = i + 2) {
    console.log(i);
}
*/

//CUIDADO CON LOS BUCLES INFINITOS!!!// 

/*
let numero = parseInt(prompt("Ingrese un numero para saber su tabla de multiplicar"));

for (let i = 1; i <=10; i++) {
    let resultado = numero * i;

    alert (`${numero} * ${i} = ${resultado}`)
}
*/


//BREAK
/*
for (let i = 0; i < 10; i++){
    if (i === 5) {
        break;
        //SE UTILIZA BREAK PARA FRENAR EL BUCLE BAJO CIERTA CONDICION
    } 

    console.log(i)
}
*/


//CONTINUE: SE SALTEA UN VALOR
/*
for (let i = 0; i < 10; i++){
    if (i === 5) {
        continue;
    }

    console.log(i)
}
*/

// % MODULO Y ME DEVUELVE EL RESTO DE LA DIVISION ENTRE numero1 Y numero2

//PARES
/*
for (let numero = 1; numero <= 10; numero++){
    if (numero % 2 === 0){
        continue;
    }

    console.log(numero);
}
*/

//IMPARES
/*
for (let numero = 1; numero <= 10; numero++){
    if (numero % 2 !== 0){
        continue;
    }

    console.log(numero);
}
*/

//WHILE

/*

while(condicion) {
    codigo a repetir mientras sea verdadera la condicion
}

*/

/*
let usuario = prompt("ingrese el usuario");

while(usuario !== "pepito"){
    alert("Usuario Incorrecto");
    usuario = prompt("ingrese el usuario");
}

*/

//ESTRUCTURA DEL DO WHILE

/*
do{
    codigo a repetir por primera vez y las demas siempre que la condicion sea verdadera
} while(condicion);
*/

// EL WHILE PRIMERO VERIFICA LUEGO ACTUAL, EL DO WHILE PRIMERO ACTUAL Y LUEGO VERIFICA.

/*
let numero;

do{
    numero = prompt("Ingrese el numero")
    console.log(numero);
}while(parseInt(numero))

*/

//CASI NO SE USA UN DO WHILE EN LA ACTUALIDAD

//SWITCH

//Es Similar al IF / ELSE IF

/*

switch (valor){
    case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;

    case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;
}
*/

// let entrada = prompt("Ingrese un nombre");

// while (entrada != "ESC") {
//   switch (entrada) {
//     case "ANA":
//       alert("Hola ANA");
//       break;

//     case "JUAN":
//       alert("Hola JUAN");
//       break;

//     default:
//       alert("QUien eres?");
//       break;
//   }
//   entrada = prompt("Ingrese un nombre");
// }

// let numero = "4";

// switch (numero) {
//   case 4:
//     console.log("Entramos al 4");
//     break;

//   default:
//     console.log("no reconocido");
//     break;
// }

/* EJERCICIO*/

for (i = 1; i <=1000; i++) {

    let nombre = prompt("Ingrese Nombre");

    let apellido = prompt("Ingrese Apellido");

    alert (`Ya estás participando ${nombre}, tu número de rifa es ${i}`)

}

