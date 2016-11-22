
function dateFunction(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    // If Hours greater then or equal to " 0 " OR Hours less then " 10 ".
    if(hr <= 0 || hr < 10){
        hr = "0" + hr;
    }
    // If Minutes greater then or equal to " 0 " OR Minutes less then " 10 ".
    if (min <= 0 || min < 10){
        min = "0" + min;
    }
    // If Seconds greater then or equal to " 0 " OR Seconds less then " 10 ".
    if (sec <= 0 || sec< 10){
        sec = "0" + sec;
    }
    if(hr >= 12){
        document.getElementById("demo").innerHTML= hr + " : " + min + " : " + sec +" PM";
    }
    else{
        if(hr == 0){
            hr=12; 
        }
        document.getElementById("demo").innerHTML= hr + " : " + min +" : " + sec + " AM";
    }
    var t = setTimeout(dateFunction, 500);
}
