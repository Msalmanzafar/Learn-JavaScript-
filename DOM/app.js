
 // var p = document.getElementsByTagName("p");
 // var cont = p[2].innerHTML;
 // console.log(cont);



//------target any parentNode or childNode---------------------------

// var kidNode = document.getElementById("div2");
// var pNode = kidNode.parentNode;
// pNode.style.background="blue";

//  var parent = document.getElementById("div1");
//  var target = parent.parentNode;
//  nName = target.nodeName;
// console.log(nName);

//  var parent = document.getElementById("p");
//  var target = parent.parentNode;
//   var nTextContent = target.nodeName;
//   console.log(nTextContent);

// var target = document.getElementById("div1");
// target.setAttribute("class", "special");
// var check = target.getAttribute("class");
// console.log(check); 

//------------target any childNodes(only) using for-loop-------------------------
// var d = document.getElementById("div1");

//  var pCounter = 0;
//  for (var i = 0; i < d.childNodes.length; i++) {
//     if (d.childNodes[i].nodeType === 1 ) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "actually am in.";
//         break;
//     }
//  }