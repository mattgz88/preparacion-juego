let piso, tronco, troncos, pinchos, piedra, power, salida, mapa, water;

function setup() {
    new Canvas(1200, 500);
    background(200);
    world.gravity.y = 20;

    piso = new Sprite();
	piso.width = 1500;
	piso.height = 5;
    piso.x = 200;
    piso.y = 490;
    piso.collider = "static";


    tronco = new Group();
    tronco.w = 40;
    tronco.h = 40;
    tronco.tile = "=";
    tronco.collider = "static";

    troncos = new Group();
    troncos.w = 40;
    troncos.h = 40;
    troncos.tile = "#";
    troncos.collider = "static";

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 10;
    pinchos.tile = "^";
    pinchos.collider = "static";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "o";
    piedra.collider = "static";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";

    power = new Group();
    power.r = 10;
    power.tile = "@";

    mapa = new Tiles(
        [
            ".................oooo",
            "..................ooo",
            ".................oooo",
            ".................oooo",
            "...........=.....oooo",
            "...##...=..=........s",
            "#####^^^=^^=......@.s",
        ],
        50,
        220,
        41,
        41
    );

    water = new Group();
    water.color = "blue";
    water.mass = 3;
    water.vel.x = -1;
    water.life = 120;

    //    player.overlaps(pinchos, GameOver);             //player aun no existe
    //    player.overlaps(salida, NextLevel);             //paris haz tu magia
    //    player.overlaps(power, transformar);            //eliminar power y convertir a elemento aire
	water.collides(piso, adios);
}

function draw() {
    clear();
    new water.Sprite(750, 270, 10);
}

function adios(water, piso) {
	water.remove();
}

function GameOver(player, pinchos) {
    player.remove();

}
