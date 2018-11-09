/* Given a sorted array of integers, write function called
search, that accepts a value and returns the index where the value
passed to the function is located. If the value is not found, return -1
*/

// Time Compexity O(N)
// Linear Search
function search(arr,val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1


//Refactored 
//Time Complexity O(N)

function searchDividAndConquer(arr,val){

}

console.log(searchDividAndConquer([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(searchDividAndConquer([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(searchDividAndConquer([1, 2, 3, 4, 5, 6], 11))