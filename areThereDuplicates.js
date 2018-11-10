/* Implement a function called, areThereDuplicates which accpets a variable of arguments
and checks wether there are any duplicates among the arguments passed in. You can solve this using
the frequency counter pattern OR the multiple pointers patterns 

Restrictions 

Time 0(N)
Soace O(N)

*/

function areThereDuplicates(elem){
 let collection = {}
 for (let val in arguments) {
     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
 }
 for (let key in collection) {
     if (collection[key] > 1) return true
 }
 return false;
}

console.log(areThereDuplicates(1, 2, 3)) //false
console.log(areThereDuplicates(1, 2, 2)) //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true


//Multiple Pointers

function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}
console.log(areThereDuplicates2(1, 2, 3)) //false
console.log(areThereDuplicates2(1, 2, 2)) //true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) //true


//One liner solution
function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(1, 2, 3)) //false
console.log(areThereDuplicates3(1, 2, 2)) //true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')) //true
