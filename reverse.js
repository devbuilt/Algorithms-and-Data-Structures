/*
Write a recursive function called reverse which accpets a 
string and returns a new string in 
reverse

 */

 function reverse(str){
     // add whatever parameters you deem necessary - good luck
     if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];

 }

 console.log(reverse('awesome'))// 'emosewa'
 console.log(reverse('rithmschool'))// 'loohcsmhtir'