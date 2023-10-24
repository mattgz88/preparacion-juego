//  nivel 2-1: Se sube a la plataforma y se corta la cuerda, se derrite el hielo y pegandose a la pared se baja.
//  Con el elemento de aire se obtiene la llave y se habre la puerta paar luego tirar se por el agujero

//Variables del nivel con sus valores
vars = [
    "piedra",
    "cadena",
    "anclaje",
    "plataforma",
    "puente",
    "hielo",
    "llave",
    "pinchos",
    "puerta",
    "pinchos1",
    "pinchos2",
    "salida",
];
values = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
];

//Limpiar elementos
reset = () => {
    piedra.remove();
    cadena.remove();
    anclaje.remove();
    plataforma.remove();
    puente.remove()
    hielo.remove();
    llave.remove();
    pinchos.remove();
    pinchos1.remove();
    pinchos2.remove();
    puerta.remove();
    salida.remove();
};

//Setup del nivel
init = () => {
    background(200);
    iniciarJugador(40, 280);

    plataforma = new Sprite();
    plataforma.width = 280;
    plataforma.height = 40;
    plataforma.x = 340;
    plataforma.y = 302;
    plataforma.collider = "static";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "#";
    piedra.collider = "static";

    cadena = new Group();
    cadena.w = 5;
    cadena.h = 40;
    cadena.tile = "|";
    cadena.collider = "static";

    anclaje = new Group();
    anclaje.w = 10;
    anclaje.h = 40;
    anclaje.tile = "m";
    anclaje.collider = "static";

    hielo = new Group();
    hielo.w = 40;
    hielo.h = 40;
    hielo.tile = "H";
    hielo.collider = "static";
    hielo.collides(jugador.disparosFuego, (r, f) => {
        r.remove();
        f.remove();
    });

    llave = new Group();
    llave.r = 10;
    llave.tile = "k";

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 10;
    pinchos.tile = "^";
    pinchos.collider = "static";

    puerta = new Group();
    puerta.w = 30;
    puerta.h = 40;
    puerta.tile = "!";
    puerta.collider = "static";

    pinchos1 = new Group();
    pinchos1.w = 20;
    pinchos1.h = 40;
    pinchos1.tile = "<";
    pinchos1.collider = "static";

    pinchos2 = new Group();
    pinchos2.w = 20;
    pinchos2.h = 40;
    pinchos2.tile = ">";
    pinchos2.collider = "static";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";

    mapa = new Tiles(
        [
            ".......|...#########",
            ".......m...#########",
            "...........H......##",
            "...........H......##",
            "...........H......##",
            "####.......####...##",
            "#####.....#k..#...##",
            "#####^^^^^##..#...##",
            "############..#...##",
            "###......!........##",
            "#........!........##",
            "#......########^^^##",
            "#>....<#############",
            "#>....<#############",
            "#>....<#############",
            "#>....<#############",
            "#ssssss#############",
        ],
        50,
        220,
        41,
        41
    );
};

//Draw del nivel
code = () => {
    let desplegado = false;
    let key = true;

    jugador.renderizar();
    if (jugador.collides(salida)) {
        terminarNivel(true);
    }
    if (jugador.collides(pinchos)) {
        terminarNivel(false);
    }
    if (jugador.collides(pinchos1)) {
        terminarNivel(false);
    }
    if (jugador.collides(pinchos2)) {
        terminarNivel(false);
    }
    if(jugador.collides(llave)){
        key=true;
        key.remove();
    }
    if(jugador.collides(puerta)&&key==true){
        puerta.remove();
    }


    if (
        cadena.collides(jugador.disparosFuego) ||
        anclaje.collides(jugador.disparosFuego)||
        kb.presses('p')
    ) {
        anclaje.remove();
        plataforma.collider = "dynamic";
    }
    if (plataforma.y > 420 && desplegado === false) {
        let aux1 = plataforma.x;
        let aux2 = plataforma.y;
        plataforma.remove();
        puente = new Sprite(aux1, aux2, 280, 40, "static");
        desplegado = true;
    }
};

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));
