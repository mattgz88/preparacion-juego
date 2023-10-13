

function preload(){
    //...
}

function setup() {
    new Canvas();

    background("#f4f")
    niveles[0].setup();
}

function draw() {
    clear();
    niveles[nivel].draw();
    if(nivel != 0){
        mostrarPropiedades();
    }
}