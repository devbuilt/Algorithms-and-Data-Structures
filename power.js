/*
Write a function called power which accpets a base and exponent. The function
should return the power of the base exponent. This
function  should mimic the functionality of Math.pow() - dont worry
about negative bases and exponents

*/

function power(base, exponent){
    if(exponent === 0 ) return 1;
    return base * power(base, exponent-1);
}
console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));