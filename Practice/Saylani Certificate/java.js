alert("Thnaks For Watching");

var x = "Please Enter Your Name: "
var y = "Name";
var a = prompt(x,y);



var x1 = "Please Enter Your Roll No. "
var y1 = "Roll No";
var b = prompt(x1,y1);



var x2 = "Please Enter Your Father Name: "
var y2 = "Father Name";
var c = prompt(x2,y2);

var i = "Enter Your Percentage for HTML: "
var j = "HTML";
var d = prompt(i,j);
var HTML =parseInt(d);

if (HTML >= 90 && HTML < 100){
    var result= HTML + "% A+";
}
else if(HTML >= 80 && HTML < 90){
    var result= HTML + "% A";
}
else if(HTML >= 70 && HTML < 80){
    var result= HTML + "% B";
}
else if(HTML >= 60 && HTML < 70){
    var result= HTML + "% C";
}
else{
    var result= " Fail ";
}


var i1 = "Enter Your Percentage for CSS-1: "
var j1 = "CSS-1";
var e = prompt(i1,j1);
var css =parseInt(e);

if (css >= 90 && css < 100){
    var result2= css + "% A+";
}
else if(css >= 80 && css < 90){
    var result2= css + "% A";
}
else if(css >= 70 && css < 80){
    var result2= css + "% B";
}
else if(css >= 60 && css < 70){
    var result2= css + "% C";
}
else{
    var result2= " Fail ";
}

var i2 = "Enter Your Percentage for CSS-2: "
var j2 = "CSS-2";
var f = prompt(i2,j2);
var css2 =parseInt(f);

if (css2 >= 90 && css2 < 100){
    var result3= css2 + "% A+";
}
else if(css2 >= 80 && css2 < 90){
    var result3= css2 + "% A";
}
else if(css2 >= 70 && css2 < 80){
    var result3= css2 + "% B";
}
else if(css2 >= 60 && css2 < 70){
    var result3= css2 + "% C";
}
else{
    var result3= " Fail ";
}

var total1 = (((HTML + css + css2)/300)*100).toFixed(2);

if (total1 >= 90 && total1 < 100){
    var result4= total1 + "% A+";
}
else if(total1 >= 80 && total1 < 90){
    var result4= total1 + "% A";
}
else if(total1 >= 70 && total1 < 80){
    var result4= total1 + "% B";
}
else if(total1 >= 60 && total1 < 70){
    var result4= total1 + "% C";
}
else{
    var result4= " Fail ";
}

document.getElementById("name").innerHTML= a ;
document.getElementById("no").innerHTML= b ;
document.getElementById("father-name").innerHTML= c ;
document.getElementById("html-test").innerHTML=  result ;
document.getElementById("css-test").innerHTML=  result2 ;
document.getElementById("css2-test").innerHTML=  result3 ;


document.getElementById("total").innerHTML=  result4;
