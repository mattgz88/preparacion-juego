
let piso,tronco,troncos,pinchos,piedra,salida,mapa;
function cargarbloques(){
    tronco = new Group();
    tronco.w = 340;
    tronco.h = 340;
    tronco.tile = "=";
    tronco.collider = "static";
    tronco.img = 'texturas/bloques/columna de piedra bloque.png';
    tronco.scale = 0.14;

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

    salida = new Group();
    salida.w = 40;
    salida.h = 40;
    salida.tile = "s";
    salida.collider = "static";
    salida.img = 'texturas/bloques/salida.png';
    salida.scale = 0.13;

}