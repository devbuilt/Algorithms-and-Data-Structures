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


// // function dbSort(a) {
// //     let nums = a.filter(x => x !== x.toString()).sort((a, b) => a - b)
// //     let strs = a.filter(y => y === y.toString()).sort()
// //     return nums.concat(strs)
// // }

// // console.log(dbSort([6, 2, 3, 4, 5]))
// // console.log(dbSort([14, 32, 3, 5, 5]))  
// // console.log(dbSort([1, 2, 3, 4, 5]))
// // console.log(dbSort(["Banana", "Orange", "Apple", "Mango","1", 0, 2, 2]))
// // console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]))

// // function helpZoom(_arr1, _arr2) {
  
// //     if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length)
// //       return false;

// //   var arr1 = _arr1.concat().sort();
// //   var arr2 = _arr2.concat().sort();

// //   for (var i = 0; i < arr1.length; i++) {

// //       if (arr1[i] !== arr2[i])
// //           return "No";

// //   }

// //   return "Yes";
// // }
    

// // console.log(helpZoom([1, 1, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 1, 1])) //, "Yes")


// // function bald(x) {
// // if(x === x){
// //     return "Unicorn!"
// // }
// // }

// // console.log(bald('/---------'))
// // console.log(bald('/-----/-'))
// // console.log(bald('--/--/---/-/---'))



// function whatday(num) { 
//     if(num < 1 || num > 7){return" Wrong, please enter a number between 1 and 7"}
//     else if(num === 1){return "Sunday"}
//     else if(num === 2){return "Monday"}
//     else if(num === 3){return "Tuesday"}
//     else if(num === 4){return "Wednesday"}
//     else if(num === 5){return "Thursday"}
//     else if(num === 6){return "Firday"}
//     else if(num === 7){return "Saturday"}
//   }
//   console.log(whatday(1))
//   console.log(whatday(2))
//   console.log(whatday(3))
//   console.log(whatday(8))

//   function enough(cap, on, wait) {
//     if(on + wait< cap){
//         return 0
//     }else{
//         return (on + wait) - cap
//     }
//   }

//   console.log(enough(10, 5, 5))
//   console.log(enough(100, 60, 50))


  
//   function check(a,x){
//   for(let i = 0; i < a.length; i++){
//       if(a[i] === x){
//           return true
//       }
//   }
//   return false
// }
// check([65,44],65)//?

// function sumStr(a,b) {
//     return  Number(a) + Number(b) + ''
// }
// sumStr("4","5")//?
// sumStr("34","5")//?

// const isReallyNaN = (val) => {
//     if(parseFloat(val)){
//     return true
//     }
//     return false
//   };

//   isReallyNaN(37)//?
//   isReallyNaN('37')//?
//   isReallyNaN(NaN)//?
//   isReallyNaN(undefined)//?


// function integrate(coefficient, exponent) {
  
// }
// integrate(3,2)//?
// integrate(9,5)//?


// function sameFrequency(num, num1){
//     //convert num to strings
//     let strNum1 = num.toString()
//     let strNum2 = num1.toString()
//     if (strNum1.length !== strNum2.length) return false;
//     //counter
//     let countNum1 = {}
//     let countNum2 = {}

//    for (let i = 0; i < strNum1.length; i++) {
//         countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for (let j = 0; j < strNum1.length; j++) {
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }
//     for (let key in countNum1) {
//       if (countNum1[key] !== countNum2[key]) return false;
//     }
//     return true
//   }

// sameFrequency(182,281) //?  
// sameFrequency(34,14)//? 
// sameFrequency(3589578,5879385)//? 
// sameFrequency(22,222)//?

// function sumRange(num){
//   if(num === 1) return 1
//   return num + sumRange(num - 1)
// }
// sumRange(4)//?

// function factorial(num){
//   let total = 1;
//   for(let i = num; i > 1; i--){
//     total *= i
//   }
//   return total
// }
// factorial(3)//?

// function factorialRec(num){
//   if(num === 0) return 1;
//   return num * factorial(num-1)
// }
// factorialRec(3)//?

// function odd(value){
//   let result = [];
//   for(let i = 0; i < value.length; i++){
//     if(value[i] % 2 !== 0){
//       result.push(value[i])
//     }
//   }
//   return result;
// }
// odd([4,5,6,7,8,8,9,10,11])//?

// //recursion
// function oddRecursion(values){
//   let newArr = [];
//   if(values.length === 0){
//     return newArr;
//   }
//   if(values[0] % 2 !== 0){
//     newArr.push(values[0])
//   }
//     newArr = newArr.concat(oddRecursion(values.slice(1)))
//     return newArr
// }
// oddRecursion([1,2,3,4,5,6,7,])//?

// function power(base, exponent){
// if(exponent === 0) return 1
// return base * power(base,exponent - 1)
// }
// power(2,0)//?
// power(2,2)//?

// function productOfArray(num){
// return num.reduce((total,amount) => total + amount)

// }

// productOfArray([1,2,3])//?
// productOfArray([1,2,3,10])//?

// function recursiveRange(x){
//   if(x === 0) return 0;
//   return x + recursiveRange(x-1)
// }
// recursiveRange(10)//?

