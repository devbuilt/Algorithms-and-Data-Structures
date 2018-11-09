/* Write a function called maxSubarraySum which accepts an array of integers and a 
number called n. The function should calculate the maximum sum of n consectutive
elements in the array.*/ 

function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null; // returns null if array is empty
    }
    let max = -Infinity;

    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null

// Refactor
// Time Complexity - O(N)
function maxSubArraySumSlidingWindow(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
        for(let i = 0; i < num; i++){
            maxSum += arr[i];
        }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


console.log(maxSubArraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubArraySumSlidingWindow([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubArraySumSlidingWindow([4, 2, 1, 6], 1)) // 6
console.log(maxSubArraySumSlidingWindow([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubArraySumSlidingWindow([], 4)) // null