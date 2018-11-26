// Helper function
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}
console.log(getDigit(7323, 2))

//Helper function counts digits
function digitCount(num){
    return (num === 0 ? 1 : Math.floor(Math.log(Math.abs(num))) + 1);
}
console.log(digitCount(423))

//Helper function most digits
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}
console.log(mostDigits([23,576]))

// Define a function that accepts list of numbers
// figure out how many digits the largest number has
// loop from k = 0 up to this largest number of digits
// for each iteration of the loop
// create buckets for each digit (0 to 9 )
// place each number in the corresponding bucket based on the kth digit
// Replace our exisiting array with values in our buckets
// starting with 0 and going up to 9 
// return list at the end


function radixSort(nums){
    let maxDigit = mostDigits(nums)
    for(let k = 0; k < maxDigit; k++){
        let digitBuckets = Array.from({length: 10},() => [])
        for(let i = 0; i < nums.length; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[i]); 
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
console.log(radixSort([23,345,5467,12,2345,9852]))