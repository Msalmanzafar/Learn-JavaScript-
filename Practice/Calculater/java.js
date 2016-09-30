function Addfunction(){
    var x = "1st Number for Add.";
    var x1 = "1st";
    var Add1 = prompt(x,x1);

    var y = "(2nd Nuber for Add.";
    var y1 = "2nd";
    var Add2 = prompt(y,y1);

    var int = parseInt(Add1) + parseInt(Add2);
    document.getElementById("addition").innerHTML=  Add1 + " + " + Add2 +  " = " +  int;
}
