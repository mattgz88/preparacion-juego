function setup() {
    createCanvas(windowWidth-5, windowHeight-5);
    background("white");

    let botonInicio = new Sprite(windowWidth/2, 500);
    botonInicio.width = 150;
	botonInicio.height = 50;
    botonInicio.textSize = 15;
    botonInicio.text = "Iniciar juego !!";
}

function draw() {
}