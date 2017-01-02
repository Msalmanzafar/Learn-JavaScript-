
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

// window.onload=function(){
//     document.getElementById("name").focus();
// }


function keyPress(){
    if (event.keyCode == '13') {
        userForm();
    }
}


/*---------------------------For Name-------------------------------------------------*/
function checkName(){
    
    var name = document.getElementById("name").value;
    if (!isNaN(name) || name == ""){
        var mes = "Please Enter Your Name...!";
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
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var email = document.getElementById("email").value;
    if (email == ""){
        var mes = "Please Enter Your Email...!";
        document.getElementById("checkEmail").className="render";
        document.getElementById("checkEmail").innerHTML= mes;
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        var mes = "Please Enter Valid Email..! (example@gmail.com)";
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
        var mes = "Please Enter Your Password in Digits...!";
        document.getElementById("checkPassword").className="render";
        document.getElementById("checkPassword").innerHTML= mes;
    }
    else if(password.length <= 7){
        var mes = "Please Enter Your 8 Digits Or Mores...!";
        document.getElementById("checkPassword").className="render";
        document.getElementById("checkPassword").innerHTML= mes;
    }
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
    if(name == ""){
        checkName();
    }
    else if(email == ""){
        checkEmail();
    }
    else if (password == ""){
        checkPassword();
    }else{
        var newUser = {
            userName: name,
            userEmail: email,
            userPassword: password
        }
        array.push(newUser);
        localStorage.setItem('User-Name',name);
        localStorage.setItem('User-Email',email);
        localStorage.setItem('User-Password',password);
        sweetAlert("Done", "Thanks For Sign Up..!", "success",function(){
            window.location.href = ('./login.html');
        });
    }
    console.log(array);
    var userData= JSON.stringify(array);
    console.log(userData);
    
}

function signIn(){
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var infoEmail = localStorage.getItem('User-Email');
    var infoPassword = localStorage.getItem('User-Password');
    if(userEmail === infoEmail && userPassword === infoPassword){
        window.location.href =('./index.html');
    }
    else{
        sweetAlert("Oops...", "Something went wrong!", "error");    
    }
    
}

