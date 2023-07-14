# Encriptado y desencriptado simple

> **Es necesario tener instalado NodeJS.** Ver [Web de NodeJS (Recomendado)](https://nodejs.org/en), o si quereis tener varias versiones de NodeJs simultaneas [NVM Linux](https://github.com/nvm-sh/nvm) o [NVM Windows](https://github.com/coreybutler/nvm-windows).

Dado el código siguiente, completarlo para que la función `encryptPhrase` sea funcional. No se puede usar los bucles `for` como el empleado en `decryptPhrase`.

```javascript
const salt = new Date().getTime() % Math.round(Math.random() * 50)
const phrase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper mi nisl, et sollicitudin elit bibendum sed. Nulla ut ante semper, consequat quam ac, efficitur elit. Curabitur gravida lacus nec dolor ultrices ultricies. Nunc rutrum mauris eget nisi congue, ac dapibus lectus laoreet. Nullam volutpat purus vitae ligula aliquet, in mattis lectus lacinia. Mauris auctor mauris a dapibus luctus. In at tincidunt arcu. Morbi non faucibus mi, eget volutpat felis. Proin vitae luctus mi, in suscipit metus.`

const encryptPhrase = (phrase) => {
    // ToDo
}

const decryptPhrase = (encryptedPhrase) => {
    let decryptedPhrase = ''

    for (let i = 0; i < encryptedPhrase.length; i++) {
        const charCode = encryptedPhrase.charCodeAt(i)
        const decryptedCharCode = charCode - salt
        decryptedPhrase += String.fromCharCode(decryptedCharCode)
    }
    return decryptedPhrase
}

const cryptedPhrase = encryptPhrase(phrase)
const decryptedPhrase = decryptPhrase(cryptedPhrase)

console.log('Original: ' + phrase + '\n')
console.log('Encriptado: ' + cryptedPhrase + '\n')
console.log(`Original = Desencriptado? ${phrase == decryptedPhrase}`)
```

## Ejecución

Para ejecutar el código habra que ejecutar el comando `node index.js` sobre la carpeta del challenge.

## Resultado esperado

<pre>
Original: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper mi nisl, et sollicitudin elit bibendum sed. Nulla ut ante semper, consequat quam ac, efficitur elit. Curabitur gravida lacus nec dolor ultrices ultricies. Nunc rutrum mauris eget nisi congue, ac dapibus lectus laoreet. Nullam volutpat purus vitae ligula aliquet, in mattis lectus lacinia. Mauris auctor mauris a dapibus luctus. In at tincidunt arcu. Morbi non faucibus mi, eget volutpat felis. Proin vitae luctus mi, in suscipit metus.

Encriptado: Wz}px+t{~x+ozwz}+~t+lxp7+nzy~pnp}+lot{t~ntyr+pwt9+^~{pyot~~p+~px{p}+xt+yt~w7+p+~zwwtntoty+pwt+mtmpyox+~po9+Ywwl++lyp+~px{p}7+nzy~p|l+|lx+ln7+pqqtnt}+pwt9+N}lmt}+r}ltol+wln~+ypn+ozwz}+w}tnp~+w}tntp~9+Yyn+}}x+xl}t~+prp+yt~t+nzyrp7+ln+ol{tm~+wpn~+wlz}pp9+Ywwlx+zw{l+{}~+tlp+wtrwl+lwt|p7+ty+xlt~+wpn~+wlntytl9+Xl}t~+lnz}+xl}t~+l+ol{tm~+wn~9+Ty+l+tyntoy+l}n9+Xz}mt+yzy+qlntm~+xt7+prp+zw{l+qpwt~9+[}zty+tlp+wn~+xt7+ty+~~nt{t+xp~9

Original = Desencriptado? true
</pre>