// function fib(num){
// if(num <= 2) return 1
// return fib(num-1) + fib(num-2)
// }

// fib(4)//?
// fib(10)//?
// fib(28)//?

// function reverse(num){
// let newstr = num.split('').reverse().join('')
// return newstr
// }
// reverse('awesome')//?
// reverse('rithmschool')//?

// function reverseRecursive(str){
//   if(str.length <= 1) return str
//   return reverseRecursive(str.slice(1)) + str[0]
// }
// reverseRecursive('awesome')//?
// reverseRecursive('rithmschool')//?


// function isPalindrone(str){
//   let newStr = str.split('').reverse().join('')
//   return newStr === str
// }
// isPalindrone('awesome')//?
// isPalindrone('tacocat')//?

// function someRecursive(str){
// let newStr = str.length + 1
// return newStr % 2 !== 0
// }
// someRecursive([1,2,3,4])//?
// someRecursive([4,6,8])//?

// function flatten(num){
//   // add whatever parameters you deem necessary - good luck!
//   return num.reduce((total,amount)=>{
//       return total.concat(amount)
//   },[])
// }

// flatten([1, 2, 3, [4, 5] ])//?
// flatten([1, [2, [3, 4], [[5]]]])//?



// // 0(n)
// function addUpTo(n){
//   let total = 0;
//   for(let i = 0; i <= n; i++){
//     total += i
//   }
//   return total
// }
// addUpTo(5)//?
// // 1+2 = 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6 = 21 + 7 = 28 + 8 = 36 + 9 = 45 + 10 = 55

// //0(1)
// function addUpTo1(n){
//   return n * (n + 1) / 2
// }
// addUpTo1(5)//?


function hasPairWithSum(data,target){
let sums = [];
for(let i = 0; i < data.length; i++){
  for(let j = i + 1; j < data.length; j++){
    if(data[i] + data[j] === target){
      sums.push([data[i], data[j]])//?
      return true
    }
  }
}
return false
}
// find the pair that will sum 8 
hasPairWithSum([1,2,3,9], 8)//?
hasPairWithSum([1,3,4,4], 8)//?


function findDuplicateString(str){
for(let i = 0; i < str.length; i++){
  for(let j = i + 1; j < str.length; j++)
    if(str[i] === str[j]){
      return true
    }
  }
  return false
}
findDuplicateString("AABBCBC")//?
findDuplicateString("ABCDEFG")//?


function Node(data, next) {
  this.data = data;
  this.next = next;
} 

function merge(L1, L2) {
  
  // create new linked list pointer
  var L3 = new Node(null, null);
  var prev = L3;
  
  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) { 
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }
  
  // once we reach end of a linked list, append the other 
  // list because we know it is already sorted
  if (L1 === null) { prev.next = L2; }
  if (L2 === null) { prev.next = L1; }
  
  // return the sorted linked list
  return L3.next;
  
}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 

merge(L1, L2); //?

function flattenAndSort(array) {
  var newArr = []
  for(var i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
          newArr = newArr.concat(flattenAndSort(array[i]))
    } else {
          newArr.push(array[i])
          }
    } 
    // function sortNumber(a,b){
    //   return a-b
    // }

    // return newArr.sort(sortNumber);

    return newArr.sort((a,b) => a-b)
  }

  flattenAndSort([[3, 2, 1,200], [7, 9, 8], [6, 4, 5]])//?

// javascript methods

function replicate(times, number) {
let newArr = []
  for (let i = 0; i < times; i++){
    newArr.push(number)//?
  }
return newArr//?
// return Array(times).fill(number)

}
replicate(3,5)//?
replicate(0,12)//?
replicate(8,0)//?

function repeatString(str,num){
  return Array(num).fill(str)
}
repeatString('hello', 2);//?

function linearSearch(num, target){
  for(let i = 0; i < num.length; i++){
   if(num[i] === target) return true
  }
  return -1
}

linearSearch([1,2,3,4,5,6])//?


function taxicab(n) {
  let a = 1, b = 1, c = 1, d = 1,
  cubeA = a**3 + b**3,
  cubeB = c**3 + d**3,
  results = [];

  while (cubeA < n) { // loop over a
    while (cubeA < n) { // loop over b
      // avoid running nested loops if this number is already in results
      if (results.indexOf(cubeA) === -1) {
       while (cubeB <= cubeA) { // loop over c
        while (cubeB <= cubeA) { // loop over d
          if (cubeB === cubeA && a!=c && a!=d) { // found a taxicab number!
            results.push(cubeA);
          }
          d++;
          cubeB = c**3 + d**3;
        } // end loop over d
        c++;
        d = c;
        cubeB = c**3 + d**3;
       } // end loop over c
      }
      b++;
      cubeA = a**3 + b**3;
      c = d = 1;
      cubeB = c**3 + d**3;
    } // end loop over d
    a++;
    b = a;
    cubeA = a**3 + b**3;
  } // end loop over a

  return results.sort((a,b)=> a-b);
}
taxicab([10])//?

function counter(num){
  let count = 0;
  for(let i = 1; i <= num; i++){
   count += i
  }
  return count;
}
counter(10)//?