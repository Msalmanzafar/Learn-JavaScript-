
let cities = {
	  Karachi: [['2015-12-1', 40000], ['2014-12-1', 35000], ['2013-12-1', 30000]],
    Lahore: [['2015-12-1', 62000], ['2014-12-1', 45000], ['2013-12-1', 25000],["2012-12-1",15000]],
    Multan: [['2015-12-1', 60000], ['2014-12-1', 45000], ['2013-12-1', 25000]],
    Islamabad: [['2015-12-1', 55000], ['2014-12-1', 35000], ['2013-12-1', 29000]]
}

var valuesLength = [];
var citiesLength = 0;
var maxArray = 0;


// Group By Date
const map = new Map();
let groupBy = (populations) => {
  //------values-Length------------
      
      valuesLength.push(populations.length); 
      
      if(populations.length > maxArray){
          maxArray=populations.length;
          for(let value of map.values()){
          for(let x = 0; x < citiesLength; ++x){
             if(valuesLength[x] == maxArray){
                 value.splice(x,0,0);
             }
         }
      }
      }
  //-----------group by dates-------------
  populations.forEach((record) => {
    if(!map.has(record[0])){
    	  map.set(record[0], [record[1]]);
    }
    else{
        map.get(record[0]).push(record[1]);
    }
  });
  return map;
}
// Making Heading For Table
let headings = ['year'];
//console.log(headings);

let groupedResult;
for(let heading in cities){
	headings.push(heading);
  citiesLength++;
  groupedResult = groupBy(cities[heading]);
}
// console.log(map);
// console.log(citiesLength);
// console.log(maxArray);

//--------------empty-Array-Fills-------
// var z =0;
// var mapSize = map.size;
// for(let value of map.values()){
//   if(z == mapSize-1){
//       for(let x = 0; x < citiesLength; x++){
//           if(valuesLength[x] != maxArray){
//               value.splice(x,0,0);
//           }
//       }
//   }
//   z++;
// }

// Mergining All Togather
let finalResult = [[...headings]];
groupedResult.forEach((value, key) => {
  finalResult.push([key, ...value]);
  
});
// Populating to console
console.table(finalResult);


