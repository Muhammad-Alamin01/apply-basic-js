
// 2! = 1 * 2;
// 3! = 2! * 3;
// 4! = 3! * 4;
// 5! = (5-1)! * 5;
// n! = (n-1)! * n;

// Iterative
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        fact = fact * i;
        // console.log(i, fact);
    }
    return fact;
}


// Recursive
function factorialRecursive(num) {
    if(num == 0) {
        return 1;
    }
    if(num == 1) {
        return 1;
    }

    else{
        console.log(num, num - 1);
        return num * factorialRecursive(num - 1);
    }
}

// const result = factorial(5);
// console.log(result);

const result2 = factorialRecursive(5);
console.log(result2);