//Variables del nivel con sus valores
vars = ["botonInicio", "botonNiveles"]
values = [undefined]

//Limpiar elementos
reset = () => {
    botonInicio.remove();
    botonNiveles.remove();
}

//Setup del nivel
init = () => {
    background("gray");
    
    
    botonInicio = new Sprite(windowWidth/2, 200);
    botonInicio.width = 150;
    botonInicio.height = 50;
    botonInicio.textSize = 15;
    botonInicio.text = "Iniciar juego !!";

    botonNiveles = new Sprite(windowWidth/2, 400);
    botonNiveles.width = 150;
    botonNiveles.height = 50;
    botonNiveles.textSize = 15;
    botonNiveles.text = "Niveles";
    
}

//Draw del nivel
code = () => {
    background("gray");
    if (botonInicio.mouse.pressing()){
        cambiarNivel();
    }
    rect(windowWidth/3, 100, 370, 200, 20);
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));