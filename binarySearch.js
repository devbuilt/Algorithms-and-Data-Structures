



function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return 'No Match Found';
}
console.log(binarySearch([10,15,25,30],15))
console.log(binarySearch([9,8,7,6,5,4,3,2,1,0], 4))
console.log(binarySearch([100],100))
console.log(binarySearch([9,8,7,6,5,4,3,2,1,0],10))
console.log(binarySearch([100],200))

// Refactored Version
function binarySearchRefactored(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : 'No Match Found';
}

console.log(binarySearchRefactored([2,5,6,9,13,15,28,30], 102))
