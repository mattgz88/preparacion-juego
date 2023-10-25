vars = [];
values = [];

//Limpiar elementos
reset = () => {
    bloque.remove();
    mapa.remove();
};

//Setup del nivel
init = () => {
    iniciarJugador(150, 330);

    bloque = new Sprite();
    bloque.w = 30;
    bloque.h = 30;
    bloque.x = 200;
    bloque.y = 342;
    bloque.collider = "kinetic";
    bloque.img = "texturas/bloques/bloque_acero.png";
    bloque.scale = 1.3;

    mapa = new Tiles(
        [
            "#######################",
            "#....................##",
            "#....................##",
            "#..................####",
            "#########........######",
            "#########........######",
            "########.........######",
            "########.........######",
            "#######..........o...##",
            "#.....*..........o.....",
            "#.@...*........-.o....s",
            "#######################",
        ],
        50,
        220,
        41,
        41
    );

    ramas.collides(jugador.disparosFuego, (r, f) => {
        r.remove();
        f.remove();
    });

    

    bloque.collided(boton, () => {
        bloque.remove();
        boton.img = 'texturas/bloques/placa de presion 2.png';
    });
};

//Draw del nivel
code = () => {
    background(Gran_bosque_de_jura);
    jugador.renderizar();
    if (jugador.collides(salida)) {
        terminarNivel(true);
    }
    if (bloque.colliding(boton)) {
        boton.img = "texturas/bloques/placa de precion 2.png";
        troncos.remove();
        bloque.remove();
    }
    if (jugador.collides(power)) {
        estado++;
        power.remove();
    }
    if(bloque.collides(jugador)&&jugador.elemento == "aire"){
        bloque.collider = "kinetic";
        bloque.move(40 * jugador.mirandoHacia, "rigth", 2);
    }else if(jugador.elemento == "agua"||jugador.elemento == "fuego"||jugador.elemento == "electricidad"){
        bloque.collider = "static";
    }else{
        bloque.collider = "dynamic";
    }

};

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));
