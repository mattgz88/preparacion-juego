let tiempo = 0;
let tiempoInicial = 0;
let estrellas = 3;
let duracionDeNiveles = 5000;

//setInterval(()=>{tiempo++}, 100);

function mostrarPropiedades(){
    rectMode(CORNER);
     // Barra de Vida
    noFill();
    rect(10, 10, 100 * 2, 20, 4);
    fill(255, 0, 0);
    rect(10, 10, jugador.vida * 2, 20, 4);

    // Barra de Energía
    noFill();
    rect(10, 40, 100 * 2, 20, 4);
    fill(0, 0, 255);
    rect(10, 40, jugador.energia * 2, 20, 4);

    // Título
    textSize(24);
    textAlign(CENTER);
    fill(0);
    text("Nivel "+ nivel, width / 2, 30);

    // Tiempo
    tiempo = (duracionDeNiveles - (millis() - tiempoInicial))/1000; // Convierte el tiempo en segundos
    fill(0);
    textAlign(RIGHT);
    text("Tiempo: " + nf(tiempo, 1, 1), width - 10, 30);
    
    if(tiempo < (duracionDeNiveles/3)*2){
        estrellas = 2;
    }
    if(tiempo < duracionDeNiveles/3){
        estrellas = 1;
    }
    if(tiempo <= 0){
        estrellas = 0;
        terminarNivel();
    }
}

function mostrarEstadisticas(){
    background("gray")
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    fill(160, 130, 100);
    rect(width / 2, height / 2, 500, 400, 10);
    fill(0);
    textSize(32);
    text("Perdiste", width / 2, height / 2 - 90);
    text("Tiempo: " + nf(tiempo, 1, 1) + " seg", width / 2, height / 2);
    text("Estrellas: " + estrellas, width / 2, height / 2 + 40);
    
    // Botón "Try Again"
    fill(50, 150, 255);
    rect(width / 2 + 80, height / 2 + 80, 120, 50, 10);
    fill(255);
    textSize(20);
    if(gana_pierde == "pierde"){
        text("Try Again", width / 2 + 80, height / 2 + 80);
    }
   

    if (keyIsPressed === true){
        if(gana_pierde == "pierde"){
            gameOver = false;
            reiniciarNivel();
        }else{
            cambiarNivel();
        }
        
    }
    /*
    Codigo para mostar una targeta con los datos del nivel ganado:
    -Boton Siguiente
    -Boton anterior
    -Estrellas
    -Tiempo
    -Titulo del nivel
    */
}