//  nivel 2-1: Se sube a la plataforma y se corta la cuerda, se derrite el hielo y pegandose a la pared se baja.
//  Con el elemento de aire se obtiene la llave y se habre la puerta paar luego tirar se por el agujero
vars = ["keyV","plataforma","puente"];
values = [false,undefined,undefined];
//Variables del nivel con sus valores

//Limpiar elementos
reset = () => {
    plataforma.remove();
    puente.remove();
    mapa.remove();
};

//Setup del nivel
init = () => {
    background(200);
    iniciarJugador(100, 420);

    plataforma = new Sprite();
    plataforma.width = 90;
    plataforma.height = 12;
    plataforma.x = 380;
    plataforma.y = 380;
    plataforma.collider = "static";
    plataforma.img = 'texturas/bloques/plataforma 1.png';
    plataforma.scale = 3;

    hoyo = new Sprite();
    hoyo.width = 12;
    hoyo.height = 120;
    hoyo.x = 235;
    hoyo.y = 1000;
    hoyo.rotation = 90;
    hoyo.collider = "static";
    hoyo.img = 'texturas/bloques/salida.png';
    hoyo.scale = 1.7;



    mapa = new Tiles(
        [   "&&&&&&&&&&&&&&&&&&&&&",
            "&.......|...&&&&&&&&&",
            "&.......|...&&&&&&&&&",
            "&.......m...&&&&&&&&&",
            "&...........H......&&",
            "&...........H......&&",
            "&..-........H......&&",
            "&&&&&.......&&&&...&&",
            "&&&&&&.....&k..&...&&",
            "&&&&&&^^^^^&&..&...&&",
            "&&&&&&&&&&&&&..&...&&",
            "&&&&&&&&&&&&&..&...&&",
            "&&&&.....&.........&&",
            "&&........!........&&",
            "&&......&&&&&&&&^^^&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&>....<&&&&&&&&&&&&&",
            "&&......&&&&&&&&&&&&&",
        ],
        50,
        220,
        41,
        41
    );

    hielo.collides(jugador.disparosFuego, (r, f) => {
        r.remove();
        f.remove();
    });
    keyV=false;
};

//Draw del nivel
code = () => {
    let desplegado = false;

    jugador.renderizar();
    if (jugador.collides(hoyo)) {
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
        keyV = true;
        llave.remove();
    }
    if (jugador.collides(puerta) && keyV) {
        puerta.remove();
    }
    if (jugador.collides(boton)) {
        anclaje.remove();
        plataforma.collider = "dynamic";
        boton.img = 'texturas/bloques/placa de presion 2.png';
    }
    if (plataforma.y > 500 && desplegado === false) {
        let aux1 = plataforma.x;
        let aux2 = plataforma.y;
        plataforma.remove();
        puente = new Sprite(aux1, aux2, 90, 12, "static");
        puente.img = 'texturas/bloques/plataforma 1.png';
        puente.scale = 3;
        desplegado = true;
    }
};

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));
