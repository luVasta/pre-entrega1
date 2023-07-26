let jugador1 = prompt("Jugador Uno ingrese su nombre por favor");
let jugador2 = prompt("Jugador Dos ingrese su nombre por favor");
let eleccionJugador1 = prompt(`${jugador1}, elegi piedra papel o tijera`);
let eleccionJugador2 = prompt(`${jugador2}, elegi piedra papel o tijera`);

function round(){
    if(eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera"||
        eleccionJugador1 === "tijera" && eleccionJugador2 === "papel" ||
        eleccionJugador1 === "papel" && eleccionJugador2 === "piedra"){
        alert(`${jugador1}, usted ha ganado este round`);
    }
    if(eleccionJugador2 === "piedra" && eleccionJugador1 === "tijera"||
        eleccionJugador2 === "tijera" && eleccionJugador1 === "papel" ||
        eleccionJugador2 === "papel" && eleccionJugador1 === "piedra"){
        alert(`${jugador2}, usted ha ganado este round`);
    }
    
    while (eleccionJugador1 === eleccionJugador2) {
        alert(`${jugador1} y ${jugador2} han empatado este round`);
        break
    }
}

round();

//function partida(){
//}
