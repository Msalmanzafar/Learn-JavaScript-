// function dateFunction(){
//     var time = new Date();
//     var hr = time.getHours();
//     var min = time.getMinutes();
//     var sec = time.getSeconds();
//     var day = time.getDay();
    
//     // day conditions for converting numbers into string...
//     if (day == 0){
//         day = "Sun";
//     }
//     else if (day == 1){
//         day = "Mon";
//     }
//     else if (day == 2){
//         day = "Tue";
//     }
//     else if (day == 3){
//         day = "Wed";
//     }
//     else if (day == 4){
//         day = "Thu";
//     }
//     else if (day == 5){
//         day = "Fri";
//     }
//     else if (day == 6){
//         day = "Sat";
//     }
//     else{
//         day = "day";
//     }

//     // If Hours greater then or equal to " 0 " OR Hours less then " 10 ".
//     if(hr <= 0 || hr < 10){
//         hr = "0" + hr;
//     }
//     // If Minutes greater then or equal to " 0 " OR Minutes less then " 10 ".
//     if (min <= 0 || min < 10){
//         min = "0" + min;
//     }
//     // If Seconds greater then or equal to " 0 " OR Seconds less then " 10 ".
//     if (sec <= 0 || sec< 10){
//         sec = "0" + sec;
//     }
//     if(hr >= 12){
//         document.getElementById("time").innerHTML= hr + " : " + min + " : " + sec +" PM " + "<span>" + day + "</span>";
//     }
//     else{
//         if(hr == 0){
//             hr=12; 
//         }
//         document.getElementById("time").innerHTML= hr + " : " + min +" : " + sec + " AM " + "<span>" + day + "</span>";
//     }
//     var t = setTimeout(dateFunction, 500);
// }


// var aray = ["salman","ahmed","niaz"];



function newUser(){
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(name == ''|| name == " "){
        var mes = "Please Enter Your Name..!";
        document.getElementById("nameCheck").className="wrong";
        document.getElementById("nameCheck").innerHTML=mes;
    }
    else{
        document.getElementById("nameCheck").style.display="none";
    }
    if(email == ''|| email == " "){
        var mes = "Please Enter Your Email..!";
        document.getElementById("nameEmail").className="wrong";
        document.getElementById("nameEmail").innerHTML=mes;
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        var mes = "Please Enter Valid Email..! (example@gmail.com)";
        document.getElementById("checkEmail").className="render";
        document.getElementById("checkEmail").innerHTML= mes;
    }
    else{
        document.getElementById("nameEmail").style.display="none";
    }
    if(password == '' || password == " "){
        var mes = "Please Enter Your Password..!";
        document.getElementById("namePassword").className="wrong";
        document.getElementById("namePassword").innerHTML=mes;
    }
    else{
        document.getElementById("namePassword").style.display="none";
    }
}