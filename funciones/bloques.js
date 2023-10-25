
let piso,pilar,troncos,pinchos,luces,pinchos1,pinchos2,boton2,power2,erizo,piedra,puerta,llave,anclaje,cadena,piedraH,salida,mapa,ramas,boton,bloque,power;
function cargarbloques(){
    pilar = new Group();
    pilar.w = 340;
    pilar.h = 340;
    pilar.tile = "=";
    pilar.collider = "static";
    pilar.img = 'texturas/bloques/columna de piedra bloque.png';
    pilar.scale = 0.14;

    troncos = new Group();
    troncos.w = 340;
    troncos.h = 340;
    troncos.tile = "o";
    troncos.collider = "static";
    troncos.img = 'texturas/bloques/madera bloque.png';
    troncos.scale = 0.14;

    pinchos = new Group();
    pinchos.w = 40;
    pinchos.h = 20;
    pinchos.tile = "^";
    pinchos.collider = "static";
    pinchos.img = 'texturas/bloques/pinchos.png';
    pinchos.scale = 0.98;

    piedra = new Group();
    piedra.w = 320;
    piedra.h = 320;
    piedra.tile = "#";
    piedra.collider = "static";
    piedra.img = 'texturas/bloques/piedra bloque.png';
    piedra.scale = 0.13;

    ramas = new Group();
    ramas.w = 100;
    ramas.h = 100;
    ramas.tile = "*";
    ramas.collider = "static";
    ramas.img = 'texturas/bloques/ramas.png';
    ramas.scale = 0.27;

    boton = new Group();
    boton.w = 40;
    boton.h = 2;
    boton.tile = "-";
    boton.collider = "static";
    boton.img = 'texturas/bloques/placa de presion 1.png';
    boton.scale = 1.3;

    power = new Group();
    power.r = 25;
    power.tile = "@";
    power.img = 'texturas/bloques/power aire.png';
    power.scale = 2;

    power2 = new Group();
    power2.r = 25;
    power2.tile = "$";
    power2.img = 'texturas/bloques/power elec.png';
    power2.scale = 1.2;

    piedraH = new Group();
    piedraH.w = 320;
    piedraH.h = 320;
    piedraH.tile = "&";
    piedraH.collider = "static";
    piedraH.img = 'texturas/bloques/ice rompiendose.png';
    piedraH.scale = 0.13;

    cadena = new Group();
    cadena.w = 5;
    cadena.h = 40;
    cadena.tile = "|";
    cadena.collider = "static";
    cadena.img = 'texturas/bloques/cadena.png';
    cadena.scale = 2.2;

    anclaje = new Group();
    anclaje.w = 10;
    anclaje.h = 40;
    anclaje.tile = "m";
    anclaje.collider = "static";
    anclaje.img = 'texturas/bloques/anclaje.png';
    anclaje.scale = 2.8;

    hielo = new Group();
    hielo.w = 340;
    hielo.h = 340;
    hielo.tile = "H";
    hielo.collider = "static";
    hielo.img = 'texturas/bloques/ice ice.png';
    hielo.scale = 0.14;

    llave = new Group();
    llave.r = 30;
    llave.tile = "k";
    llave.img = 'texturas/bloques/llave.png';
    llave.scale = 0.14;

    puerta = new Group();
    puerta.w = 30;
    puerta.h = 60;
    puerta.tile = "!";
    puerta.collider = "static";
    puerta.img = 'texturas/bloques/puerta sprite.png';
    puerta.scale = 0.07;

    erizo = new Group();
    erizo.w = 150;
    erizo.h = 150;
    erizo.tile = "e";
    erizo.img = 'texturas/bloques/erizo.png';
    erizo.scale = 0.16;

    pinchos1 = new Group();
    pinchos1.w = 20;
    pinchos1.h = 40;
    pinchos1.tile = "<";
    pinchos1.collider = "static";
    pinchos1.layer = 1;
    pinchos1.img = 'texturas/bloques/pinchos 1.png';
    pinchos1.scale = 1;

    pinchos2 = new Group();
    pinchos2.w = 20;
    pinchos2.h = 40;
    pinchos2.tile = ">";
    pinchos2.collider = "static";
    pinchos2.img = 'texturas/bloques/pinchos 2.png';
    pinchos2.scale = 1;                                      //cambiar a 1

    luces = new Group();
    luces.w = 20;
    luces.h = 20;
    luces.tile = "+";
    luces.collider = "none";
    luces.img = 'texturas/bloques/lampara.png';
    luces.scale = 1.2;

    salida = new Group();
    salida.w = 90;
    salida.h = 90;
    salida.tile = "s";
    salida.collider = "static";
    salida.img = 'texturas/bloques/salida.png';
    salida.scale = 0.4;

}