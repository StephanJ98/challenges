# Trabajar con objetos en JS

> **Es necesario tener instalado NodeJS.** Ver [Web de NodeJS (Recomendado)](https://nodejs.org/en), o si quereis tener varias versiones de NodeJs simultaneas [NVM Linux](https://github.com/nvm-sh/nvm) o [NVM Windows](https://github.com/coreybutler/nvm-windows).

Debes definir un objeto llamado "person" en el fichero `index.js` con los siguientes miembros:

1. El miembro `firstName` de la persona es `Jack`.
2. El miembro `lastName` de la persona es `Smith`.
3. El miembro `age` de la persona es `19`.
4. El miembro `employed` de la persona es `false`.
5. El miembro `salary` de la persona es `6000`. ( Mostrar solo si `employed` es `true`. )

Además genera un código que produzca el [resultado esperado](#resultado-esperado).

## Ejecución

Para ejecutar el código habra que ejecutar el comando `node index.js` sobre la carpeta del challenge.

## Resultado esperado

```javascript
El nombre es Jack Smith.
Tiene 19 años.
```

En caso de que `employed` sea `true` el resultado esperado sera.

```javascript
El nombre es Jack Smith.
Tiene 19 años.
Jack Smith cobra 6000 €/mes.
```