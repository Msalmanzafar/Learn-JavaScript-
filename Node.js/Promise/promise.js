var cleanRoom = new Promise(function(resolve, reject){

    var clean = false;
    if (clean){
        resolve('Am Done');
    }else{
        reject('Am Busy');
    }
});

cleanRoom.then(function(green){
    console.log("message is: " + green);
}).catch(function(red){
    console.log("message is: " + red);
});