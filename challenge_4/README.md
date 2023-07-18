# Fundamentos de JavaScript: Tomando decisiones.

![Image](js-decisions.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Un breve resumen sobre los booleanos.

Los booleanos solo pueden tener dos valores: `true` o `false`. Los booleanos ayudan a tomar decisiones sobre qué líneas de código deben ejecutarse cuando se cumplen ciertas condiciones.

Establece tu booleano como verdadero o falso de la siguiente manera:

`let myTrueBool = true`
`let myFalseBool = false`

✅ Los booleanos reciben su nombre en honor al matemático, filósofo y lógico inglés George Boole (1815-1864).

## Operadores de comparación y booleanos.

Los operadores se utilizan para evaluar condiciones mediante comparaciones que generarán un valor booleano. A continuación se muestra una lista de operadores que se utilizan con frecuencia.

| Símbolo | Descripción                                                                                                                                                  | Ejemplo            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Less than**: Compara dos valores y devuelve el tipo de dato booleano `true` si el valor del lado izquierdo es menor que el de la derecha.                              | `5 < 6 //true`    |
| `<=`   | **Less than or equal to**: Compara dos valores y devuelve el tipo de dato booleano `true` si el valor del lado izquierdo es menor o igual que el de la derecha.      | `5 <= 6 //true`   |
| `>`    | **Greater than**: Compara dos valores y devuelve el tipo de dato booleano `true` si el valor del lado izquierdo es mayor que el de la derecha.                         | `5 > 6 //false`   |
| `>=`   | **Greater than or equal to**: Compara dos valores y devuelve el tipo de dato booleano `true` si el valor del lado izquierdo es mayor o igual que el de la derecha. | `5 >= 6 //false`  |
| `==`  | **Equality**: Compara dos valores y devuelve el tipo de dato booleano `true` si los valores del lado izquierdo y derecho son iguales.      | `5 == 6 //false` |
| `!=`  | **Inequality**: Compara dos valores y devuelve el valor booleano opuesto al que devolvería el operador de igualdad.                                    | `5 != 6 //true`  |
| `===`  | **Strict equality**: Compara dos valores y devuelve el tipo de dato booleano `true` si los valores del lado izquierdo y derecho son iguales y del mismo tipo de dato.       | `5 === 6 //false` |
| `!==`  | **Inequality**: Compara dos valores y devuelve el valor booleano opuesto al que devolvería el operador de igualdad estricta.                                    | `5 !== 6 //true`  |


## Declaración "if".

La declaración "if" ejecutará el código dentro de sus bloques si la condición es verdadera.

```javascript
if (condition){
    //Condition is true. Code in this block will run.
}
```

Los operadores lógicos se utilizan con frecuencia para formar la condición.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condition is true. Code in this block will run.
    console.log("¡Consiguiendo un nuevo pc!");
}
```

## Declaración If..Else

La declaración `else` ejecutará el código dentro de sus bloques cuando la condición sea falsa. Es opcional y se utiliza junto con una declaración `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condition is true. Code in this block will run.
    console.log("¡Consiguiendo un nuevo pc!");
}
else{
    //Condition is false. Code in this block will run.
    console.log("¡Aún no puedo permitirme un nuevo pc!");
}
```

## Declaración Switch

La declaración `switch` se utiliza para realizar diferentes acciones basadas en diferentes condiciones. Se utiliza la declaración `switch` para seleccionar uno de los muchos bloques de código que se deben ejecutar.

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);
```

## Operadores lógicos y booleanos.

Las decisiones pueden requerir más de una comparación y se pueden encadenar con operadores lógicos para producir un valor booleano.

| Símbolo | Descripción                                                                                     | Ejemplo                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **AND**: Compara dos expresiones booleanas. Devuelve true **solo** si ambos lados son verdaderos. | `(5 > 6) && (5 < 6 ) //Returns false` |
| `\|\|` | **OR**: Compara dos expresiones booleanas. Devuelve true si al menos uno de los lados es verdadero.     | `(5 > 6) \|\| (5 < 6) //Returns true` |
| `!`    | **NOT**: Devuelve el valor opuesto de una expresión booleana.                             | `!(5 > 6) //Return true`         |

## Condiciones y decisiones con operadores lógicos.

Los operadores lógicos se pueden utilizar para formar condiciones en declaraciones if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition is true. Code in this block will run.
    console.log("¡Consiguiendo un nuevo pc!");
}
else {
    //Condition is true. Code in this block will run.
    console.log("¡Aún no puedo permitirme un nuevo pc!");
}
```

### Operador de negación.

Hasta ahora has visto cómo se puede utilizar una declaración `if...else` para crear lógica condicional. Todo lo que se coloca en un `if` debe evaluarse como verdadero/falso. Al utilizar el operador `!`, puedes _negar_ la expresión. Se vería de la siguiente manera:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Expresiones ternarias.

`if...else` no es la única forma de expresar la lógica de decisiones. También puedes usar algo llamado operador ternario. La sintaxis para ello se ve así:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

He aquí un ejemplo más tangible:

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

Lo anterior establece que
- si `firstNumber` es mayor que` secondNumber`
- luego asigne `firstNumber` a` itNumber`
- de lo contrario, asigne 'segundo número'.
  
La expresión ternaria es solo una forma compacta de escribir el siguiente código:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```
