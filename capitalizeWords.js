/*
Write a recursive function called capitalizeWords Given an array
of words, return a new array containing each word capitalized
 */

function capitalizeWords(str){
  let newStr = String(str).toUpperCase().split(",");
  return newStr
 }
 console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))

 // recursive solution
 function capitalizeWords(str){
  if (str.length === 1) {
    return [str[0].toUpperCase()];
  }
  let res = capitalizeWords(str.slice(0, -1));
  res.push(str.slice(str.length-1)[0].toUpperCase());
  return res;
 }
 capitalizeWords(['i', 'am', 'learning', 'recursion'])//?


 // recursive solution global scope
 function capitalizeWords(str){
  if (str.length === 1) {
    return [str[0].toUpperCase()];
  }
  return capFunction(str);
 }

 capitalizeWords(['i', 'am', 'learning', 'recursion'])//?

function capFunction(str) {
  let result = capitalizeWords(str.slice(0, -1));
  result.push(str.slice(str.length - 1)[0].toUpperCase());
  return result;
}
