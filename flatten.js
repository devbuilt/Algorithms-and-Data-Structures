/*
Write a recursive function called faltten which accpets an array
of arrays and returns a new array with all values flatten
 */

 function flatten(oldArr){
    var newArr = []
    for(var i = 0; i < oldArr.length; i++){
      if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
      } else {
            newArr.push(oldArr[i])
            }
      } 
      return newArr.sort();
 }

 console.log(flatten([1,2,3]))
 console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5])
 console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5])
 console.log(flatten([[1],[2],[3]])) // [1,2,3]))
 console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) //[1,2,3]


