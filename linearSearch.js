/*
Write a function called linearSearch which accpets an array and a value, and
returns the index at which the value exists. If the value does not exist in
the array, return -1

Dont use indexOf to implement this function!

Example:


 */
// This function accepts an array and a value
 function linearSearch(arr, val){
// loop through the array and check if the
    for(let i = 0; i < arr.length; i++){
        // current array element is equal to the value
        if(arr[i] === val)return i;//if it is, return the index at which the element is found
        }
    return -1;// if the value is never found, return -1
    
 }
//O(N)
 console.log(linearSearch([10,15,25,30],15))
 console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4))
 console.log(linearSearch([100],100))
 console.log(linearSearch([9,8,7,6,5,4,3,2,1,0],10))
 console.log(linearSearch([100],200))