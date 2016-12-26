
var array = [];
// function save(){
//     localStorage.setItem('FName','Salman');
//     localStorage.setItem('LName','Zafar');
// }

// function loadStorage(){
//     var F = localStorage.getItem('FName');
//     var L = localStorage.getItem('LName');
//     array.push(F);
//     array.push(L);
//     document.getElementById("name").innerHTML= "<h3>" + F + " " + L + "</h3>";
// }

// function userArray(){
//     localStorage.clear();
// }

// function save(){
//     localStorage.setItem('FName','Salman');
//     localStorage.setItem('LName','Zafar');
// }



/*---------------------------For Name-------------------------------------------------*/
function checkName(){
    var name = document.getElementById("name").value;
    if (!isNaN(name) || name == ""){
        var mes = "Please enter your Name...!";
        document.getElementById("checkName").className="render";
        document.getElementById("checkName").innerHTML= mes;
    }
    else{
        var span = document.getElementById("checkName");
        span.style.display="none";
        userForm();
    }
        
}
/*-------------------------------For Email-------------------------------------------*/
function checkEmail(){
    var email = document.getElementById("email").value;
    if (email == ""){
        var mes = "Please enter your email...!";
        document.getElementById("checkEmail").className="render";
        document.getElementById("checkEmail").innerHTML= mes;
    }
    else{
        var span = document.getElementById("checkEmail");
        span.style.display="none";
        userForm();
    }
}
/*--------------------------------For Password--------------------------------------------*/
function checkPassword(){
    var password = document.getElementById("password").value;
    if (password == ""){
        var mes = "Please enter your password...!";
        document.getElementById("checkPassword").className="render";
        document.getElementById("checkPassword").innerHTML= mes;
    }
    else if(password < 8){
        var mes = "Please enter 8 number...!";
        document.getElementById("checkPassword").className="render";
        document.getElementById("checkPassword").innerHTML= mes;
    }
    // else if(password >= 12){
    //     var mes = "Please enter less than 12 number...!";
    //     document.getElementById("checkPassword").className="render";
    //     document.getElementById("checkPassword").innerHTML= mes;
    // }
    else{
        var span = document.getElementById("checkPassword");
        span.style.display="none";
        userForm();
    }
}
function userForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    localStorage.setItem('UserName',name);
    localStorage.setItem('UserEmail',email);
    localStorage.setItem('Password',password);
    
}