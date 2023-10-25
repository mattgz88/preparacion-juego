vars = ["floor", "enemy"]
values = [undefined, undefined]


reset = () => {
    floor.remove();
    enemy.remove();
}

init = () => {
    background("gray");
    world.gravity.y = 10;
	iniciarJugador(width/3, height-100);
	//ball = new Sprite(40, 30, 50);

	floor = new Sprite(width/2, height-50, width, 5, 'static');

    enemy = new Group();
    enemy.d = 40;
    enemy.vida = 100;
    enemy.img = 'texturas/bloques/fueguin.png';
    enemy.scale = 2.2;
    enemy.rotationLock = true;
    enemy.collides(jugador,()=>{
        jugador.vida-=50;
    })
    enemy.collides(jugador.disparosAgua,(enem, disp)=>{
        disp.remove();
        enemy.vida -= 5;
    })
    enemy.collides(jugador.disparosAgua, (e,f)=>{e.remove();f.remove();})
    while (enemy.length < 3) {
		let enemys = new enemy.Sprite();
		enemys.x = (enemy.length * 200)+600;
	}
}

code = () => {
    background("gray");
    jugador.renderizar();
    if(jugador.x >= width-20){
        terminarNivel(true);
    }
    if(enemy.vida <= 0){
        enemy.remove();
    }
}

niveles.push(new claseNivel(init, code, reset, vars, values));