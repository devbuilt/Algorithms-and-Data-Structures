function solve(arr){
    
    let sortedArr = arr.slice().sort() //?
    
    let result = [] //?
    for(let i = 0; i < arr.length; i++){
    if(sortedArr[i+ 1] !== sortedArr[i])
    result.push(sortedArr[i])//?
    }
    return result//?


//    let sortedArr = arr;
//   return arr = [...new Set(arr)]

// var result = Array.from(new Set(arr));
//   return result    

}
solve([3,4,4,3,6,3])//?
solve([1,2,1,2,1,2,3])//?
solve([1,2,3,4])//?
solve([1,1,4,5,1,2,1])//?
solve([1,2,1,2,1,1,3]);//?