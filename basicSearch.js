function basicSearch(long, short){

    let count = 0;
//Loop over the longer string
for(let i = 0; i < long.length; i++){
    for(let j =0; j < short.length; j++){
        console.log(short[j], long[i+j])
        if(short[j] !== long[i+j]){
            console.log(`BREAK`)
            break;
        }
        if(j === short.length -1){
            console.log('---FOUND ONE!---')
            count++;
            }
        }
    }
    return count;
}

console.log(basicSearch('lorie loled', 'lo'))