//Variables del nivel con sus valores
vars = ["botonInicio", "botonNiveles", "nivelSelec", "button"]
values = [undefined,undefined, 0, undefined]

//Limpiar elementos
reset = () => {
    botonInicio.remove();
    botonNiveles.remove();
    button.remove()
}

//Setup del nivel
init = () => {
    background("gray");
    nivelSelec = 0;
    
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

    button = new Sprite(width-80, 30, 100, 30);
    button.text = "GOD MODE";
    button.color = "red"
}

//Draw del nivel
code = () => {
    background("gray");
    if (botonInicio.mouse.pressing()){
        cambiarNivel(nivelSelec);
    }
    if (botonNiveles.mouse.presses() && nivelSelec < 6){
        nivelSelec++;
    }
    if(kb.presses('enter')||kb.presses('space')){
        cambiarNivel(nivelSelec);
    }
    if(button.mouse.presses()){
        toggleEstado();
    }
    rect(windowWidth/3+30, 100, 370, 200, 20);
    text(nivelSelec, windowWidth/2, 450)
}

function toggleEstado() {
    if(estado == 0) {estado = 2; button.color = "green"}
    else {estado = 0; button.color = "red"}
}

//Añadir nivel
niveles.push(new claseNivel(init, code, reset, vars, values));