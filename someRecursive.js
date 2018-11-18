/*
Write a function called someRecursive which accepts an array and a
callback. The function returns true if the single value in the array
returns true when passed to the callback. Otherwise it returns 
false
*/

//SAMPLE INPUT / OUTPUT 
//const isOdd = val => val % 2 !== 0;

//
function someRecursive(str){
    // checks the length of the array
   let newStr = str.length +1;
   // checks if number is odd
    return newStr % 2 !== 0;

}

console.log(someRecursive([1,2,3,4]))
console.log(someRecursive([4,6,8,9]))
console.log(someRecursive([4,6,8]))
console.log(someRecursive([4,6,8]))


//Recursive solution
function someRecursiveTwo(array, callback){
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursiveTwo(array.slice(1),callback);
}

console.log(someRecursiveTwo([1,2,3,4]))
console.log(someRecursiveTwo([4,6,8,9]))
console.log(someRecursiveTwo([4,6,8]))
console.log(someRecursiveTwo([4,6,8]))