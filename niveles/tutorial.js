vars = ["floor", "enemy"]
values = [undefined, undefined]


reset = () => {
    suelo.remove();
}

init = () => {
    background("gray");
    world.gravity.y = 10;
	iniciarJugador(windowWidth/3, windowHeight-100);
	//ball = new Sprite(40, 30, 50);

	floor = new Sprite(windowWidth/2, windowHeight-50, windowWidth, 5, 'static');
    enemy = new Sprite(windowWidth/2+200, windowHeight-100);
    enemy.d = 40;
}

code = () => {
    background("gray");
    jugador.renderizar();
}

niveles.push(new claseNivel(init, code, reset, vars, values));