let jugador;
let formaOriginal = true; // Variable de bandera para rastrear la forma del sprite
let pasarAgua = true;
let movIzq = -2;
let movDer = 2;


function iniciarJugador() {
    jugador = new Sprite();
    jugador = Object.assign(jugador, {
        vida: 100,
        energia: 100,
        elemento: "fuego",
        inmunidad: false,
        tiempoDisparo: 100, //milisegundos
        puedeDisparar: true,
        esperaCarga: false,
        mirandoHacia: 1, //1 derecha, 2 izquierda
        vulnerable: ["sdf", "gfdg"]
    });
    jugador.balas = new Group();

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

function checkElements() {
    if (jugador.energia > 40) {
        if (kb.presses('1')) configFuego();
        else if (kb.presses('2')) configAgua();
        else if (kb.presses('3')) configAire();
        else if (kb.presses('4')) configElectricidad();
    }
}


function checkMovement() {
    if (kb.pressing('up')) {
        jugador.vel.y = 30;
    } else if (kb.pressing('left')) {
        jugador.vel.x = movIzq;
        jugador.mirandoHacia = -1;
    } else if (kb.pressing('right')) {
        jugador.vel.x = movDer;
        jugador.mirandoHacia = 1;
    } else {
        jugador.vel.x = 0;
    }
}


function controlStatus() {
    if (jugador.vida < 0) {
        terminarNivel();
    }
    if (jugador.energia > 0) {
        if (kb.pressing(' ') && jugador.puedeDisparar) {
            jugador.esperaCarga = true;
            jugador.disparar();
            jugador.activarPor("puedeDisparar", jugador.tiempoDisparo, false);
        }
    }
    if (kb.released(' ')) {
        setTimeout(() => jugador.esperaCarga = false, 500);
    }

    if(jugador.elemento = "agua" && kb.presses("q")){
        jugador.cambiarForma();
    }

}

function configFuego() {
    jugador.activarPor("inmunidad", 1000); //Ejemplo para inmunidad luego de cambiar de poder
    jugador.elemento = "fuego";
    jugador.energia -= 20;

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
        bolaDeFuego.collides(allSprites, (obj) => {
            let arr = ["fuego"];
            console.log(arr);
            if (arr.includes('fuego')) {
                obj.vida -= 20;
            }
        })
    }
}

function configAgua() {
    jugador.elemento = "agua";
    jugador.energia -= 20;

    jugador.disparar = () => {
        jugador.energia--;
        let bolaDeAgua;
        bolaDeAgua = new Sprite(jugador.x + 30 * jugador.mirandoHacia, jugador.y);
        bolaDeAgua.d = 5;
        bolaDeAgua.life = 70;
        bolaDeAgua.color = "blue";
        bolaDeAgua.vel.x = random(5, 10) * jugador.mirandoHacia;
        jugador.tiempoDisparo = 10;
        bolaDeAgua.collides(allSprites, (obj) => {
            let arr = ["agua"];
            console.log(arr);
            if (arr.includes('agua')) {
                obj.vida -= 10;
            }
        })

        jugador.cambiarForma = () =>{ 
            if (kb.presses('q') && formaOriginal) {
                // cambios
                jugador.energia -= 15;
                jugador.height = 10;
                jugador.pasarAgua = pasarAgua;
                movIzq = -7;
                movDer = 7;

                setTimeout(() => {
                    // original
                    jugador.height = 50;
                    formaOriginal = true;
                    jugador.pasarAgua = false;
                    movIzq = -2;
                    movDer = 2;
                }, 3000);
                formaOriginal = false;
            }
        }

    }
}
function configAire() {
    jugador.elemento = "aire";
    jugador.energia -= 20;
}
function configElectricidad() {
    jugador.elemento = "electricidad";
    jugador.energia -= 20;
}