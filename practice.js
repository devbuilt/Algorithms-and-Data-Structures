// function flattenAndSort(array) {
//     var newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array[i].length; j++) {
//             newArray.push(array[i][j]);
//         }
//     }

//     return newArray.sort((a, b) => a - b);
// }

// console.log(flattenAndSort([[], [1]]))
// console.log(flattenAndSort([[3, 2, 1],[7, 9, 8],[6, 4, 5]]))

// function flattenAndSort1(array){
//     return [].concat(...array).sort((a,b) => a - b)
    
// }

// console.log(flattenAndSort1([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))



// function findNeedle(haystack) {
//     let index = 0;
//     while(index < haystack.length){
//         if(haystack[index] === 'needle'){
//             return " found needle at position " + index
//         }
//         index++
//     } 
// //  return "found neeedle at position " + haystack.indexOf('needle')
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
// console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]))
// console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]))

// function solution() {
//   let str = ["world"]
//   str.reverse()
// return str
// }
// console.log(solution())

// const a = [1, 2, 3];

// console.log(a); // [1, 2, 3]

// a.reverse();

// console.log(a)

// function sumMul(n, m) {
//     //counter
//     // loop through
//     if (m <= 0 || n <= 0) {
//         return 'INVALID';
//     }

//     let sum = 0;
//     for (let i = n; i < m; i += n) {
//         sum += i;
//     }
//     return sum;
       
//         // multiply the index unitil its less than m 
       
//         // if m is less than 0 return "Invalid"
//         // return value
//     }

// console.log(sumMul(2, 9))



// function mergeArrays(arr1, arr2) {
//     return [].concat(...arr1, arr2).sort((a, b) => a - b).filter(function (item, pos, self) {
//         return self.indexOf(item) == pos;
//     })
// }

// console.log(mergeArrays([1, 2, 3, 4], [9,5, 6, 7, 8,100]))




// function removeEveryOther(arr) {
//     //your code here
//     let newArray = [];
//     for(let i = 0; i < arr.length; i +=2 ){
//         console.log(newArray.push(arr[i]))

//     }
//     return newArray
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// var array = ['Hello', 'Goodbye', 'Hello Again'];

// var filtered = array.filter(function (value, index, arr) {

//     return index % 2 === 0;


// });
// console.log(filtered)



// function tiyFizzBuzz(sentence) {
//   return sentence.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, "Iron").replace(/[AEOU]|I(?!r)/g, "Iron Yard").replace(/[eiu]|a(?!r)|o(?!n)/g, "Yard")
// }

// console.log(tiyFizzBuzz("H")) // "Iron" constant
// console.log(tiyFizzBuzz(" ")) // " "
// console.log(tiyFizzBuzz("A"))// " Iron Yard" vowel 
// console.log(tiyFizzBuzz("b")) // "b"
// console.log(tiyFizzBuzz("a")) // "Yard" vowel

// function getSize(width, height, depth) {
//     let volume = width * height * depth
//     let surface = width * height * 5

//     return surface + volume
// }
// console.log(getSize(4, 2, 6))
// console.log(getSize(10, 10, 10))


// function findDifference(a, b) {
//    let newOne = a.reduce((x,y)  => x * y ) 
//    let newTwo = b.reduce((x,y) => x * y )
//    return Math.abs(newOne - newTwo);
// }


// console.log(findDifference([3, 2, 5], [1, 4, 4]))
// console.log(findDifference([15, 20, 25], [10, 30, 25]))
// console.log(findDifference([4, 4, 7], [3, 9, 3]))
// console.log(findDifference([11, 2, 5], [1, 10, 8]))
// console.log(findDifference([9, 7, 2], [5, 2, 2]))

// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let yourCool = classPoints.reduce((a,b) => a + b)
//     let myGrade = yourCool/ classPoints.length
//     return myGrade < yourPoints

   
// }
// console.log(betterThanAverage([8, 3] , [5] ))
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], [75]))

// function bonusTime(salary, bonus) {
//     // your code here
//     if(bonus === true){
//         return "£"+ salary * 10
//     }else{
//         return "£"+ salary 
//     }

// }

// console.log(bonusTime(10000, true))
// console.log(bonusTime(10000, false))

// function stringClean(s) {
//     // Function will return the cleaned string
//     return s.replace(/[&\/\\#,+()$~%.'":*?<>{}[0-9]/g, '')
// }

// console.log(stringClean("(E3at m2e2!!)"))
// console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))
// console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"))
// console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"))


// function sakuraFall(v) {
 
// }
// console.log(sakuraFall(5))
// console.log(sakuraFall(10))
// console.log(sakuraFall(-1))


// function weatherInfo(temp) {
//     let c = temp
//     if (c > 0){
//         return c + " is freezing temperature"
//     }else{
//         return c + " is above freezing temperature"
//     }
// }

// function convertToCelsius(temperture) {
//     var celsius = temperture - 32 * (5 / 9)
//     return celsius
// }

// console.log(convertToCelsius(50))


// function arrayPlusArray(arr1, arr2) { 
// let sum = 0;
// for(let i = 0; i < arr1.length; i++)
//     sum += arr1[i]
// for(let j = 0; j < arr2.length; j++)
//     sum += arr2[j]
// return sum

// return arr1.reduce((a,b) => a + b) + arr2.reduce((c,d) => c + d)

// }


// console.log(arrayPlusArray([1, 4, 3], [4, 5, 6]))


// function multipleOfIndex(array) {

//     let results = [];
//     let len = array.length;
//     for(let i = 0; i <len; i++){
//         if(array[i] % i === 0){
//             results.push(array[i])
//         }
//     }
// return results
//     // return array.filter((num, i) => num % i === 0)
  
