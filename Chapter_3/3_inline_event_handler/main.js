function chngBg() {
    var color = `rgb(${rndClr()}, ${rndClr()}, ${rndClr()})`;
    console.log(color);
    document.body.style.backgroundColor = color;
}

// function for generating random color
function rndClr() {
    return Math.ceil(Math.random() * 255);
}