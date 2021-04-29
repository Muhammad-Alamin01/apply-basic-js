// fibonacci[2] = fibonacci[2-1] + fibonacci[2-2];
// fibonacci[3] = fibonacci[3-1] + fibonacci[3-2];
// fibonacci[n] = fibonacci[n-1] + fibonacci[n-2];


function fibonacciRecursive(n) {
    if (n == 0) {     // stop condition
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

const result = fibonacciRecursive(12);
console.log(result);