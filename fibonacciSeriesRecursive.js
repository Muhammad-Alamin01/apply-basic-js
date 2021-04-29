function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    else {
        // calculate array nTH element
        let fibo = fibonacci(n - 1);
        let nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        
        return fibo;
    }
}


const result = fibonacci(12);
console.log(result);