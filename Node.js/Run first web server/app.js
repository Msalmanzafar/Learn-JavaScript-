var http = require("http");

http.createServer(function(req, res){
    if(res){
        thisTime();
    }
    res.end("am going to cick you..");
}).listen(3000);

console.log("server is live on http://127.0.0.1:3000/");

function thisTime(){
    console.log("am ready");
}

// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     document.write(time + " sec have passed");
//     if (time >= 10){
//         clearInterval(timer);
//     }
// },2000);
// timer();