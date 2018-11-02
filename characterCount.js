//EXPLORE EXAMPLES 

// * Start with simple examples
// * Progress to More complex Examples
// * Explore Examples with Empty inputs
// * Explore Examples with Invalid inputs
// * Break it Down
// * Solve/Simplify --Solve a simpler problem


// Write a function which takes in a string and returns counts of each character in the string

//charCount("aaaa") -- // {a:4} possible solutions
//charCount("hello") -- // {h:1, e:1, l:2, l:2, o:1} possible soluitons

// "my phone number is 182763" - another posible solution do we account for spaces

function charCount(str){
    //make object to return at the end
    let result = {};
    //loop over string, for each character
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        //if char is a numbers/letter And is a key object, and one to count
        if(result[char] > 0){
            result[char]++;
        }
        //If the char is number/letter And not in object, add it to the object and set value to 1
        else{
            result[char] = 1;
        };
    }
    return result;
}
//if character is something else (space, period, ect. ) dont do anyting
//return a object at end..
console.log(charCount("Hello world"))

//REFACTORING QUESITONS
// * Can you check the result
// * Can you derive the result diffrently ?
// * Can you understand it at a glance?
// * can you use the result or method for some other problem?
// * Can you improve the performance of your solution?
// * Can you think of other wasy to refactor?
// * How have other people solved this problem?

