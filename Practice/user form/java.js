alert("Thanks For Chosen");

var a = "Welcome ";
var b = "Enter Your Name";
var c = "Name"
var person = prompt(b , c);

var b0 = "Your Name is: ";

var a1 = "Your Father Name is: ";
var b1 = "Enter Your Father Name";
var c1 = "Name"
var person0 = prompt(b1 , c1);

var a2 = "Your School Name is: ";
var b2 = "Enter Your School Name";
var c2 = "School Name"
var person1 = prompt(b2 , c2);

var a3 = "Your Age is:      ";
var b3 = "Enter Your Age";
var c3 = "Your Age"
var person2 = prompt(b3 , c3);

var a4 = "You have Brother/Sister is: ";
var b4 = "How Many Brothers You have ?";
var c4 = "Brother"
var person3 = prompt(b4 , c4);
var b41 = "How Many Sisters You have ?";
var c41 = "Sister"
var person31 = prompt(b41 , c41);
var convert = parseInt(person3)+ parseInt(person31);

document.getElementById("demo").innerHTML = 
"<h1>" + a + person +"</h1>" +"<br/>" + 
"<p>"+ "<strong>"+ b0 + "</strong>" + "<span>" + person + "</span>" + "</p>" + 
"<p>"+ "<strong>"+ a1 + "</strong>" + "<span>" + person0 + "</span>" + "</p>" +
"<p>"+ "<strong>"+ a2 + "</strong>" + "<span>" + person1 + "</span>" + "</p>" +
"<p>"+ "<strong>"+ a3 + "</strong>" + "<span>" + person2 + "</span>" + "</p>" +
"<p>"+ "<strong>"+ a4 + "</strong>" + "<span>" + convert + "</span>" + "</p>" ;