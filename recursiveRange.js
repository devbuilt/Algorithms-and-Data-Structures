/*
Write a function valled recursiveRange which accpets a number 
and adds up all the numners from 0 to the number passed to the function.



 */

 function recursiveRange(x){
    if(x === 0) return 0;
    return x + recursiveRange(x-1);
 }
 console.log(recursiveRange(6));