var newArray=[];


function addnewList(){
    var listItem = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    listItem.innerText = inputValue;
    newArray.push(listItem);
    if (inputValue == "" || inputValue == " " ){
        alert("Please Write Something..!");
    }
    else{
        var text = document.getElementById("todoList");
        text.appendChild(listItem);
    }   
}
var  newAction = document.getElementById("butn");
newAction.onclick = addnewList;

var remove = document.getElementById("remove");
remove.onclick = removeAll;

function removeAll(){
    if (newArray.length == 0){
        alert("Not have any List");
    }
    else
        document.getElementById("todoList").innerHTML="";
        newArray=[];
}

window.onload = function() {
  document.getElementById("todoInput").focus();
};