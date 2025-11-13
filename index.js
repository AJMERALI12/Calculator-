const display = document.getElementById("display");
const keys=document.getElementById("keys");
function appendToDisplay(input){
    display.value += input;
}


function backspace() {
      display.value = display.value.slice(0, -1); // ← यह है back button की command
    }
function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}
