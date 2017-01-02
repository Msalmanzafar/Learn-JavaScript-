var cleanRoom = function(){
    return new Promise(function(resolve,reject){
        var push = true;
       if(push){
           resolve("clean the Room");
       }
       else{
           reject("am not working");
       }
    });
};

var reachedBusStop = function(result){
    return new Promise(function(resolve,reject){
        
        var push = false;
       if(push){
           resolve("Reached Bus Stop");
       }
       else{
           reject("On the way");
       }
    });
};

var goBack = function(result){
    return new Promise(function(resolve,reject){
       var push = true;
       if(push){
           resolve("going back");
       }
       else{
           reject("not going");
       }
    });
};


cleanRoom().then(function(result){
    return reachedBusStop(result);
}).then(function(result){
    return goBack(result);
}).then(function(result){
    console.log("Finished " + result);
}).catch(function(red){
    console.log("Busy " + red);
});

// Promise.all([cleanRoom(), reachedBusStop(), goBack()]).then(function(){
//     document.write("<h1>All task has been done..!</h1>");
// }).catch(function(){
//     document.write("<h1>Something Wrong..!</h1>");
// });

// Promise.race([cleanRoom(), reachedBusStop(), goBack()]).then(function(){
//     document.write("<h1>All of them..!</h1>");
// }).catch(function(){
//     document.write("<h1>This is not good..!</h1>");
// });