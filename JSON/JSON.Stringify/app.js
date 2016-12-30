
var person = [{ 
    userName : "Imtiaz"}, 
    {userEmail : "Imtiaz@gmail.com"}, 
    {userPassword : 1234456691
}];

// array = JSON.stringify(array);
// var a =JSON.parse(array);
for(var i = 0 ;i < person.length;i++){
    for(var key in person[i]){
        var c = key;
        var b = person[i][key];
    }
    document.getElementById("display").innerHTML += b + "<br/>";
}
