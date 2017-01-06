

// // var pakCites = Object.values(cities);
// // console.log(pakCites.length);


// //------Student Object-----------------

// // var students = [
// //     {
// //         name: "Salman",
// //         grade1: 69,
// //         grade2: 78
// //     },
// //     {
// //         name: "Bilal",
// //         grade1: 59,
// //         grade2: 78
// //     },
// //     {
// //         name: "Farhan",
// //         grade1: 79,
// //         grade2: 57
// //     },
// //     {
// //         name: "Ali",
// //         grade1: 72,
// //         grade2: 67
// //     },
// //     {
// //         name: "tahir",
// //         grade1: 98,
// //         grade2: 90
// //     }
// // ];

// // var avgGrade = 70;
// // var result = students.map(function(student){
// //     var avrg = (student.grade1 + student.grade2)/2;
// //     if (avrg > avgGrade){
// //        return{
// //            name: student.name,
// //            pass: true

// //        };
// //     }else{
// //         return{
// //             name: student.name,
// //             pass: false
// //         };
// //     }
// // });

// // console.log(result);

// //------------------Object to array and array to string----

var headings = [];
var data = [];
var mergeData = [];
var pakcities = [];

// [["year", "karachi", "lahore", "multan"],['2015-12-1',1000,500,200]]

 var cities={
    karachi:[['2015-12-1',1000], ['2014-12-1',2000], ['2013-12-1',3000]],
    lahore:[['2015-12-1',500], ['2014-12-1',14000], ['2013-12-1',2600]],
    multan:[['2015-12-1',2], ['2014-12-1',700], ['2013-12-1',1700]]
};


headings.push('year');
for(key in cities){
headings.push(key);
data.push(cities[key]);
}

for (i=0 ; i< data.length; i++) {
 
    for(j=0; j<data[i].length; j++ ){

        if(typeof data[i][j] == "string"){
            mergeData[0]=data[i][j];
        } 
        else {
            mergeData.push(data[i][j]);
        }
    }
}
pakcities.push(headings,mergeData);

console.log(pakcities);
console.table(pakcities);


// var p = document.getElementsByTagName("p");
// var cont = p[2].innerHTML;
// console.log(cont);

