function accum(string) {
  
    let result = []; // store repeated string

    for (let i = 0; i < string.length; i++) {// loop through string
        result.push(string.charAt(i).toUpperCase() + string.charAt(i).toLowerCase().repeat(i)) // return string capitalized and repeated 
    }
    return result.join("-") // join string and add "-"
}
console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")