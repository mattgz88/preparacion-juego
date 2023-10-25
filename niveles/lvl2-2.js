//  nivel 2-2: Se mueve el bloque y se habre la escotilla para luego eliminar a los montruos "e"
//  luego se entra en una sala con un golem "E" mientras la pared se cierra lentamente, 3 golpes para matar al golem

//Variables del nivel con sus valores
vars = [
    "piedra",
    "bloque",
    "boton2",
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

];

//Limpiar elementos
reset = () => {
    bloque.remove();
    escotilla.remove();
    mapa.remove();
};

//Setup del nivel
init = () => {

    iniciarJugador(100, 100);

    escotilla = new Sprite();
    escotilla.width = 206;
    escotilla.height = 40;
    escotilla.x = 133;            
    escotilla.y = 302;
//    escotilla.img = 'texturas/bloques/escotilla.png';
    escotilla.scale = 1;

    bloque = new Sprite();
    bloque.w = 40;
    bloque.h = 40;
    bloque.x = 400;
    bloque.y = 260;
    bloque.tile = "+";
    bloque.collider = "kinetic";
    bloque.img = 'texturas/bloques/bloque_acero.png';
    bloque.scale = 1.4;

    boton2 = new Group();
    boton2.w = 10;
    boton2.h = 40;
    boton2.tile = "B";
    boton2.collider = "static";
    boton2.img = 'texturas/bloques/boton 1.png';
    boton2.scale = 1.4;



    mapa = new Tiles(
        [
            "&&&........&&&&&&&&&",
            "&&&......+.B&&&&&&&&",
            ".....&&&&&&&&&&&&&&&",
            "&.................&&",
            "&...........e.....&&",
            "&&&&&&&&&&&&&&&HH&&&",
            "&&&>.............<&&",
            "&&&>..e.e........<&&",
            "&&&&HH&&&&&&&&&&&&&&",
            "&&&..............$.s",
            "&&&&&&&^^^&&^^^&&&&&",
        ],
        50,
        220,
        41,
        41
    );

    hielo.collides(jugador, (h,j)=> jugador.elemento == "fuego" ? h.remove():0);
    bloque.collided(jugador, (h,j)=> jugador.elemento == "aire" ? bloque.move(40 * jugador.mirandoHacia, 'rigth', 2 ):0); 
    bloque.overlaps(boton2, () => {bloque.remove(); escotilla.move(100, 'left', 2)})
    //piedraH.friction = 0;

    erizo.vel.x = ()=> random([-2,2]);
    erizo.bounciness = 1;
    //erizo.collides(allSprites,(e)=>e.vel.x*=-1);
    erizo.collides(jugador.disparosFuego, (e,f)=>{e.remove();f.remove();})
};

//Draw del nivel
code = () => {
    background(Montaña_sombria);
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
    if(jugador.collides(erizo)){
        jugador.vida -= 100;
    }
    if(jugador.collides(power2)){
        estado++;
        power2.remove();
    }
    erizo.vel.y=-0.2;
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));

//revisar que el powerup aire tien que estar en lvl1-2 tras las ramas
//cambiar de lugar la funcion de ontener el power
//renombar piedra como bloque en lvl1-2
