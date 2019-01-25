let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt)
    }, 3000)
})

promise.then(function(data){
    console.log("Random int passed to resolve:", data);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(Math.floor(Math.random() * 10))
        }, 500)
    })
}).then(function(data){
    console.log("Second random int passed to resolve:", 
    data)
});