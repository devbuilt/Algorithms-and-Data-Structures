
//Solution 1
function addUpTo(n){
    let total = 0;
    // calculate less than equal to 
    for(let i = 1; i <= n; i++){
        //add upp to total += i
        total += i
       
    }
    return total;
}
console.log(addUpTo(6))/*?.*/
// let t1 = performance.now()
// addUpTo(1000000000)
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


// solution 2 math --------------------------------------------------
function addUpTo2(num){
    return num * (num + 1) / 2;
}
console.log(addUpTo2(6))/*?.*/

// let time1 = performance.now()
// console.log(addUpTo(1000000000))
// let time2 = performance.now()
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)