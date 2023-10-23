vars = ["piso", "maquina", "piedra","luces","bloques","pinchos",
        "base","antorcha","laterales","esquina1",
        "marco","esquina2","union","puerta","salida"]
values = [undefined,undefined,undefined,undefined,undefined,
    undefined,undefined,undefined,undefined,undefined,undefined
    ,undefined,undefined,undefined,undefined]

reset = () => {
    piso.remove();
    maquina.remove();
    piedra.remove();
    luces.remove();
    bloques.remove();
    pinchos.remove();
    base.remove();
    antorcha.remove();
    laterales.remove();
    marco.remove();
    esquina1.remove();
    esquina2.remove();
    puerta.remove();
    union.remove();
    salida.remove();
}

init = () => {
    //resizeCanvas(1200, 500);
    iniciarJugador(width/3, height-200);
    background(200);

    piso = new Sprite();
	piso.width = 1500;
	piso.height = 100;
    piso.x = 200;
    piso.y = 535;
    piso.collider = "static";

    maquina = new Group();
    maquina.w = 40;
    maquina.h = 40;
    maquina.tile = "M";
    maquina.collider = "static";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "#";
    piedra.collider = "static";

    luces = new Group();
    luces.w = 20;
    luces.h = 20;
    luces.tile = "*";
    luces.collider = "static";

    bloques = new Group();
    bloques.w = 40;
    bloques.h = 40;
    bloques.tile = "=";
    bloques.collider = "static";

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 10;
    pinchos.tile = "^";
    pinchos.collider = "static";

    base = new Group();
    base.w = 30;
    base.h = 40;
    base.tile = "A";
    base.collider = "static";

    antorcha = new Group();
    antorcha.w = 30;
    antorcha.h = 40;
    antorcha.tile = "U";
    antorcha.collider = "static";

    laterales = new Group();
    laterales.w = 40;
    laterales.h = 40;
    laterales.tile = "|";
    laterales.collider = "static";

    esquina1 = new Group();
    esquina1.w = 40;
    esquina1.h = 40;
    esquina1.tile = "r";
    esquina1.collider = "static";

    marco = new Group();
    marco.w = 40;
    marco.h = 40;
    marco.tile = "-";
    marco.collider = "static";

    esquina2 = new Group();
    esquina2.w = 40;
    esquina2.h = 40;
    esquina2.tile = "l";
    esquina2.collider = "static";

    puerta = new Group();
    puerta.w = 40;
    puerta.h = 40;
    puerta.tile = "X";
    puerta.collider = "static";

    union = new Group();
    union.w = 40;
    union.h = 40;
    union.tile = "I";
    union.collider = "static";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";


    mapa = new Tiles(
        [
            "#######################################################################################",
            "#####........*......*......*......*......*......*......*......*......*......*.........#",
            ".................................................................................r---l#",
            "#####...........................................=................................|XIX|#",
            "#..............................==.....=.......===........=...................U...|XIX|#",
            "#.......M......==^^==^^==.....^==.....=.....=====......===...................A...|XIX|#",
            "#################################.....=.....#####^^^^^^########......##################",
            "#################################^^^^^=^^^^^###################......##################",
            "###############################################################^^^^^^##################",
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
    camera.x = jugador.x;
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));