let encendido = false;
let gameON = false;
let barraAltura = 20;
let barraLlena = 0;
let barraMaxima = 200;

reset = () => {
    dragon.remove();
    maquina.remove();
    sombra.remove();
    mapa.remove();
    barraLlena = 0;
    gameON = false;
    encendido = false;
};

init = () => {
    //resizeCanvas(1200, 500);
    iniciarJugador(300, 400);


    dragon = new Sprite();
    dragon.width = 200;
    dragon.height = 1000;
    dragon.x = 150;
    dragon.y = 380;
    dragon.collider = "k";
    dragon.visible = false;
    dragon.img = "/texturas/bloques/mounstruo sombrio bien maquiavelico.gif";
    dragon.scale = 0.5;
    dragon.vida = 200;

    maquina = new Sprite();
    maquina.w = 40;
    maquina.h = 40;
    maquina.tile = "M";
    maquina.collider = "static";
    maquina.img = "texturas/bloques/generador.png";
    maquina.scale = 1.8;

    sombra = new Sprite();
    sombra.w = 3000;
    sombra.h = 400;
    sombra.x = 2000;
    sombra.y = 400;
    sombra.layer = 2;
    sombra.rotationLock = true;
    sombra.color = 20;
    sombra.collider = "none";

    mapa = new Tiles(
        [
            "#######################################################################################",
            "#####........+......+......+......+......+......+......+......+......+......+....#...s#",
            "#................................................................................#...##",
            "#...................................................................................###",
            "#...............................................=..................................####",
            "#.......M......................==.....=.......===........=...................=...######",
            "#.............==^^==^^==... ..^==.....=.....=====......===...................=^^^######",
            "#################################.....=.....#####^^^^^^########......##################",
            "#################################^^^^^=^^^^^###################......##################",
            "###############################################################^^^^^^##################",
        ],
        50,
        220,
        41,
        41
    );
};

//Draw del nivel
code = () => {
    background(Cuenca_profunda);
    jugador.renderizar();
    camera.x = jugador.x;

    if (jugador.collides(dragon) && gameON == true) {
        terminarNivel(false);
    }
    if (jugador.collides(salida)) {
        terminarNivel(true);
    }
    if (jugador.collides(pinchos)) {
        terminarNivel(false);
    }
    if (jugador.x>560 && gameON == false) {
        terminarNivel(false);
    }

    maquina.colliding(jugador, () => {
        if (jugador.elemento == "electricidad" && encendido == true) {
            sombra.visible = false; // Cambia el color del sprite a 200
            pinchos1.remove(); // Elimina el sprite (asumiendo que m es el sprite que quieres eliminar)
            dragon.visible = true;
            dragon.vel.x = 2; // Establece la propiedad dragon.vel.x en 2
            gameON = true;
        }
    });

    fill(200);
    rect(10, 80, barraMaxima, barraAltura);
    fill(0, 255, 0);
    rect(10, 80, barraLlena, barraAltura);

    if (barraLlena >= barraMaxima) {
        encendido = true; // La barra está llena, establece ready en true
    }

    if (
        keyIsPressed &&
        key === " " &&
        jugador.elemento == "electricidad" &&
        jugador.collides(maquina)
    ) {
        // Aumenta la longitud de la barra llena mientras no supere la longitud máxima
        if (barraLlena < barraMaxima) {
            barraLlena += 10;
        }
    }
    if(dragon.collides(jugador.disparosAgua)){
        dragon.vida -= 20;
    }
    if(dragon.vida <= 0){
        dragon.remove();
    }
};
function keyReleased() {
    // Reinicia la barra a cero cuando se suelta la tecla espacio
    if (key === " " && encendido == false) {
        barraLlena = 0;
    }
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));

//activas la maquina con electricidad y escapas del monstruo
