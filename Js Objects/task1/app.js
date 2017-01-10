//------------------------------Ahsan code...------------------------------------------

// var data = {
//     karachi: [["2016-08-01",1000],["2016-08-01",500]],
//     lahore: [["2016-08-01",500],["2016-08-01",500]]
// };
// var cities=[];
// var dates =[];
// var allData = [];

// var i=0;
// cities.push("year");
// for(x in data){
//     cities.push(x);
// }
// data(x).forEach(function(){
    
// })

// var pakCites = Object.values(cities);
// console.log(pakCites.length);


//------Student Object-----------------

// var students = [
//     {
//         name: "Salman",
//         grade1: 69,
//         grade2: 78
//     },
//     {
//         name: "Bilal",
//         grade1: 59,
//         grade2: 78
//     },
//     {
//         name: "Farhan",
//         grade1: 79,
//         grade2: 57
//     },
//     {
//         name: "Ali",
//         grade1: 72,
//         grade2: 67
//     },
//     {
//         name: "tahir",
//         grade1: 98,
//         grade2: 90
//     }
// ];

// var avgGrade = 70;
// var result = students.map(function(student){
//     var avrg = (student.grade1 + student.grade2)/2;
//     if (avrg > avgGrade){
//        return{
//            name: student.name,
//            pass: true

//        };
//     }else{
//         return{
//             name: student.name,
//             pass: false
//         };
//     }
// });

 // console.log(result);

 //------------------Object to array and array to string----
// var headings = [];
// var data = [];
// var mergeData = [];
// var pakcities = [];

//  var cities={
//     karachi:['2015-12-1',1000],
//     lahore:['2015-12-1',500], 
//     multan:['2015-12-1',200]
// };

// headings.push('year');
// for(key in cities){
//     headings.push(key);
//     data.push(cities[key]);
// }
// // console.log(headings);
// // console.log(data);

// for (var x =0 ; x < data.length; x++) {
//     for(y=0; y < data[x].length; y++ ){
//         if(typeof data[x][y] === 'string'){
//             mergeData[0]=data[x][y];
//         }else{
//              mergeData.push(data[x][y]);
//         }
//     }
// }
// //console.log(mergeData);
// pakcities.push(headings,mergeData);
// // console.log(pakcities);
// console.table(pakcities);












//-----------------------------Multiples array-------------------------------------
var headings = [];
var data = [];
var mergeData = [];
var pakcities = [];

//[["year", "karachi", "lahore", "multan"],['2015-12-1',1000,500,200]]

 var cities={
    karachi:[['2015-12-1',1000], ['2014-12-1',2000], ['2013-12-1',3000]],
    lahore:[['2015-12-1',500], ['2014-12-1',14000], ['2013-12-1',2600]],
    multan:[['2015-12-1',200], ['2014-12-1',700], ['2013-12-1',1700]]
};

headings.push('year');
for(key in cities){
    headings.push(key);
    data.push(cities[key]);
}
// console.log(data);
var valuesArray= [];
for(var i = 0; i<data.length;i++){
    for(var j = 0; j<data[i].length;j++){
        valuesArray.push(data[i][j]);
    }
}
console.log(valuesArray);
var str=[];
var num=[];
valuesArray.map(function(value,index){
    if(!str.includes(value[0])){
        str.push(value[0]);
    }
    if(!str.includes(value[1])){
        num.push(value[1]);
    }
});
console.log(str);
console.log(num);


mergeData.push(headings);
var len = str.length;
for(var f =0; f<len;f++){
    mergeData.push(sortings(f));
}
function sortings(x){
    var tempr=[];
    for(var i = 0; i<num.length;i++){
        if(x == i){
            tempr.push(str[x]);
        }
        if(i % len-x==0){
            tempr.push(num[i]);
        }
    }
    return tempr;
}


//console.log(mergeData);

// console.log(pakcities);
console.table(mergeData);





// function saymbools(stocks){
//     return stocks.map(function(stock){
//         return stock.userName;
//     });
// }

// var datas = saymbools([
//     {userName: "Salman", userEmail: "salman@gmail.com", userPassword:"1234567"},
//     {userName: "Imtiaz", userEmail: "imtiaz@gmail.com", userPassword:"123456"},
//     {userName: "Farhan", userEmail: "farhan@gmail.com", userPassword:"12345"}
// ]);
// var array3=[];
// var dataof = JSON.stringify(datas);
// array3.push(dataof);
// console.log(array3);