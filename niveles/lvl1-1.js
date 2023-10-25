//Variables del nivel
vars = [];
values = [];

//Limpiar nivel
reset = () => {
    piso.remove();
    agua.remove();
    mapa.remove();
};

//Setup
init = () => {
    //resizeCanvas(1200, 500);
    iniciarJugador(100, 400);

    piso = new Sprite();
    piso.width = 900;
    piso.height = 30;
    piso.x = 480;
    piso.y = 535;
    piso.collider = "static";
    piso.color = "grey"

    mapa = new Tiles(
        [
            "######################",
            "#.................####",
            "#..................###",
            "#.................####",
            "#.................####",
            "#...........=.....####",
            "#...oo...=..=.........",
            "#ooooo^^^=^^=........s",
        ],
        50,
        220,
        41,
        41
    );

    agua.color = "blue";
    agua.mass = 3;
    agua.vel.x = -1;
    agua.life = 80;

    //    player.overlaps(pinchos, GameOver);             //player aun no existe

    jugador.collides(salida, () => terminarNivel(true));
    jugador.collides(pinchos, () => terminarNivel(false));
    agua.collides(piso, (w) => w.remove());
};

//Draw
code = () => {
    background(Gran_bosque_de_jura);
    let ag;
    ag = new agua.Sprite(790, 310, 10);
    ag.vel.x = -2;
    jugador.renderizar();
};

//Agregar nivel
niveles.push(new claseNivel(init, code, reset, vars, values));

//fuego= daño a hielo y quemar cosas
//agua= atravesar agua y daño a fuego
//aire (se consigue en 1-2)= volar por 3s y mover bloques
//electricidad (se consigue en 2-2)= activa mecanismos y estunea/paraliza enemigos
