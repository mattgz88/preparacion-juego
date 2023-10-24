//  nivel 2-2: Se mueve el bloque y se habre la escotilla para luego eliminar a los montruos "e"
//  luego se entra en una sala con un golem "E" mientras la pared se cierra lentamente, 3 golpes para matar al golem

//Variables del nivel con sus valores
vars = [
    "piedra",
    "bloque",
    "boton",
    "escotilla",
    "erizo",
    "golem",
    "hielo",
    "pinchos1",
    "pinchos2",
    "pinchos",
    "power2",
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
    bloque.remove();
    boton.remove();
    escotilla.remove();
    erizo.remove();
    golem.remove();
    hielo.remove();
    pinchos1.remove();
    pinchos2.remove();
    pinchos.remove();
    power2.remove();
    salida.remove();
};

//Setup del nivel
init = () => {
    background(200);
    iniciarJugador(100, 100);

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "#";
    piedra.collider = "static";

    bloque = new Group();
    bloque.w = 40;
    bloque.h = 40;
    bloque.tile = "+";

    boton = new Group();
    boton.w = 10;
    boton.h = 40;
    boton.tile = "|";

    escotilla = new Group();
    escotilla.w = 40;
    escotilla.h = 20;
    escotilla.tile = "=";

    erizo = new Group();
    erizo.w = 15;
    erizo.h = 15;
    erizo.tile = "e";

    golem = new Group();
    golem.w = 20;
    golem.h = 20;
    golem.tile = "E";

    hielo = new Group();
    hielo.w = 40;
    hielo.h = 40;
    hielo.tile = "H";

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

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 10;
    pinchos.tile = "^";
    pinchos.collider = "static";

    power2 = new Group();
    power2.r = 10;
    power2.tile = "@";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";

    mapa = new Tiles(
        [
            "###........#########",
            "###......+.|########",
            "=====###############",
            "#.................##",
            "#.......e...e.....##",
            "###############HHH##",
            "###>.............<##",
            "###>..E..........<##",
            "####HH##############",
            "###......^^^^^^..@.s",
            "####################",
        ],
        50,
        220,
        41,
        41
    );
};

//Draw del nivel
code = () => {
    jugador.renderizar();
};

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));

//revisar que el powerup aire tien que estar en lvl1-2 tras las ramas
//cambiar de lugar la funcion de ontener el power
//renombar piedra como bloque en lvl1-2
