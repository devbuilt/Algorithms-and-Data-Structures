
//Non recursive solution
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

console.log(factorial(5)); // 120

//Recursion Solution
function factorialRecursion(nums){
    if(nums === 1) return 1;
    return nums * factorial(nums - 1)
}

console.log(factorialRecursion(5)); // 120