let gameOver = false;
let agua;
let spr_jugador_fuego;
let spr_jugador_agua;
let spr_jugador_aire;
let spr_jugador_electricidad;
let animaciones_agua = [];

function preload(){
    spr_jugador_fuego = loadImage('./texturas/sprite_fuego/Sprite_fuego_IMG.png');
    spr_jugador_agua = loadImage('./texturas/sprite_agua/Sprite_agua.png');
    spr_jugador_aire = loadImage('./texturas/sprite_viento/Sprite_viento.png');
    spr_jugador_electricidad = loadImage('./texturas/sprite_electricidad/sprite_electrico.png');
    animaciones_agua[0] = loadImage('./texturas/sprite_agua/Sprite_agua_tiro.png');
    animaciones_agua[1] = loadImage('./texturas/sprite_agua/Sprite_agua_corriendo.gif');
    animaciones_agua[2] = loadImage('./texturas/sprite_agua/Sprite_agua_transformacion.gif');
}

function setup() {
    new Canvas();

    background("#f4f");
    agua = new Group();
    niveles[0].setup();
    cargarbloques();
}

function draw() {
    clear();
    if(gameOver == false){
        niveles[nivel].draw();
        if(nivel != 0){
            mostrarPropiedades();
        }
    }
    else{
        mostrarEstadisticas();
    }
    
}