// }
// console.log(multipleOfIndex([1,2,5,2,1,8]))
// console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]))

// function checkExam(array1, array2){
//     // good luck
//     //  ["a", "a", "b", "b"] ["a", "c", "b", "d"]
//     //4   -1    4   -1

//     let result = [];
//     for (let i = 0; i < array1.length; i++)
//         console.log(array1[i]+= result)
//         for(let j = 0; j < array2.length; j++)
//         console.log(array2[j] += result)
//         if(result.indexOf(array1) && result.indexOf(array2)){
//             return array1 += 4 
//         }else{
//             return array2 += -1
//         }
// }

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //6'


// function defineSuit(card) {
//     // good luck
//     if (card.includes("♣")){
//         return "clubs"
//     }

// }
// console.log(defineSuit('3♣'))//


// function cookie(x) {
//     var cookieStatement = "Who ate the last cookie? It was "
//     if (typeof x === 'string') {
//         return cookieStatement + "Zach!"
//     } else if (typeof x === 'number') {
//         return cookieStatement + "Monica!"
//     } else { return cookieStatement + "the dog!" }

// }
// console.log(cookie(""))
// console.log(cookie(2))
// console.log(cookie())

// function isDivideBy(number, a, b) {
//     // good luck
//     // if (number % a === 0 && number % b === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return number % a === 0 && number % b === 0 ? true : false
// }


// console.log(isDivideBy(-12, 2, -6))
// console.log(isDivideBy(-12, 2, -5))
// console.log(isDivideBy(45, 1, 6))
// console.log(isDivideBy(45, 5, 15))
// console.log(isDivideBy(4, 1, 4))
// console.log(isDivideBy(15, -5, 3))

// function isBelowthershold(currentvalue){
//     return currentvalue < 40;
// }
//     let array1 = [1, 30, 39, 29, 10, 13];
//     console.log(array1.every(isBelowthershold))

// function multiTable(number) {
//     // good luck
//     let table = '';
//     let count = 0;
//     while(count < 10){
//         count++
//         table += `${count} * ${number} = ${count * number}${count < 10 ? '\n' : ''}`;
//     }
//     return table

// }

// console.log(multiTable(5))


// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ")
// }

// console.log(reverseWords("hello world!"))
// function power(x, y) {
//     //SHOW ME WHAT YOU GOT!
//   return x ** y
//     // return Math.pow(x,y)
// }


// console.log(power(1, 701270))
// console.log(power(2, 2))
// console.log(power(3, 2))
// console.log(power(-1, 40))


// function animals(heads, legs) {
//     const cows = legs / 2 - heads;
//     const chickens = heads - cows;

//     if (legs & 1 || chickens > heads || cows > heads)
//         return "No solutions";
//     else
//         return [chickens, cows];
// }

// console.log(animals(72, 200))
// console.log(animals(116, 282))
// console.log(animals(12, 24))


// function isValid(formula) {
//     if (!(formula.includes(7) || formula.includes(8)) ||
//         (formula.includes(1) && formula.includes(2)) ||
//         (formula.includes(3) && formula.includes(4)) ||
//         ((formula.includes(5) && !formula.includes(6)) || (formula.includes(6) && !formula.includes(5)))
//     ) return false;
//     return true;
// }
// console.log(isValid([7, 1, 2, 3]))
// console.log(isValid([1, 5, 6, 7, 3]))

// function generateHashtag(str) {
//     if (str === "") { return false }
//     // var lower = String(str).toLowerCase();
//     // return lower.replace(/(^| )(\w)/g, function (x) {
//     //     return x.toUpperCase();
//     // });
//     // return str.replace(/\w\S*/g, function (txt) {

//     //     let toupperCase = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        
//     //     return String(toupperCase.replace(/\s/g, " "))
//     // });
//     // let txtReplace = (/(^| )(\w)/g)
//     let newStr = "#" + str.charAt().toUpperCase() + str.slice(1).split(" ").join("")
//     return newStr
   
// }
// console.log(generateHashtag(""))
// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag("Codewars"))
// console.log(generateHashtag("Codewars Is Nice"))
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
// console.log(generateHashtag("Codewars is nice"))

// class Person {
//     // Get coding in ES6 :D
//     constructor(firstName, lastName, age, gender) {

//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.gender = gender

    
//   Person.sayFullName = function () {
//      return ["Hi ! I'm ", this.firstName, " ", this.lastName, " and I'm ", this.age, " year old."].join("");
//     };
//     }
// };

// console.log(new Person().firstName, "John")
// console.log(Person.sayFullName())
// console.log(new Person().lastName, "Doe")
// console.log(new Person().age, 0)
// console.log(new Person().gender, "Male")




// function spEng(sentence) {
//     //write your code here
//     if (sentence.toLowerCase().includes("english")){
//         return true
//     }
//         return false
// }
// console.log(spEng("english"))
// console.log(spEng("aEnglishadfs"))
// console.log(spEng("")


function dbSort(a) {
    let nums = a.filter(x => x !== x.toString()).sort((a, b) => a - b)
    let strs = a.filter(y => y === y.toString()).sort()
    return nums.concat(strs)
}


console.log(dbSort([6, 2, 3, 4, 5]))
console.log(dbSort([14, 32, 3, 5, 5]))  
console.log(dbSort([1, 2, 3, 4, 5]))
console.log(dbSort(["Banana", "Orange", "Apple", "Mango","1", 0, 2, 2]))
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]))

function helpZoom(_arr1, _arr2) {
  if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length)
      return false;

  var arr1 = _arr1.concat().sort();
  var arr2 = _arr2.concat().sort();

  for (var i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i])
          return "No";

  }

  return "Yes";
}
    

console.log(helpZoom([1, 1, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 1, 0])) //, "Yes")

