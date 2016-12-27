var fs = require("fs");
console.log("Sky Online");
var content = fs.readFileSync("info.txt");
console.log("Information: "+ content);
console.log("am here");