// 1. get the html element div
const divs = document.querySelectorAll('div');


// 2. add click event handler to the button
for(i = 0;i < divs.length;i++){
divs[i].onclick = function(event){
    console.log(event);
    var color = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
    console.log(color);
    event.target.style.backgroundColor = color;
}
}

// OR

// function chngBg(event){
//         console.log(event);
//         var color = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
//         console.log(color);
//         event.target.style.backgroundColor = color;
//     }

// 2. we can use addEventListener mechanisam

// for(i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click',chngBg);
// }



function rndClr(){
return Math.ceil(Math.random() * 255);
}