function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){ // Checking if 0 is odd
            return;
        }
        if (helperInput[0] % 2 !== 0) { // checking if numbers are odd
            result.push(helperInput[0]);// if number odd push 
        }
        helper(helperInput.slice(1)); // removing odd numbers
    }
    helper(arr);
    return result;
}

console.log(collectOddValues([1,4,5,7,]));


