let p1 = new Promise(function(resolve,reject){
    let num = Math.random();
    if(num < 5){
        resolve(num)
    }else{
        reject(num)
    }
});

p1.then(function(result){
    console.log("Success", result)
}).catch(function(error){
    console.log("Error", error)
})