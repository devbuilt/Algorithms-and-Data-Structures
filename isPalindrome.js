/**
Write a function called ispalindrone which returns true if the string
passed to it is a a palindrone (reads the same forward) Otherwise
returns false 

 */
function isPalindrome(str){
    
let newStr = str.split('').reverse().join('')

return newStr === str;
}

console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
