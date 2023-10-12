let tronco, troncos, pinchos, piedra, salida, mapa;

function setup() {
    new Canvas(1200, 500);
    background(200)

    tronco = new Group();
    tronco.w = 40;
    tronco.h = 40;
    tronco.tile = "=";

    troncos = new Group();
    troncos.w = 40;
    troncos.h = 40;
    troncos.tile = "#";

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 10;
    pinchos.tile = "^";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "o";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";

    mapa = new Tiles(
        [
            ".................oooo",
            "...................oo",
            ".................oooo",
            ".................oooo",
            "...........=.....oooo",
            "...##...=..=........s",
            "#####^^^=^^=........s"
        ],
        50,
        220,
        41,
        41
    );
}

function draw () {
    
}