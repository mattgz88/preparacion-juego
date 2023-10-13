let jugador;

function iniciarJugador(x, y){
    jugador = new Sprite(x, y);
    jugador.vida = 100;
    jugador.energia = 140;
    jugador.speed = 3;
    jugador.elemento = "fuego";
    jugador.inmunidad = false;
    configFuego();

    jugador.renderizar = ()=>{
        checkMovement();
        checkElements();
        controlStatus();
        if(jugador.energia > 0){
            if(kb.pressing(' ')){
                jugador.disparar();
                jugador.energia--;
            }
        }
    }
    jugador.inmudidad1s = ()=>{
        inmunidad = true;
        setTimeout(()=>inmunidad=false, 1000);
    }

    setInterval(()=>{
        if(jugador.energia < 100) jugador.energia++
    },30);
}

function checkElements(){
    if(jugador.energia > 40){
        if(kb.presses('1')) configFuego();
        else if(kb.presses('2')) configAgua();
        else if(kb.presses('3')) configAire();
        else if(kb.presses('4')) configElectricidad();
    }
}
function checkMovement(){
    jugador.speed = 3;
    if (kb.pressing('up')) {
        jugador.direction = -90;
    } else if (kb.pressing('down')) {
        jugador.direction = 90;
    } else if (kb.pressing('left')) {
        jugador.direction = 180;
    } else if (kb.pressing('right')) {
        jugador.direction = 0;
    } else {
        jugador.speed = 0;
    }
}
function controlStatus(){
    if(jugador.vida < 0){
        jugador.remove();
        //gameOver();
    }
    if(jugador.vida < 0){
        jugador.remove();
        //gameOver();
    }
}

function configFuego(){
    jugador.elemento = "fuego";
    jugador.energia -= 40;
    
    //jugador.img;
    
    jugador.disparar = ()=>{
        let bolaDeFuego;
        bolaDeFuego = new Sprite(jugador.x+20, jugador.y);
        bolaDeFuego.d = 5;
        bolaDeFuego.life = 70;
        bolaDeFuego.color = "red";
        bolaDeFuego.vel.x = 10;
        /*bolaDeFuego.collides(enemigoAgua, (enemy)=>{
            enemy.vida -= 20;
        })*/
    }
}

function configAgua(){
    jugador.elemento = "agua";
    jugador.energia -= 40;

    jugador.disparar = ()=>{
        let bolaDeAgua;
        bolaDeAgua = new Sprite(jugador.x+20, jugador.y);
        bolaDeAgua.d = 5;
        bolaDeAgua.life = 70;
        bolaDeAgua.color = "blue";
        bolaDeAgua.vel.x = 10;
        /*bolaDeAgua.collides(fuego, (enemy)=>{
            enemy.vida -= 20;
        })*/
    }
}
function configAire(){
    jugador.elemento = "aire";
    jugador.energia -= 40;
}
function configElectricidad(){
    jugador.elemento = "electricidad";
    jugador.energia -= 40;
}