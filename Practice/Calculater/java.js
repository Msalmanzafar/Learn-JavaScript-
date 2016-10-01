function Addfunction(){
    var x = "1st Number for Add.";
    var x1 = "1st";
    var Add1 = prompt(x,x1);

    var y = "(2nd Number for Add.";
    var y1 = "2nd";
    var Add2 = prompt(y,y1);

    var int = parseInt(Add1) + parseInt(Add2);
    document.getElementById("addition").innerHTML=  Add1 + " + " + Add2 +  " = " +  int;
}
function Subfunction(){
    var x = "1st Number for Subtraction.";
    var x1 = "1st";
    var Add1 = prompt(x,x1);

    var y = "(2nd Number for Subtraction.";
    var y1 = "2nd";
    var Add2 = prompt(y,y1);

    var int = parseInt(Add1) - parseInt(Add2);
    document.getElementById("subtraction").innerHTML=  Add1 + " - " + Add2 +  " = " +  int;
}
function Mulfunction(){
    var x = "1st Number for Multiply.";
    var x1 = "1st";
    var Add1 = prompt(x,x1);

    var y = "(2nd Number for Multiply.";
    var y1 = "2nd";
    var Add2 = prompt(y,y1);

    var int = parseInt(Add1) * parseInt(Add2);
    document.getElementById("multiplication").innerHTML=  Add1 + " x " + Add2 +  " = " +  int;
}
function Divfunction(){
    var x = "1st Number for Divide.";
    var x1 = "1st";
    var Add1 = prompt(x,x1);

    var y = "(2nd Number for Divide.";
    var y1 = "2nd";
    var Add2 = prompt(y,y1);

    var int = parseInt(Add1) / parseInt(Add2);
    document.getElementById("division").innerHTML=  Add1 + " / " + Add2 +  " = " +  int;
}
function Modfunction(){
    var x = "1st Number for Mod.";
    var x1 = "1st";
    var Add1 = prompt(x,x1);

    var y = "(2nd Number for Mod.";
    var y1 = "2nd";
    var Add2 = prompt(y,y1);

    var int = parseInt(Add1) % parseInt(Add2);
    document.getElementById("mod").innerHTML=  Add1 + " % " + Add2 +  " = " +  int;
}
