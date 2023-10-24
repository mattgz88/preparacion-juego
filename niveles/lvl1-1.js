//Variables del nivel
vars = [];
values = [];


//Limpiar nivel
reset = () => {
    piso.remove();
    agua.remove();
    mapa.remove();
}

//Setup
init = () => {
    //resizeCanvas(1200, 500);
    iniciarJugador(50,400);
    background(200);

    piso = new Sprite();
	piso.width = 1500;
	piso.height = 100;
    piso.x = 200;
    piso.y = 535;
    piso.collider = "static";


    mapa = new Tiles(
        [
            ".................####",
            "..................###",
            ".................####",
            ".................####",
            "...........=.....####",
            "...oo...=..=........#",
            "ooooo^^^=^^=........s",
        ],
        50,
        220,
        41,
        41
    );

    agua.color = "blue";
    agua.mass = 3;
    agua.vel.x = -1;
    agua.life = 120;

    //    player.overlaps(pinchos, GameOver);             //player aun no existe

    
    jugador.collides(salida, ()=>terminarNivel(true));
    jugador.collides(pinchos, ()=>terminarNivel(false));
	agua.collides(piso, (w)=>w.remove());
}

//Draw
code = () => {
    new agua.Sprite(750, 270, 10);
    jugador.renderizar();
}

//Agregar nivel
niveles.push(new claseNivel(init, code, reset, vars, values));


//fuego= daño a hielo y quemar cosas
//agua= atravesar agua y daño a fuego
//aire (se consigue en 1-2)= volar por 3s y mover bloques
//electricidad (se consigue en 2-2)= activa mecanismos y estunea/paraliza enemigos