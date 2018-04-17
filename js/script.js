//  Todo
// --- Add backspace function
// --- % function

// ------------------

// grab element input 
var screen = document.getElementById('screen');
// console.log(screen.value);
// var btnVal = document.querySelector('input').value;

// get all btns
var btns = document.querySelectorAll('button');

// add click event to buttons
btns.forEach(function (e) {
    // this.addEventListener('click', setInput);
    e.addEventListener('click', ()=>{
        // console.log('you clicked', e.value)

        setVal(e)
    })
   
    // console.log(newVal)
});



var newValue;
screen.innerHTML = "0";

// main function
function setVal(e) {
    // set btn value to newValue
    newValue = e.value;
    if (newValue == '='){
        // calculate
        screen.innerHTML = eval(screen.innerHTML);
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

