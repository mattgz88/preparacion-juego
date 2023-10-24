let piso;

vars = ["piso", "ramas","tronco","piedra","boton","bloque","salida", "mapa", "power"]
values = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]

//Limpiar elementos
reset = () => {
    piso.remove();
    ramas.remove();
    tronco.remove();
    piedra.remove();
    boton.remove();
    power.remove();
    bloque.remove();
    salida.remove();
    mapa.remove();
}

//Setup del nivel
init = () => {
    background(200);
    iniciarJugador(50, 100);

    piso = new Sprite();
    piso.width = 1500;
    piso.height = 5;
    piso.x = 400;
    piso.y = 570;
    piso.collider = "static";

    ramas = new Group();
    ramas.w = 40;
    ramas.h = 40;
    ramas.tile = "*";
    ramas.collider = "static";
    ramas.collides(jugador.disparosFuego, (r,f)=>{r.remove();f.remove();})

    tronco = new Group();
    tronco.w = 40;
    tronco.h = 40;
    tronco.tile = "o";
    tronco.collider = "static";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "#";
    piedra.collider = "static";

    boton = new Group();
    boton.w = 40;
    boton.h = 20;
    boton.tile = "-";
    boton.collider = "static";

    bloque = new Group();
    bloque.w = 40;
    bloque.h = 40;
    bloque.tile = "+";

    power = new Group();
    power.r = 10;
    power.tile = "@";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";

    mapa = new Tiles(
        [
            ".....................##",
            "......+............####",
            "#########........######",
            "#########........######",
            "#########........######",
            "########.........######",
            "#######..........o...##",
            "#.....*..........o....s",
            "#.@...*........-.o....s",
        ],
        50,
        220,
        41,
        41
    );

    bloque.overlaps(boton);
}

//Draw del nivel
code = () => {
    jugador.renderizar();
    if(jugador.collides(salida)){
        terminarNivel(true);
    }
    if(bloque.colliding(boton)){
        tronco.remove();
        bloque.remove();
    }
    if(jugador.collides(power)){
        estado++;
        power.remove();
    }
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));
