let jugador;
let formaOriginal = true; // Variable de bandera para rastrear la forma del sprite
let pasarAgua = true;
let estado = 0;

function iniciarJugador(x, y) {
    jugador = new Sprite(x, y, 180, 350);
    jugador.scale = 0.16;
    jugador.rotationLock = true;
    jugador = Object.assign(jugador, {
        vida: 100,
        energia: 100,
        elemento: "fuego",
        inmunidad: false,
        tiempoDisparo: 100, //milisegundos
        puedeDisparar: true,
        esperaCarga: false,
        puedeSaltar: true,
        usarAnimacion: true,
        mirandoHacia: 1, //1 derecha, 2 izquierda
        disparosFuego: new Group(),
        disparosAgua: new Group(),
        velocidadX: 2,
        velocidadY: -5,
    });

    //Multi herramienta para establecer tiempos de activacion
    //Primero, variable del jugador entre comillas: "puedeDisparar"
    //Segundo, tiempo para cambiar el valor
    //Tercero valor inicial antes de invertirlo --> default true
    jugador.activarPor = (variable, tiempo, val = true) => {
        jugador[variable] = val;
        setTimeout(() => jugador[variable] = !val, tiempo);
    }


    configFuego();

    jugador.renderizar = () => {
        checkMovement();
        checkElements();
        controlStatus();
    }

    setInterval(() => {
        if (jugador.energia < 100 && !jugador.esperaCarga)
            jugador.energia++
    }, 40);
}

function ponerAnimacion(num, esMov = false){
    if(jugador.usarAnimacion || !esMov){
        if(!(esMov && !jugador.puedeSaltar)){
            switch(jugador.elemento){
                case "fuego":
                    jugador.img = sprites_fuego[num]; break;
                case "agua":
                    jugador.img = sprites_agua[num]; break;
                case "aire":
                    jugador.img = sprites_aire[num]; break;
                case "electricidad":
                    jugador.img = sprites_electricidad[num]; break;
                default:
                    console.log("No mano tu estas re loco")
            }
        }
    }
}


//Cambia de elemento
function checkElements() {
    if (jugador.energia > 40) {
        if (kb.presses('1')) configFuego();
        else if (kb.presses('2')) configAgua();
        else if (kb.presses('3')) configAire();
        else if (kb.presses('4')) configElectricidad();
    }
}

//Mueve el personaje
function checkMovement() {
    if (kb.pressing('up') && jugador.puedeSaltar) {
        jugador.vel.y = jugador.velocidadY;

        //Si no esta en modo viento espera para saltar
        if((jugador.elemento == "aire" && !formaOriginal) == false){
            //jugador.activarPor("puedeSaltar", 850, false);
            jugador.puedeSaltar = false;
            jugador.activarPor("usarAnimacion", 400, false);
            ponerAnimacion(1);
        }
    }

    else if(jugador.elemento == "aire" && !formaOriginal){
        if(kb.pressing('down')){
            jugador.vel.y = jugador.velocidadY*-1;
        }else{
            jugador.vel.y = 0;
        }
    }
    
    if (kb.pressing('left')) {
        jugador.vel.x = jugador.velocidadX*-1;
        jugador.mirandoHacia = -1;
        jugador.mirror.x = true;
        ponerAnimacion(2, true)
    } 
    else if (kb.pressing('right')) {
        jugador.vel.x = jugador.velocidadX;
        jugador.mirandoHacia = 1;
        jugador.mirror.x = false;
        ponerAnimacion(2, true);
    } 
    else {
        jugador.vel.x = 0;
        ponerAnimacion(0, true)
    }
    if(jugador.collides(allSprites)){
        jugador.puedeSaltar = true;
    }
}

//Operaciones Varias
function controlStatus() {
    if (jugador.vida <= 0) {
        terminarNivel();
    }
    if(jugador.y > height){
        terminarNivel();
    }

    ////--DISPARO--////
    if (jugador.energia > 0) {
        if (kb.pressing(' ') && jugador.puedeDisparar) {
            jugador.esperaCarga = true;
            jugador.disparar();
            jugador.activarPor("puedeDisparar", jugador.tiempoDisparo, false);
            jugador.activarPor("usarAnimacion", 200, false);
            ponerAnimacion(1);
        }
    }
    if (kb.released(' ')) {
        setTimeout(() => jugador.esperaCarga = false, 500);
    }
    ////----------////

    ////--CAMBIAR FORMA--////
    if(kb.presses("q")){
        jugador.cambiarForma();
    }
    if(jugador.elemento == "aire" && !formaOriginal){
        jugador.viento.map((e)=>e.moveTowards(jugador, 0.05));
        circle(jugador.x, jugador.y, 10)
    }
    ////---------------////

    if(jugador.elemento == "fuego" && jugador.colliding(agua)){
        jugador.vida -= 5;
    }
}

