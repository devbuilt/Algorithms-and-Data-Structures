// function hash(key,arrayLen){
// let total = 0; 
// for(let char of key){
//     // map "a" to 1, "b", to 2, "c" to 3 , ect.
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen;
//     }
//     return total
// }
// hash("Hello!",10)//?
// hash("orangered", 10)//?
// hash("cyan", 10)//?


// refactored

function hash(key, arraylen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arraylen;
    }
    return total
}
hash("Hello", 10)//?
hash("Orangered", 10)//?