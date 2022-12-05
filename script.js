alert("If you see this project in night it show in dark mode and if you see in day it show light mode :)")
var clock = document.querySelector('.clock');
var btn = document.querySelector('.btn');
var body = document.querySelector('body');
clock.addEventListener('load', myFunc())
function myFunc() {    
    //Time function 
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    //date function 
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();


    if(h == 0) {
       h = 12;
    }



    if (h > 12) {
        h = h - 12;
        session = "PM";
    }


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session + "<br> <br>" + dd + "/" + mm + "/" + yyyy;
    
    clock.innerHTML = time;

    setTimeout(myFunc, 1000)
}
myFunc();

//custome dark/light mode


function lightMode() {
    var icon = document.querySelector('.fa-sun');
    icon.classList.toggle('dark-text')
    icon.classList.toggle('fa-moon');
    btn.classList.toggle('newstyle');
    body.classList.toggle('bgwhite');
    clock.classList.toggle('newstyle');
}

//Auto dark/light mode


var date = new Date();
var h = date.getHours();
if(h === 7) {
    lightMode();
}
if(h === 8) {
    lightMode();
}
if(h === 9) {
    lightMode();
}
if(h === 10) {
    lightMode();
}
if(h === 11) {
    lightMode();
}
if(h === 12) {
    lightMode();
}
if(h === 13) {
    lightMode();
}
if(h === 14) {
    lightMode();
}
if(h === 15) {
    lightMode();
}
if(h === 16) {
    lightMode();
}
if(h === 17) {
    lightMode();
}
if(h === 18) {
    lightMode();
};
const age = 74;
if (age < 18) {
    console.log("You are not 18+")
}