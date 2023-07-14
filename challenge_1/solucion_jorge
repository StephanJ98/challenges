const isPrime = (number) => {
    if(number <= 1)return false;
    for(let value = 2; value < number;value++){

        if((number % value) == 0){
            return false;
        }
        
    }
    return true;
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
