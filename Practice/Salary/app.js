window.onload=function(){
    document.getElementById("userInput").focus();
}

function userSalary() {
    var userInput = document.getElementById("userInput").value;
    if (userInput == "" || userInput == " " || userInput != userInput/1){
        alert("Please Write Your Salary..!");
    }
    else{
        document.getElementById("basic").innerHTML= userInput;
        var salaryRent = userInput * 40 /100;
        document.getElementById("rent").innerHTML= salaryRent;
        var userHouse = userInput * 20 /100;
        document.getElementById("house").innerHTML= userHouse ;
        var totalIncome = +userInput + salaryRent + userHouse ;
        document.getElementById("net").innerHTML= totalIncome ;
    }
}