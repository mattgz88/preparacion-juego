//Niveles
let nivel=0;
let oneTime=true;
let niveles=[];

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
    niveles[nivel].reset();
    nivel++;
    niveles[nivel].setup();
}