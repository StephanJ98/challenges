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

Podemos partir de la `task_1` creada en el `challenge_5`, o simplemente crear una nueva con el nombre de `calculadora`.

> Para este primer proyecto no seran necesario añadir ningún paquete a mayores.

## Fase 0: Preparación (17/07 - 20/07)

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

## Fase 1: Creación de la estética (20/07 - 24/07)
En esta fase crearemos la estética de nuestra aplicación.

1. Crearemos la carpeta `calculadora\src\components`, dentro de ella crearemos una subcarpeta con el nombre de cada componente que crearemos.

    > Que es un componente?
    >> Un componente es simplemente cada objeto visual que surge de descomponer nuestro frontend en partes más pequeñas. En esta aplicación simple tendremos varios como por ejemplo, el `Body` de nuestra calculadora, el `Display` de la calculadora y los `Button` de la calculadora.

2. Crearemos la carpeta `Body` dentro de `components`. Y dentro de ella 2 archivos uno `index.jsx` que contendra nuestro código y `styles.module.css` que contendra los estilos del componente.

3. Dentro de `index.jsx`. Copiaremos este código.

    ```jsx
    /*
        Declaramos nuestros imports.
        Pueden ser otros componentes, estilos,
        paquetes, imagenes, archivos ...
    */
    import Button from '../Button'
    import Display from '../Display'
    import styles from './styles.module.css'

    /*
        La función principal de nuestro componente en ella
        se define el aspecto/estructura del componente que describe.
        Mediante una sintaxis similar a la del HTML5.
    */

    const Body = () => {
        return (
            <div className={styles.bodyContainer}>
                <div id={styles.cuerpo}>
                    <Display value={'2 + 2 = 4 -> LOL'}/>
                    <div id={styles.btnsContainer}>
                        <Button value='7'/>
                        <Button value='8'/>
                        <Button value='9'/>
                        <Button value='+'/>
                        <Button value='4'/>
                        <Button value='5'/>
                        <Button value='6'/>
                        <Button value='-'/>
                        <Button value='1'/>
                        <Button value='2'/>
                        <Button value='3'/>
                        <Button value='*'/>
                        <Button value='0'/>
                        <Button value='CALC'/>
                        <Button value='/'/>
                    </div>
                </div>
            </div>
        )
    }

    export default Body
    ```

4. Dentro de `styles.module.css`. Copiaremos este código.

    ```css
    .bodyContainer {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    #cuerpo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 50vw;
        margin: 0 auto;
        border: 0.4rem solid whitesmoke;
        border-radius: 2rem;
        padding: 2rem;
    }

    #btnsContainer {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 2fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 1rem 1rem;
        grid-template-areas:
            ". . . ."
            ". . . ."
            ". . . ."
            ". calc calc .";
    }
    ```

5. Crearemos la carpeta `Display` dentro de `components`. Y dentro de ella 2 archivos uno `index.jsx` que contendra nuestro código y `styles.module.css` que contendra los estilos del componente.

6. Dentro de `index.jsx`. Copiaremos este código.

    ```jsx
    import styles from './styles.module.css'

    const Display = ({ value }) => {
        return (
            <div id={styles.displayContainer}>
                <p>{value}</p>
            </div>
        )
    }

    export default Display
    ```
    Vemos que la función `Display` recibe un objeto destruncturado `{ value }`, esta variable contiene lo que se le haya pasado desde el `Body` en su declaración `<Display value={'2 + 2 = 4 -> LOL'}/>`. El objeto destructurado puede contener multiples variables.

7. Dentro de `styles.module.css`. Copiaremos este código.

    :children_crossing: Como podemos ver en la declaración del `font-face` para este componente se usa una tipografia no estandar que se ha descargado desde [dafont.com](https://www.dafont.com/fr/calculator.font). Id a la carpeta `challenge_6\calculadora\src\assets` y copiad la carpeta `fonts` dentro de la vuestra.

    ```css
    @font-face {
        font-family: calculator;
        src: url(../../assets/fonts/calculator/Calculator.ttf);
    }

    #displayContainer {
        background-color: #1b1b1b;
        color: gainsboro;
        padding: 1rem;
        border-radius: 1rem;
        font-size: 3rem;
        font-weight: 600;
        font-family: calculator;
    }

    #displayContainer > p {
        text-align: justify;
    }
    ```

8. Crearemos la carpeta `Button` dentro de `components`. Y dentro de ella 2 archivos uno `index.jsx` que contendra nuestro código y `styles.module.css` que contendra los estilos del componente.

9. Dentro de `index.jsx`. Copiaremos este código.

    ```jsx
    import styles from './styles.module.css'

    const Button = ({ value }) => {
        return (
            <div className={value === 'CALC' ? `${styles.btns} ${styles.calc}` : styles.btns}>{value}</div>
        )
    }

    export default Button
    ```

10. Dentro de `styles.module.css`. Copiaremos este código.

    ```css
    .btns {
        background-color: gainsboro;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 3px 3px gray;
    }

    .btns:hover {
        box-shadow: none;
        transform: translate(3px, 3px);
    }

    .calc {
        grid-area: calc;
    }
    ```

---

> :tada::rocket: Con estos pasos la estética de nuestra aplicacion ya estara completa. Ahora solo falta añadir las funcionalidades. Pero eso sera en la **Fase 2**.