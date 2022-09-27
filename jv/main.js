//* Condicional *//

let edad = parseInt(prompt("Ingrese su edad?"));

if (edad >= 18){
    alert("Bienvenido a DOLAR YA");

//* Ingreso de datos y variables *//
let cuantosD = parseInt(prompt("Cuantos dolares queres vender?"));

let dolarOficial = parseInt(prompt("Cuanto pagaste cada dolar (sin impuestos)"));

let dolarBlue = parseInt(prompt("Cuanto te van a pagar por cada Dolar"));


//* Calculo *//

let dolarSolidario = (dolarOficial * 1.65)
let resta = dolarBlue - dolarSolidario;
let gananciaPorCadaDolar = (resta * cuantosD)

console.log(resta);

alert ('Vendiendo ' + cuantosD + ' Dolares ' + ' a un precio de ' + dolarBlue + ' generarias una ganancia neta de ' + Math.round (gananciaPorCadaDolar) + ' Pesos Argentinos');

} else {
    alert("Gracias por visitarnos, pero necesita ser mayor de edad para ingresar a DOLAR Ya");
}

