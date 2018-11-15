/*
Write a functin factorial which accepts a number and returns the factorial of that number
A factorial is the product of an integer below it e.g factorial four (4!) is equal
to 24 because 24, beacuse 4 * 3 * 2 * 1 equals 24. Factorial of zero (0!) is always 1.
 
*/


function factorial(x){
     if (x < 0) return 0;
     if (x <= 1) return 1;
     return x * factorial(x - 1);
}

console.log(factorial([1,2,3]));