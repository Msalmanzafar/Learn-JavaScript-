var personData = [
    {userName: "salman"},
    {userEmail: "salman@gmail.com"},
    {userAddress: "stadium"},
    {userStatus: "Employee"}
];

// var data = JSON.stringify(personData);
// document.write("<h3>"+data+"</h3>");

// var dataperson = JSON.parse(data);
// document.write(dataperson);
/*---------------------Through A if-else----------------------*/
for(var i =0; i<personData.length; i++){
    if(i==0){
        console.log(personData[i].userName);
    }
    else if (i == 1){
        console.log(personData[i].userEmail);
    }
    else if (i == 2){
        console.log(personData[i].userAddress);
    }
    else if (i == 3){
        console.log(personData[i].userStatus);
    }
}

/*---------------------Through A if-else----------------------*/
for(var i = 0; i<personData.length;i++){
    for(var key in personData[i]){
        var dataKey = personData[key];
        var dataValue = personData[i][key];
    }
    document.write("<h1>"+dataValue+"</h1>");
}
