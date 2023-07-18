# Creación de un FrontEnd - Presentación del proyecto

Para comenzar intentaremos recrear una aplicación básica con React. Esta aplicación sera la creacion de un SPA, sin BackEnd. En el implementaremos una calculadora básica, en la que solo se trabajara con números enteros.

**Una posible plantilla a seguir sera la imagen que sigue.**

![Prototipo](calc.png)

La aplicación estra constituida de un cuerpo central que contendra:
- Un display que muestra la operación y su resultado una vez calculado.
- 10 botones con un número entero asociado.
- 4 botones de operaciones (+,-,*,/).
- Un botón que lanza el calculo.

# Procedimiento.

Como este challenge sera importante para posteriores, no se realizara de una sola vez. En esta primera fase crearemos el visual de la aplicación. Para entender como crear elementos con React y darles estilos con CSS. En fases posteriores veremos como añadir las funcionalidades necesarias y como publicar nuestra aplicaión en la web.

## Fase 1: Creación de la estética (17/07 - 24/07)

Podemos partir de la `task_1` creada en el `challenge_5`, o simplemente crear una nueva con el nombre de `calculadora`.

> Para este primer proyecto no seran necesario añadir ningún paquete a mayores.

1. Limpiaremos los archivos creados para solo guardar los necesarios y asi partir de una base limpia.
    1. En `calculadora\index.html` cambiaremos el

        ```html
        <title>Vite + React</title>
        ```
        por
        ```html
        <title>Mi Calculadora</title>
        ```
    2. Modificaremos los archivos dentro de `calculadora\src` para obtener un resultado identico al de la carpeta `calculadora_template`
2. O copiad directamente la carpeta `calculadora_template` y cambiadle el nombre a `calculadora`.
