function recursionCountDown(num){
    if(num <= 0){
        console.log("All Done");
        return;
    }
    console.log(num); // 5, 4, 3, 2, 1
    num--;
    recursionCountDown(num);
}
recursionCountDown(5);


//without recursion
function countDown(num){
    for(let i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All Done!");
}
countDown(5);