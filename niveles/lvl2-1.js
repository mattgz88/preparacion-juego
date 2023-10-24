//  nivel 2-1: Se sube a la plataforma y se corta la cuerda, se derrite el hielo y pegandose a la pared se baja.
//  Con el elemento de aire se obtiene la llave y se habre la puerta paar luego tirar se por el agujero
esxtra = ["puente"];
value = [undefined];
//Variables del nivel con sus valores
vars = [
    "piedraH",
    "cadena",
    "anclaje",
    "boton",
    "plataforma",

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
    undefined,
];

//Limpiar elementos
reset = () => {
    piedraH.remove();
    cadena.remove();
    anclaje.remove();
    boton.remove();
    plataforma.remove();
    puente.remove();
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
    plataforma.x = 380;
    plataforma.y = 302;
    plataforma.collider = "static";
    plataforma.img = 'texturas/bloques/plataforma 1.png';
    plataforma.scale = 0.14;

    piedraH = new Group();
    piedraH.w = 320;
    piedraH.h = 320;
    piedraH.tile = "&";
    piedraH.collider = "static";
    piedraH.img = 'texturas/bloques/ice rompiendose.png';
    piedraH.scale = 0.13;

    cadena = new Group();
    cadena.w = 5;
    cadena.h = 40;
    cadena.tile = "|";
    cadena.collider = "static";
    cadena.img = 'texturas/bloques/cadena.png';
    cadena.scale = 0.14;

    anclaje = new Group();
    anclaje.w = 10;
    anclaje.h = 40;
    anclaje.tile = "m";
    anclaje.collider = "static";
    anclaje.img = 'texturas/bloques/anclaje.png';
    anclaje.scale = 0.14;

    hielo = new Group();
    hielo.w = 340;
    hielo.h = 340;
    hielo.tile = "H";
    hielo.collider = "static";
    hielo.collides(jugador.disparosFuego, (r, f) => {
        r.remove();
        f.remove();
    });
    hielo.img = 'texturas/bloques/ice ice.png';
    hielo.scale = 0.14;

    llave = new Group();
    llave.r = 10;
    llave.tile = "k";
    llave.img = 'texturas/bloques/llave.png';
    llave.scale = 0.14;

    puerta = new Group();
    puerta.w = 30;
    puerta.h = 40;
    puerta.tile = "!";
    puerta.collider = "static";
    puerta.img = 'texturas/bloques/puerta sprite.png';
    puerta.scale = 0.14;

    pinchos1 = new Group();
    pinchos1.w = 20;
    pinchos1.h = 40;
    pinchos1.tile = "<";
    pinchos1.collider = "static";
    pinchos1.img = 'texturas/bloques/pinchos 1.png';
    pinchos1.scale = 0.14;

    pinchos2 = new Group();
    pinchos2.w = 20;
    pinchos2.h = 40;
    pinchos2.tile = ">";
    pinchos2.collider = "static";
    pinchos2.img = 'texturas/bloques/pinchos 2.png';
    pinchos2.scale = 0.14;


    mapa = new Tiles(
        [
            "........|...&&&&&&&&&",
            "........m...&&&&&&&&&",
            "............H......&&",
            "............H......&&",
            "...-........H......&&",
            "&&&&&.......&&&&...&&",
            "&&&&&&.....&k..&...&&",
            "&&&&&&^^^^^&&..&...&&",
            "&&&&&&&&&&&&&..&...&&",
            "&&&&&&&&&&&&&..&...&&",
            "&&&&......&&.......&&",
            "&&........!........&&",
            "&&......&&&&&&&&^^^&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&ssssss&&&&&&&&&&&&&",
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
    let key = false;

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
    if (jugador.collides(llave)) {
        key = true;
        llave.remove();
    }
    if (jugador.collides(puerta) && key == true) {
        puerta.remove();
    }
    if (jugador.collides(boton)) {
        anclaje.remove();
        plataforma.collider = "dynamic";
    }
    if (plataforma.y > 420 && desplegado === false) {
        let aux1 = plataforma.x;
        let aux2 = plataforma.y;
        plataforma.remove();
        puente = new Sprite(aux1, aux2, 280, 40, "static");
        puente.img = 'texturas/bloques/plataforma 1.png';
        puente.scale = 0.14;
        desplegado = true;
    }
};

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));
