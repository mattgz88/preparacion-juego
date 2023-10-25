let gameOver = false;
let agua;

let sprites_agua = [];
let sprites_fuego = [];
let sprites_aire = [];
let sprites_electricidad = [];

function preload() {
    sprites_fuego[0] = loadImage('./texturas/sprite_fuego/Sprite_fuego.png');
    sprites_fuego[1] = loadImage('./texturas/sprite_fuego/Sprite_fuego_tiro.png');
    sprites_fuego[2] = loadImage('./texturas/sprite_fuego/Sprite_fuego_corriendo.gif');
    sprites_fuego[3] = loadImage('./texturas/sprite_fuego/Sprite_fuego_transformacion.gif');

    sprites_agua[0] = loadImage('./texturas/sprite_agua/Sprite_agua.png');
    sprites_agua[1] = loadImage('./texturas/sprite_agua/Sprite_agua_tiro.png');
    sprites_agua[2] = loadImage('./texturas/sprite_agua/Sprite_agua_corriendo.gif');
    sprites_agua[3] = loadImage('./texturas/sprite_agua/Sprite_agua_transformacion.gif');

    sprites_aire[0] = loadImage('./texturas/sprite_viento/sprite_viento.png');
    sprites_aire[1] = loadImage('./texturas/sprite_viento/sprite_viento_tiro.png');
    sprites_aire[2] = loadImage('./texturas/sprite_viento/sprite_viento_corriendo.gif');

    sprites_electricidad[0] = loadImage('./texturas/sprite_electricidad/sprite_electrico.png');
    sprites_electricidad[1] = loadImage('./texturas/sprite_electricidad/sprite_electrico_tiro.png');
    sprites_electricidad[2] = loadImage('./texturas/sprite_electricidad/sprite_electrico_corriendo.gif');
    sprites_electricidad[3] = loadImage('./texturas/sprite_electricidad/sprite_electrico_transformacion.gif');

    Gran_bosque_de_jura = loadImage('./texturas/bloques/fondo bosque.png');
    Montaña_sombria = loadImage('./texturas/bloques/fondo hielo.png');
    Cuenca_profunda = loadImage('./texturas/bloques/cueva de ragnard.png');
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
    if (gameOver == false) {
        niveles[nivel].draw();
        if (nivel != 0) {
            mostrarPropiedades();
        }
    }
    else {
        mostrarEstadisticas();
    }

}
