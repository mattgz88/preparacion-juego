let piso;

vars = ["piso", "ramas","tronco","piedra","boton","roca","salida", "mapa"]
values = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]

//Limpiar elementos
reset = () => {
    piso.remove();
    ramas.remove();
    tronco.remove();
    piedra.remove();
    boton.remove();
    roca.remove();
    salida.remove();
    mapa.remove();
}

//Setup del nivel
init = () => {
    background(200);

    piso = new Sprite();
    piso.width = 1500;
    piso.height = 5;
    piso.x = 400;
    piso.y = 490;
    piso.collider = "static";

    ramas = new Group();
    ramas.w = 40;
    ramas.h = 40;
    ramas.tile = "*";
    ramas.collider = "static";

    tronco = new Group();
    tronco.w = 40;
    tronco.h = 40;
    tronco.tile = "#";
    tronco.collider = "static";

    piedra = new Group();
    piedra.w = 40;
    piedra.h = 40;
    piedra.tile = "o";
    piedra.collider = "static";

    boton = new Group();
    boton.w = 40;
    boton.h = 20;
    boton.tile = "-";
    boton.collider = "static";

    roca = new Group();
    roca.w = 40;
    roca.h = 40;
    roca.tile = "+";

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";

    mapa = new Tiles(
        [
            ".....................oo",
            "......+............oooo",
            "ooooooooo........oooooo",
            "oooooooo.........oooooo",
            "ooooooo..........#...oo",
            "......*..........#....s",
            "......*........-.#....s",
        ],
        50,
        220,
        41,
        41
    );

    roca.overlaps(boton, open);
    //    fireball.overlaps(ramas, quemar);               //ataque de fuego
    //    player.overlaps(salida, NextLevel);             //paris haz tu magia

    function quemar(ramas, fireball) {
        //cambiar textura
        setTimeout(abrir, 4000);
    }
    function abrir(ramas) {
        ramas.remove();
    }
    
    function open(roca, boton, tronco) {
        roca.x = boton.x;
        player.remove();
    }
}

//Draw del nivel
code = () => {}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));
