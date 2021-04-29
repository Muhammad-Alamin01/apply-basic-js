// 5! = 5*4*3*2*1;




function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const result = factorial(40);
console.log(result);