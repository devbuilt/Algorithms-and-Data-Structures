/*Imlement a function called countUniqueValues which accepts
a sorted array, and counts the unique values in the array. There
can be negative numbers in the array, but will alwasy be sorted */


// Time Complexity - O(N)
// Space Complexity - O(1)
function countUniqueValues(arr){
    if(arr.length === 0 ) return 0;// if array is empty returns "0" 
    let i = 0;// strats at index 0 
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){ // compares array numbers if equal
            i++; // increments values if not equal
            arr[i] = arr[j] // 
        }
    }
    return i + 1
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))// 7 Unique values
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12]))// 6 Unique Values
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1]))// 4 Unique Values