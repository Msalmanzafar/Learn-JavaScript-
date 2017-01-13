
// /*----------------DIGITAL------------------------------------------*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    if(h >=12 ){
        document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " PM";
    }
    if(h==0){
        h=12;
        document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " AM";
    }
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10){
        i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
}

/*------------------------ANALOG-------------------------------------------*/
setInterval(function(){
    var date = new Date();
    updateTime(date);
    updateClock(date);
},1000);

function updateClock(date){
    var sec = document.getElementById("sec-count").style;
     var min = document.getElementById("min-count").style;
      var hr = document.getElementById("hr-count").style;

      sec.transform = "rotate(" + date.getSeconds() * 6 +"deg)";
      min.transform = "rotate(" + date.getMinutes() * 6 +"deg)";
      hr.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) +"deg)";
}

function updateTime(date){
    var timeDiv = document.getElementById("time");
    // var time = "Time for Reference --- " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    // timeDiv.innerHTML = time;
}
