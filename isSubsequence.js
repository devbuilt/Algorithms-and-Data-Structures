/*
Write a function called isSubsequence which takes in two strings and checks wether the character in the
first string from a subsequence of the character in the second string. In order words, the function should
check wether the character in the first string appear somewhere in the second string, without their order changing

Your soulition MUST have AT LEAST the following complexities

Time complexity: O(N + M)
Space Compexity: O(1)

*/
// Solution Iterative
function isSubsequence(str1, str2){
    let i = 0;
    let j = 0;
    if(!str1) return true;
    while(j < str2.length){
        if(str2[j] === str1[i]) i++;
        if( i === str1.length) return true 
        j++
    }
    return false
}

console.log(isSubsequence('hello', 'hello world')) //true
console.log(isSubsequence('sing', 'sting'))// true
console.log(isSubsequence('abc', 'acb')) // false (order maters)
console.log(isSubsequence('abc', 'abracadabra')) //true



// Solution recursive but not 0(1) Space

function isSubsequenceRecursive(str1, str2){
    if(str1.length === 0) return true;
    if(str2.length === 0) return false;
    if(str2[0] === str1[0]) return isSubsequenceRecursive(str1.slice(1), str2.slice(1))
    return isSubsequenceRecursive(str1,str2.slice(1))
}


console.log(isSubsequenceRecursive('hello', 'hello world')) //true
console.log(isSubsequenceRecursive('sing', 'sting')) // true
console.log(isSubsequenceRecursive('abc', 'acb')) // false (order maters)
console.log(isSubsequenceRecursive('abc', 'abracadabra')) //true



