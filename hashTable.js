class HashTable {
    constructor(size=4){
        this.keyMap = new Array(size);
    }
 
_hash(key) {
    
    let total = 0;
    //store the total
    let WEIRD_PRIME = 31;
    //prime number starts at 31
    for(let i = 0; i < Math.min(key.length, 100); i++){
        //loop through
        let char = key[i];
        // variable to check key
        let value = char.charCodeAt(0) - 96
        // subtract from key
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
    return total
    }
    set(key,value){
        let index = this._hash(key)
    if(!this.keyMap[index]){
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key,value])
    }
    get(key){

    }
}
let ht = new HashTable();
ht.set("maroon", "#80000")//?
ht.set("yellow","#FFFF00")//?
ht.set("olive", "#808000")//?
ht.set("salmon", "#FA8072")//?
ht.set("lightcoral","#F08080")//?