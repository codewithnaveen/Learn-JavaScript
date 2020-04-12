// 1. get the html button
const btn = document.getElementById('btn');


// 2. add click event handler to the button
btn.onclick = function(){
    var color = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
    console.log(color);
    document.body.style.backgroundColor = color;
}

// btn.onclick = chngBg;
// function chngBg(){
//     document.body.style.backgroundColor = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
// }

// function for generating random color
function rndClr(){
return Math.ceil(Math.random() * 255);
}