function hash(key,arrayLen){
let total = 0; 
for(let char of key){
    // map "a" to 1, "b", to 2, "c" to 3 , ect.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
    }
    return total
}
hash("Hello!",10)//?
hash("orangered", 10)//?
hash("cyan", 10)//?