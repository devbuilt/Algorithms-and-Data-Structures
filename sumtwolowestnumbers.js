function sumTwoLowestNumbers(numbers){
    // javascript sort method 
   
    let min1 = numbers.sort((min1, min2) => min1 - min2) 
    if(numbers < [0]) return -1; // checks is number is negative
    return  (min1 [0] + min1 [1])
}

console.log(sumTwoLowestNumbers([45,34,7,-1]))

