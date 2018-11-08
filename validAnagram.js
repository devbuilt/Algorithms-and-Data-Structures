
function validAnagram(first,second) {
   if(first.length !== second.length){
       return false;
   }
   const lookup = {}
// {a: 3, n: 1, g: 1, r: 1, m: 1} we use the loop to construct the Anangram and count similar characters
   for(let i = 0; i < first.length; i++){
       let letter = first[i]
       //if letter exist, increment, otherwise set to 1 
       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }

//This loop will compare with the above anagram
   for (let i = 0; i < second.length; i++){
       let letter = second[i];
       //cant find letter or letter it will return false
        if(!lookup[letter]){
            return false;
        }else{
            // subtract letter count until zero if not able to get to zero its not a anagram
            lookup[letter] -= 1
        }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))