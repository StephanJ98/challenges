# Calcular los números primos en el rango 0 a X

> **Es necesario tener instalado NodeJS.** Ver [Web de NodeJS (Recomendado)](https://nodejs.org/en), o si quereis tener varias versiones de NodeJs simultaneas [NVM Linux](https://github.com/nvm-sh/nvm) o [NVM Windows](https://github.com/coreybutler/nvm-windows).

Dado el código siguiente, completarlo para obtener los números primos desde 0 hasta X, siendo X un número variable definido en el código.

```javascript
const isPrime = (number) => {
    // ToDo
}

const getPrimesInRange = (range) => {
    const primes = []

    for (let i = 0; i <= range; i++) {
        if (isPrime(i)) primes.push(i)
    }
    return primes
}

const range = 500
const primeNumbers = getPrimesInRange(range)

console.log(primeNumbers)
```

## Ejecución

Para ejecutar el código habra que ejecutar el comando `node index.js` sobre la carpeta del challenge.

## Resultado esperado

```javascript
[
    2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,  37,
   41,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,
   97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
  227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
  283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
  367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
  439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499
]
```