function binarySearch(arr,elem){

//This function accpets a sorted array and a value
let start = 0;
let end = -1;
let middle = Math.floor((start + end) / 2);
while(arr[middle] !== elem && start <= end){    
    if(elem < arr[middle]){
        end = middle - 1;
    }else{
        start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
}
    if(arr[middle] === elem){
        return middle;
}
    return -1;

}
// create a left pinter at the start of the array, and
// a right pointer at the end of the array
// While the left pointer comes before the right corner
// create a pointer in the middle
// if you find the value you want,return the index
// The value is to small, move the left pinter up
// If the value is to large, move the right pointer down
// If you never find the value return -1

console.log(binarySearch([10,15,25,30],15))
console.log(binarySearch([9,8,7,6,5,4,3,2,1,0], 4))
console.log(binarySearch([100],100))
console.log(binarySearch([9,8,7,6,5,4,3,2,1,0],10))
console.log(binarySearch([100],200))