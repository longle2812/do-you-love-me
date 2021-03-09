 window.onload= init ();
// document.getElementById("yes").addEventListener("click", showalert());
// document.getElementById("no").addEventListener("click", flyaway());}

function showalert() {
    alert("<3");
}

function flyaway() {
    let min = 1;
    let max1 = window.innerHeight * 0.9;
    let max2 = window.innerWidth * 0.9;
    let width = getRandom(min, max2);
    let height = getRandom(min, max1);
    document.getElementById("no").style.left =  width + "px";
    document.getElementById("no").style.top =  height + "px";
}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function init () {
    document.getElementById("no").style.position = "relative";
}