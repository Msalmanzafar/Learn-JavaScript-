alert("Thanks for Chosen");

var question = "Enter Your Name: ";
var defaultAnswer = "Sky User";
var spec = prompt(question, defaultAnswer);
alert("Thanks " + spec);

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var cityToCheck = "Cheyenne";
var matchFound = "no";
for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
	 matchFound = "yes";
 alert(cityToCheck + " It's one of the cleanest cities");
 }
 else if(matchFound === "no"){
	 alert("It's not on the list");
 }
 }
 