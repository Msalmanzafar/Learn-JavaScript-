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


// cleanRoom().then(function(result){
//     return reachedBusStop(result);
// }).then(function(result){
//     return goBack(result);
// }).then(function(result){
//     console.log("Finished " + result);
// }).catch(function(red){
//     console.log("Busy " + red);
// });

//---------------Arrwo Function------------------------------
cleanRoom()
    .then((result) => reachedBusStop(result))
    .then((result) => goBack(result))
    .then((result) => console.log("Finished" + result))
    .catch(() => console.log("Busy")); 

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

let cities = {
	karachi: [['2015-12-1', 40000], ['2014-12-1', 35000], ['2013-12-1', 30000]],
  lahor: [['2015-12-1', 62000], ['2014-12-1', 45000], ['2013-12-1', 25000]],
  multan: [['2015-12-1', 60000], ['2014-12-1', 45000], ['2013-12-1', 25000]]
}

// Group By Date
const map = new Map();
let groupBy = (populations, len) => {
  populations.forEach((record) => {
    if(!map.has(record[0])){
    	map.set(record[0], [record[1]])
    } else {
      map.get(record[0]).push(record[1])
    }
  })
  return map;
}

// Making Heading For Table
let headings = ['year'];
let groupedResult;
for(let heading in cities){
	headings.push(heading)
  groupedResult = groupBy(cities[heading])
}

// Mergining All Togather
let finalResult = [[...headings]];
groupedResult.forEach((value, key) => {
	finalResult.push([key, ...value])
})

// Populating to console
console.table(finalResult)
