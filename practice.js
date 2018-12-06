function flattenAndSort(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
        }
    }

    return newArray.sort((a, b) => a - b);
}

console.log(flattenAndSort([[], [1]]))
console.log(flattenAndSort([[3, 2, 1],[7, 9, 8],[6, 4, 5]]))

function flattenAndSort1(array){
    return [].concat(...array).sort((a,b) => a - b)
    
}

console.log(flattenAndSort1([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))



function findNeedle(haystack) {
    let index = 0;
    while(index < haystack.length){
        if(haystack[index] === 'needle'){
            return " found needle at position " + index
        }
        index++
    } 
//  return "found neeedle at position " + haystack.indexOf('needle')
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]))
console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]))

function solution() {
  let str = ["world"]
  str.reverse()
return str
}
console.log(solution())

const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a)

function sumMul(n, m) {
    //counter
    // loop through
    if (m <= 0 || n <= 0) {
        return 'INVALID';
    }

    let sum = 0;
    for (let i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
       
        // multiply the index unitil its less than m 
       
        // if m is less than 0 return "Invalid"
        // return value
    }

console.log(sumMul(2, 9))



function mergeArrays(arr1, arr2) {
    return [].concat(...arr1, arr2).sort((a, b) => a - b).filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })
}

console.log(mergeArrays([1, 2, 3, 4], [9,5, 6, 7, 8,100]))




function removeEveryOther(arr) {
    //your code here
    let newArray = [];
    for(let i = 0; i < arr.length; i +=2 ){
        console.log(newArray.push(arr[i]))

    }
    return newArray
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

var array = ['Hello', 'Goodbye', 'Hello Again'];

var filtered = array.filter(function (value, index, arr) {

    return index % 2 === 0;


});
console.log(filtered)



function tiyFizzBuzz(sentence) {
  return sentence.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, "Iron").replace(/[AEOU]|I(?!r)/g, "Iron Yard").replace(/[eiu]|a(?!r)|o(?!n)/g, "Yard")
}

console.log(tiyFizzBuzz("H")) // "Iron" constant
console.log(tiyFizzBuzz(" ")) // " "
console.log(tiyFizzBuzz("A"))// " Iron Yard" vowel 
console.log(tiyFizzBuzz("b")) // "b"
console.log(tiyFizzBuzz("a")) // "Yard" vowel

function getSize(width, height, depth) {
    let volume = width * height * depth
    let surface = width * height * 5

    return surface + volume
}
console.log(getSize(4, 2, 6))
console.log(getSize(10, 10, 10))


function findDifference(a, b) {
   let newOne = a.reduce((x,y)  => x * y ) 
   let newTwo = b.reduce((x,y) => x * y )
   return Math.abs(newOne - newTwo);
}


console.log(findDifference([3, 2, 5], [1, 4, 4]))
console.log(findDifference([15, 20, 25], [10, 30, 25]))
console.log(findDifference([4, 4, 7], [3, 9, 3]))
console.log(findDifference([11, 2, 5], [1, 10, 8]))
console.log(findDifference([9, 7, 2], [5, 2, 2]))

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let yourCool = classPoints.reduce((a,b) => a + b)
    let myGrade = yourCool/ classPoints.length
    return myGrade < yourPoints

   
}
console.log(betterThanAverage([8, 3] , [5] ))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], [75]))

function bonusTime(salary, bonus) {
    // your code here
    if(bonus === true){
        return "£"+ salary * 10
    }else{
        return "£"+ salary 
    }

}

console.log(bonusTime(10000, true))
console.log(bonusTime(10000, false))

function stringClean(s) {
    // Function will return the cleaned string
    return s.replace(/[&\/\\#,+()$~%.'":*?<>{}[0-9]/g, '')
}

console.log(stringClean("(E3at m2e2!!)"))
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"))
console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"))


function sakuraFall(v) {
 
}
console.log(sakuraFall(5))
console.log(sakuraFall(10))
console.log(sakuraFall(-1))