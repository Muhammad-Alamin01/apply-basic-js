
function factorial(x) {
    let i = 1;
    let fact = 1
    while (i <= x) {
        fact = fact * i;
        
        i++;
    }
    return fact;
    // console.log(factorial);
}

const result = factorial(4);
console.log(result);