let numeroSecreto = Math.floor(Math.random()*10)+1;
let numerdelJugador =0;
let intentos = 1;
let intentoMaximo = 3;
console.log(numeroSecreto);

while(numeroSecreto != numerdelJugador){
    numerdelJugador = prompt("Ingrese el numero entre 1 a 10");
    if(numeroSecreto==numerdelJugador) {
        alert (`Acertaste el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos==1 ? `vez`: `veces`}`)
    } else {
        if(numerdelJugador>numeroSecreto){
            alert("el numero secreto es menor")
        } else {
            alert("EL numero secreto es mayor")
        }
        }

    intentos++;
    if(intentos >intentoMaximo) {
        alert(`Llegaste al numero maximo de ${intentoMaximo} intentos`)
        break;
    }
}

