let jugador;

function iniciarJugador(){
    jugador = new Sprite();
    jugador.vida = 100;
    jugador.energia = 100;
    player.speed = 3;
    jugador.elemento = "fuego";
    jugador.inmunidad = false;

    jugador.runtimeProcess = ()=>{
        checkMovement();
        checkElements();
    }
    jugador.inmudidad1s = ()=>{
        inmunidad = true;
        setTimeout(()=>inmunidad=false, 1000);
    }
    jugador.elementsChecks;
}

function checkElements(){
    if(kb.pressing('1')){
        jugador.elemento = "fuego";
        jugador.energia -= 40;
        
        //jugador.img;
        
        jugador.elementsChecks = fuego;
        jugador.disparar = ()=>{
            let bolaDeFuego;
            bolaDeFuego = new Sprite();
            bolaDeFuego.vel.x = 10;
            bolaDeFuego.collides(enemigoAgua, (enemy)=>{
                enemy.vida -= 20;
            })
        }
        
    }
    else if(kb.pressing('2')){
        jugador.elemento = "agua";
        jugador.energia -= 40;
    }
    else if(kb.pressing('3')){
        jugador.elemento = "viento";
        jugador.energia -= 40;
    }
    else if(kb.pressing('4')){
        jugador.elemento = "electricidad";
        jugador.energia -= 40;
    }
}

function checkMovement(){
    if (kb.pressing('up')) {
        player.direction = -90;
    } else if (kb.pressing('down')) {
        player.direction = 90;
    } else if (kb.pressing('left')) {
        player.direction = 180;
    } else if (kb.pressing('right')) {
        player.direction = 0;
    } else {
      player.speed = 0;
    }
}

function fuego(){
    //Propiedades a comprobar con fuego
    
}