//Configuracion del elemento fuego
function configFuego() {
    jugador.activarPor("inmunidad", 1000); //Ejemplo para inmunidad luego de cambiar de poder
    jugador.elemento = "fuego";
    jugador.energia -= 20;
    jugador.velocidadX = 2;
    jugador.velocidadY = -5;
    jugador.activarPor("usarAnimacion", 800, false);
    ponerAnimacion(3);

    //jugador.img;

    jugador.disparar = () => {
        jugador.energia -= 10;
        let bolaDeFuego;
        bolaDeFuego = new Sprite(jugador.x + 30 * jugador.mirandoHacia, jugador.y);
        bolaDeFuego.d = 10;
        bolaDeFuego.life = 70;
        bolaDeFuego.color = "red";
        bolaDeFuego.vel.x = 10 * jugador.mirandoHacia;
        jugador.tiempoDisparo = 200;
        jugador.disparosFuego.add(bolaDeFuego);
    }

    jugador.cambiarForma = ()=>{};
}

//Configuracion del elemento agua
function configAgua() {
    jugador.elemento = "agua";
    jugador.energia -= 20;
    jugador.velocidadX = 2;
    jugador.velocidadY = -5;
    jugador.activarPor("usarAnimacion", 800, false);
    ponerAnimacion(3);


    jugador.disparar = () => {
        jugador.energia--;
        let bolaDeAgua;
        bolaDeAgua = new Sprite(jugador.x + 30 * jugador.mirandoHacia, jugador.y);
        bolaDeAgua.d = 5;
        bolaDeAgua.life = 70;
        bolaDeAgua.color = "blue";
        bolaDeAgua.vel.x = random(5, 10) * jugador.mirandoHacia;
        jugador.tiempoDisparo = 10;
        jugador.disparosAgua.add(bolaDeAgua);
    }

    jugador.cambiarForma = () =>{ 
        if (formaOriginal) {
            // cambios
            jugador.energia -= 15;
            jugador.height = 10;
            jugador.velocidadX = 7;

            setTimeout(() => {
                // original
                jugador.height = 50;
                formaOriginal = true;
                jugador.velocidadX = 2;
            }, 3000);
            formaOriginal = false;
        }
    }
}

//Configuracion del elemento aire
function configAire() {
    jugador.elemento = "aire";
    jugador.energia -= 20;
    jugador.velocidadX = 5;
    jugador.velocidadY = -7;
    jugador.activarPor("usarAnimacion", 800, false);
    ponerAnimacion(3);

    jugador.disparar = () => {
        //jugador.energia--;
        let viento;
        viento = new Sprite(jugador.x + 30 * jugador.mirandoHacia, jugador.y);
        viento.d = 2;
        viento.life = 70;
        viento.color = "white";
        viento.vel.x = 10;
        viento.bounciness = 0.7;
        jugador.tiempoDisparo = 10;
    }

    jugador.cambiarForma = () =>{ 
        if (formaOriginal) {
            // cambios
            jugador.viento = new Group();
            jugador.viento.amount = 50;
            jugador.viento.d = 5;
            jugador.viento.x = ()=>random(jugador.x-50,jugador.x+50)
            jugador.viento.y = ()=>random(jugador.y-50,jugador.y+50)
            jugador.viento.life = ()=>random(100,150);
            //jugador.viento.bounciness = 2;

            jugador.energia -= 15
            jugador.visible = false
            jugador.collider = 'none'
            jugador.velocidadX = 5
            jugador.velocidadY = -5

            jugador.puedeSaltar = true;

            setTimeout(() => {
                // original
                jugador.visible = true;
                jugador.collider = 'd';
                formaOriginal = true;
                jugador.rotationLock = true;
                jugador.velocidadX = 5;
                jugador.velocidadY = -7;
            }, 2000);
            formaOriginal = false;
        }
    }
}

//Configuracion del elemento electricidad
function configElectricidad() {
    jugador.elemento = "electricidad";
    jugador.energia -= 20;
    jugador.velocidadX = 3;
    jugador.velocidadY = -5;
    jugador.activarPor("usarAnimacion", 800, false);
    ponerAnimacion(3);

    jugador.disparar = () => {
        jugador.energia-=10;
        let rayo;
        rayo = new Sprite(jugador.x + 30 * jugador.mirandoHacia, jugador.y);
        rayo.d = 5;
        rayo.life = 70;
        rayo.color = "white";
        rayo.vel.x = 10;
        rayo.bounciness = 0.7;
        rayo.tiempoDisparo = 10;
        rayo.collides(allSprites, (e)=>{for(let i=0; i<10; i++) {let a; a = new Sprite(e.x, e.y); a.d=2;a.life=10;a.bounciness=3}; e.remove()})
    }

    jugador.cambiarForma = () =>{}
    
}