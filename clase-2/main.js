/*
= asignacion
== comparacion solo de valor
=== comparacion de valor y tipo de dato
*/

/*let valor = true; //variable con tipo de dato booleano. Cuando es True o False
let valor = edad > 100;*/

/*estructura del condicional if

if (condicion) {
    codigo a ejecutar siempre que sea verdadera la condicion
}
*/

/*let edad = 20;

if(edad >=18){
    console.log("Eres mayor de edad")
};*/

/*
estructura de la condicion if else

if(condicion){
    codigo a ejecutar si es verdadera
} else {
    codigo a ejecutar si es falsa
}
*/

/*let edad = parseInt(prompt("Ingrese edad"));

if(edad >= 18){
    alert("Eres mayor de edad")
    }else( )*/

   /* console.log("Hola")*/

/*let nombre = "andres";
//esta es la que vamos a usar si o si para concatenar
console.log(`Hola ${nombre}`);*/



//ACTIVIDAD//
/*
prompt ("Bienvenido a la Rifa Online!, presiona ACEPTAR");

let nombre = prompt ("Ingrese su Nombre").toUpperCase ();

if (nombre !== "") {
    alert ("Gracias!, Presione Aceptar")
} else {
    alert ("El Nombre es requerido") 
}; 

let apellido = prompt ("Ingrese su Apellido").toUpperCase ();

if (apellido !== "") {
    alert ("Gracias!, Presione Aceptar")
} else {
    alert ("El Apellido es requerido")
}; 

let dni = Number(prompt("Ingrese su DNI sin puntos"));

if (dni !== "") {
    alert ("Gracias!, Presione Aceptar")
} else {
    alert ("El DNI es requerido")
}; 

let telefono = Number(prompt("Ingrese su telefono sin 0 y sin 15 (ej:3515664411"));

if (telefono !== "") {
    alert ("Gracias!, Presione Aceptar")
} else {
    alert ("El Telefono es requerido")
}; 

alert ("Gracias!, ya está participando")
*/

alert("Bienvenido a la Rifa Online!, presiona ACEPTAR");

function solicitarInformacion(mensaje) {
    let respuesta = prompt(mensaje).trim().toUpperCase();
    while (respuesta === "") {
        alert("Este campo es requerido");
        respuesta = prompt(mensaje).trim().toUpperCase();
    }
    return respuesta;
}

let nombre = solicitarInformacion("Ingrese su Nombre");
let apellido = solicitarInformacion("Ingrese su Apellido");
let dni = Number(solicitarInformacion("Ingrese su DNI sin puntos"));
let telefono = Number(solicitarInformacion("Ingrese su teléfono sin 0 y sin 15 (ej: 3515664411)"));

alert("Gracias, ya está participando!");

