function recursionCountDown(num){
    if(num <= 0){
        console.log("All Done")
        return;
    }
    console.log(num);
    num--;
    recursionCountDown(num)
}
recursionCountDown(5)