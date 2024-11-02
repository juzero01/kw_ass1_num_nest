function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}
function prime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If num is divisible by any number other than 1 and itself
    }
    return true;
}
function factorial(num) { //up to 15
    if (num < 0) return -1; // Factorial is not defined for negative numbers
    if (num > 15) return -1; // As requested, limit factorial to numbers up to 15
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    avg,
    prime,
    factorial
}
// exports.avg = avg;
// exports.prime = prime;
// exports.factorial = factorial;