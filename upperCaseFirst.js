function upperCaseFirst(word){
    return word[0].toUpperCase() + word.slice(1)
}

function upperCaseWord(sentence){
    let words = sentence.split(" ")
    for(let i = 0; i < words.length; i++){
        words[i] = upperCaseFirst(words[i])
    }
    return words.join(" ")
}

upperCaseWord("first sentence")//?
