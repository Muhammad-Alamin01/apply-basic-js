
function checkPrimeNumber(n){
    for (let i = 2; i < n; i++) {
        if(n % i == 0){
            return `is ${n} not a prime number`
            
        }
        else{
            return `is ${n}  a prime number`
            
        }
    }
}

const result = checkPrimeNumber(109);
console.log(result);