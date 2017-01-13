function dateFunction(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var day = time.getDay();
    
    // day conditions for converting numbers into string...
    if (day == 0){
        day = "Sun";
    }
    else if (day == 1){
        day = "Mon";
    }
    else if (day == 2){
        day = "Tue";
    }
    else if (day == 3){
        day = "Wed";
    }
    else if (day == 4){
        day = "Thu";
    }
    else if (day == 5){
        day = "Fri";
    }
    else if (day == 6){
        day = "Sat";
    }
    else{
        day = "day";
    }

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
        document.getElementById("time").innerHTML= hr + " : " + min + " : " + sec +" PM " + "<span>" + day + "</span>";
    }
    else{
        if(hr == 0){
            hr=12; 
        }
        document.getElementById("time").innerHTML= hr + " : " + min +" : " + sec + " AM " + "<span>" + day + "</span>";
    }
    var t = setTimeout(dateFunction, 500);
}


