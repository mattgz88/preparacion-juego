Controles:
W       --> Saltar
A/D     --> Caminar
Q       --> Habilidad especial
1/2/3/4 --> fuego, agua, aire, electricidad
ESPACIO --> Disparar

Mecanicas:
-Fuego: Quemar madera, Matar enemigos de agua/hielo
-Agua: Hacer daño a enemigos de fuego, Transformarse en gota(Desarrollo)
-Aire: Más rapido, Mover bloques, Transformarse en viento
-Electricidad (Jugador en desarrollo)


Datos Tecnicos:

El juego esta modularizado en varios archivos permitiendo mejor escalarizacion del codigo:
    -Funciones:
        *Contiene funciones compartidas
        -jugador:
            Su logica es una mezcla de programacion funcional y de objetos
            Seguramente hay mucho mejores maneras pero el codigo esta hecho con lo que sabemos
            El jugador tiene distintas 'propiedades' y 'metodos' por asi decirlo
        -logicaDeNiveles:
            Permite unir todos los niveles con variables aisladas del resto del codigo
        -estadisticas:
            Muestra los datos del jugador durante y al final del juego
        -bloques:
            Precarga los diferentes bloques que se usaran en los niveles
    -Niveles:
        Todos los niveles del juego más el menu de inicio
        