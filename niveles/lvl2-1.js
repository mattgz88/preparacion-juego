//  nivel 2-1: Se sube a la plataforma y se corta la cuerda, se derrite el hielo y pegandose a la pared se baja.
//  Con el elemento de aire se obtiene la llave y se habre la puerta paar luego tirar se por el agujero

//Variables del nivel con sus valores
vars = ["piedra","cuerda","plataforma","hielo","llave","pinchos","puerta","pinchos1","pinchos2","salida"]
values = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]

//Limpiar elementos
reset = () => {
    piedra.remove();
    cuerda.remove();
    plataforma.remove();
    hielo.remove();
    llave.remove();
    pinchos.remove();
    pinchos1.remove();
    pinchos2.remove();
    puerta.remove();
    salida.remove();
}

//Setup del nivel
init = () => {
    background(200);
    iniciarJugador(40, 280);

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "#";
    piedra.collider = "static";

    cuerda = new Group();
    cuerda.w = 5;
    cuerda.h = 40;
    cuerda.tile = "|";
    cuerda.collider = "static";

    plataforma = new Group();
    plataforma.w = 40;
    plataforma.h = 20;
    plataforma.tile = "=";

    hielo = new Group();
    hielo.w = 40;
    hielo.h = 40;
    hielo.tile = "H";

    llave = new Group();
    llave.r = 10;
    llave.tile = "k";

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 10;
    pinchos.tile = "^";
    pinchos.collider = "static";

    puerta = new Group();
    puerta.w = 10;
    puerta.h = 40;
    puerta.tile = "!";

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

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";



mapa = new Tiles(
    [   ".......|...#########",
        ".......|...#########",
        "....=======H......##",
        "...........H......##",
        "...........H......##",
        "#####.....#####...##",
        "#####.....#k..#...##",
        "#####^^^^^##..#...##",
        "############..#...##",
        "#........!........##",
        "#>......<######^^^##",
        "#>......<###########",
        "#ssssssss###########",
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
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));