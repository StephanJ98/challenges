const isPrime = (number) => {
    // Check if the number is 0 or 1
    if (number < 2) return false

    // Check if the number is divisible by any number less than itself
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }

    return true
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
