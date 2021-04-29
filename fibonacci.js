// fibonacci[2] = fibonacci[2-1] + fibonacci[2-2];
// fibonacci[3] = fibonacci[3-1] + fibonacci[3-2];
// fibonacci[n] = fibonacci[n-1] + fibonacci[n-2];


function fibonacci(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        // console.log(fibonacci[i], fibonacci[i - 1], fibonacci[i - 2]);
    }
    return fibonacci;
    // console.log(fibonacci);
}

const result = fibonacci(12);
console.log(result);

