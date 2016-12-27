var fs = require("fs");
console.log("Sky Online");
fs.readFile("info.txt", function(error, data){
    console.log("Information: " + data);
});
console.log("Am here");