
// 2! = 1 * 2;
// 3! = 2! * 3;
// 4! = 3! * 4;
// 5! = (5-1)! * 5;
// n! = (n-1)! * n;

function factorial(n) {
    if (n == 0) {
        return 1
    }
    else {
        return n * factorial(n - 1);
    }
}

const result = factorial(10);
console.log(result);