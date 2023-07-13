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