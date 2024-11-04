//reverseString
function reverseString(s) {
    return s.split('').reverse().join('');
}
//countCharacters
function countCharacters(s) {
    return s.length;
}
//capitalizeWords
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}
//findMaximum
function findMaximum(arr) {
    return Math.max(...arr);
}
//findMinimum
function findMinimum(arr) {
    return Math.min(...arr);
}
//sumOfArray
function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
//filterArray
function filterArray(arr, condition) {
    return arr.filter(condition);
}
//factorial
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
}
//isPrime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
//fibonacciSequence
function fibonacciSequence(n) {
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    return sequence;
}





