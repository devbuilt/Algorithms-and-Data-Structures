/*
Write a recursive function called capitalizeWords Given an array
of words, return a new array containing each word capitalized
 */

function capitalizeWords(str){
  let newStr = String(str).toUpperCase().split(",");
  return newStr
 }
 console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))