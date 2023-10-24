let piso;

vars = ["ramas","boton","bloque", "mapa", "power"]
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

    boton = new Group();
    boton.w = 340;
    boton.h = 320;
    boton.tile = "-";
    boton.collider = "static";
    boton.img = 'texturas/bloques/placa de presion 1.png';
    boton.scale = 0.14;

    bloque = new Group();
    bloque.w = 340;
    bloque.h = 340;
    bloque.tile = "+";
    bloque.img = 'texturas/bloques/Bloque de acero.png';
    bloque.scale = 0.14;

    power = new Group();
    power.r = 10;
    power.tile = "@";
    power.color = 'cyan'

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
}

//Draw del nivel
code = () => {
    jugador.renderizar();
    if(jugador.collides(salida)){
        terminarNivel(true);
    }
    if(bloque.colliding(boton)){
        boton.img = 'texturas/bloques/placa de precion 2.png';
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
