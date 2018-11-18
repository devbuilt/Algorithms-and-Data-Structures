/*
Write a function called someRecursive which accepts an array and a
callback. The function returns true if the single value in the array
returns true when passed to the callback. Otherwise it returns 
false
*/

//SAMPLE INPUT / OUTPUT 
//const isOdd = val => val % 2 !== 0;


function someRecursive(str){
   let newStr = str.length +1;
    return newStr % 2 !== 0;

}

console.log(someRecursive([1,2,3,4]))
console.log(someRecursive([4,6,8,9]))
console.log(someRecursive([4,6,8]))
console.log(someRecursive([4,6,8]))