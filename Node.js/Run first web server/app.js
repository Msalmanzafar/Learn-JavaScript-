// var http = require("http");

// http.createServer(function(req, res){
//     res.end("Hello World Here is the Sky server");
// }).listen(3000);

// console.log("server is live on http://127.0.0.1:3000/");

var time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + " sec have passed");
    if (time >= 10){
        clearIntervalO(timer);
    }
},2000);