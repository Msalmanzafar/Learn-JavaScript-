alert("Thanks for Chosen");

var x = prompt("Where does the Pope live?");
 if (x === "Vatican") {
    alert("Correct!");
 }
 else{
	 alert("Wrong Answer!");
 }
 
 /*var scoreAvg = Math.round(2.7);
 alert(scoreAvg);
 
 var randomNumber = Math.random();
 alert(randomNumber);
 
 var bigDecimal = Math.random();
 var improvedNum = (bigDecimal * 6) + 1;
 var numberOfStars = Math.floor(improvedNum);
 alert("Big Decimal " + numberOfStars);
 
 var q = prompt("Enter your Age !");
 var num = Number(q);
 alert("Your Age is: "+num);
 
 var rightNow = new Date();
 alert(rightNow);
 
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 alert(nameOfToday);
 
 var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
 var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
 alert(msDiff);*/
 
 function tellTime() {
 var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 alert("Current time: "+ theHr + ":" + theMin);
 }
 alert(tellTime());