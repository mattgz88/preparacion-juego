//  nivel 2-2: Se mueve el bloque y se habre la escotilla para luego eliminar a los montruos "e"
//  luego se entra en una sala con un golem "E" mientras la pared se cierra lentamente, 3 golpes para matar al golem

//Variables del nivel con sus valores
vars = [
    "piedra",
    "bloque",
    "boton",
    "escotilla",
    "erizo",
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
];

//Limpiar elementos
reset = () => {
    piedra.remove();
    bloque.remove();
    boton.remove();
    escotilla.remove();
    erizo.remove();
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

    escotilla = new Sprite();
    escotilla.width = 206;
    escotilla.height = 40;
    escotilla.x = 133;            //133
    escotilla.y = 302;

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "#";
    piedra.collider = "static";

    bloque = new Sprite();
    bloque.w = 40;
    bloque.h = 40;
    bloque.x = 400;
    bloque.y = 260;
    bloque.tile = "+";
    bloque.collider = "kinetic";

    boton = new Group();
    boton.w = 10;
    boton.h = 40;
    boton.tile = "|";
    boton.collider = "static";

    erizo = new Group();
    erizo.w = 25;
    erizo.h = 25;
    erizo.tile = "e";

    hielo = new Group();
    hielo.w = 40;
    hielo.h = 40;
    hielo.tile = "H";
    hielo.collider = "static";

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
            "###........|########",
            ".....###############",
            "#.................##",
            "#.......e...e.....##",
            "###############HH###",
            "###>.............<##",
            "###>..e..........<##",
            "####HH##############",
            "###....^^^..^^^..@.s",
            "####################",
        ],
        50,
        220,
        41,
        41
    );

    hielo.collides(jugador, (h,j)=> jugador.elemento == "fuego" ? h.remove():0);
    bloque.collided(jugador, (h,j)=> jugador.elemento == "aire" ? bloque.move(40 * jugador.mirandoHacia, 'rigth', 2 ):0); 
    bloque.overlaps(boton, () => {bloque.remove(); boto.remove(); escotilla.move(100, 'left', 2)})
};

//Draw del nivel
code = () => {
    jugador.renderizar();
    if (jugador.collides(salida)) {
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

    if(jugador.y>260){
        erizoAtack();
    }
    if(jugador.collides(power2)){
        estado++;
        power2.remove();
    }
    
        


};

async function erizoAtack() {
	await erizo.moveTo(player.x, erizo.y, 3);

}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));

//revisar que el powerup aire tien que estar en lvl1-2 tras las ramas
//cambiar de lugar la funcion de ontener el power
//renombar piedra como bloque en lvl1-2
