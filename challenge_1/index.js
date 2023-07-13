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
