// 1. get the html button
const btn = document.getElementById('btn');

let i = 1;
// 2. function for change background color
 function chngBg(){
    var color = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
    console.log(`Background color: ${color}`);
    document.body.style.backgroundColor = color;
}

// 3. function for change Text color of button
function textColor(){
    var color = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
    console.log(`Text color: ${color}`);
    btn.style.color = color;
    if(i++ == 5){
    // adding remove EventListener
    btn.removeEventListener('click',textColor);
    }
}


// 3. add Eventlistener to the button
btn.addEventListener('click',chngBg);

// 4. add Eventlistener to the button for text color
btn.addEventListener('click',textColor);

// function for generating random color
function rndClr(){
return Math.ceil(Math.random() * 255);
}