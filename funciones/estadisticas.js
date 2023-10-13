let tiempo = 0;

//setInterval(()=>{tiempo++}, 100);

function mostrarPropiedades(){
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
    tiempo = millis() / 1000; // Convierte el tiempo en segundos
    fill(0);
    textAlign(RIGHT);
    text("Tiempo: " + nf(tiempo, 1, 2), width - 10, 30);
}

function mostrarEstadisticas(){
    fill(200,100,70)
    rect(50, 50, width-100, height-100, 20);

    text("Juego terminado", width/2, 100);
    /*
    Codigo para mostar una targeta con los datos del nivel ganado:
    -Boton Siguiente
    -Boton anterior
    -Estrellas
    -Tiempo
    -Titulo del nivel
    */
}