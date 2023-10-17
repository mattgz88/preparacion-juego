//Niveles
let nivel=0;
let oneTime=true;
let niveles=[];
let gana_pierde = "pierde";

let init, reset, code, vars, values;

class claseNivel{
    constructor(start, draw, reset, vars, values){
        this.setup = start;
        this.draw = draw;
        this.reset = reset;
        for(let i = 0; i<vars.lenght; i++){
            this[vars[i]] = values[i];
        }
    }
}

function cambiarNivel(){
    if(nivel == 0){
        niveles[nivel].reset();
    }
    nivel++;
    niveles[nivel].setup();
    tiempoInicial = millis();
    tiempo = 0;
    world.gravity.y = 12;
}

function reiniciarNivel(){
    niveles[nivel].setup();
    tiempoInicial = millis();
    tiempo = duracionDeNiveles;
}

//Funcion para hacer todo lo necesario al momento que perdes un nivel
//La muestra de estadisticas se hace automaticamente al setear gameOver a true
function terminarNivel(ganado = false){
    if(ganado){
        gana_pierde = "gana";
    }else{
        gana_pierde = "pierde";
    }
    gameOver = true;
    jugador.remove();
    niveles[nivel].reset();
}