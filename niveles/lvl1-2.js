

function setup() {
    new Canvas(1400, 500);
    background(200)

    ramas = new Group();
    ramas.w = 40;
    ramas.h = 40;
    ramas.tile = "*";

    tronco = new Group();
    tronco.w = 40;
    tronco.h = 40;
    tronco.tile = "#";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "o";

    boton = new Group();
    boton.w = 40;
    boton.h = 20;
    boton.tile = "-";

    roca = new Group();
    roca.w = 40;
    roca.h = 40;
    roca.tile = "+";

    llave = new Group();
    llave.r = 10;
    llave.tile = "l";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";

    mapa = new Tiles(
        [
            ".....................oo",
            "......+............oooo",
            "ooooooooo........oooooo",
            "oooooooo.........oooooo",
            "ooooooo..........#...oo",
            "......*..........#....s",
            "......*........-.#.l..s"
        ],
        50,
        220,
        41,
        41
    );
}

function draw () {
    
}