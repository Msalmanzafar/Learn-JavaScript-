// var cleanRoom = new Promise(function(resolve, reject){

//     var clean = false;
//     if (clean){
//         resolve('Am Done');
//     }else{
//         reject('Am Busy');
//     }
// });

// cleanRoom.then(function(green){
//     console.log("message is: " + green);
// }).catch(function(red){
//     console.log("message is: " + red);
// });


var a = function(p){
	return new Promise(function(resolve, reject){
	var then = true;
	if (then){
		resolve("yessssss....");
    }
	else{
		reject("notttt.....");
	}
});
}
a();