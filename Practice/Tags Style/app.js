document.getElementById("na").style.color="darkcyan"; //h1 Using by id
document.getElementsByTagName("h1")[0].style.fontFamily="arial"; //h1 Using by (TagName)key.

document.getElementById("na").style.textDecoration="underline"; //h1 Using by id

//Using javascript apply styling on child tags

var Div = document.getElementById("myDiv");
var tag = Div.getElementsByTagName("h3");
var colo = ["red","green","blue"];
for(var i =0 ; i<colo.length ; i++){
    tag[i].style.color = colo[i];
}

// var secondDiv = document.getElementById("secondDiv");
// var heading = secondDiv.getElementsByTagName("h4");
// var array=[];
// for (var j = 0; j < heading.length;j++){
//     array[j] = heading[j].innerText;
// }
// for (var k = 0; k < heading.length;k++){
//     heading[k].style.color=array[k];
// }

var secondDiv = document.getElementById("secondDiv");
var heading = secondDiv.getElementsByTagName("h4");
for (var k = 0; k < heading.length;k++){
    var c = heading[k].innerText;
    heading[k].style.color = c;

    var num ="";
    for(var j=c.length-1;j>=0;j--){
        num = num + c[j];
    }
    heading[k].innerText = num;
}


// var name= "bilal";
// var num="";

// for(var i = name.length-1 ; i>=0 ;i--){
//      num = num + name[i];
// }
// alert(num);
