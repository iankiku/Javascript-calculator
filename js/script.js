//======Todo
// --- Add backspace function
// --- % function

// ------------------
// grab input element 
const screen = document.getElementById('screen');

// get all btns
const btns = document.querySelectorAll('button');

// add click event to buttons
btns.forEach(function (e) {
    e.addEventListener('click', ()=>{
        setVal(e)
    })
});

var newValue;
screen.innerHTML = "0";

// main calc function
function setVal(e) {
    // set btn value to newValue
    newValue = e.value;
    if (newValue == '='){

        screen.innerHTML = eval(screen.innerHTML); //use eval()function
    }else if (newValue == "C"){
        screen.innerHTML= '0';  //incase c is passed reset
    }else{
        if (screen.innerHTML == '0' ){
            screen.innerHTML = newValue;
        }else{
            screen.innerHTML += newValue; //append new value
        }
    }
}
