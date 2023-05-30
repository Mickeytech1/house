
// let banner = document.getElementsByClassName("banner-main")
let banner = document.querySelector(".banner-main")
// let Home=document.getElementsByClassName("homeLink")
// let Bedroom = document.getElementsByClassName("bedLink")
// let Dining = document.getElementsByClassName("dinLink")
// let Kitchen = document.getElementsByClassName("kitLink")
const menu = document.querySelector('.menu-cont')
const content = document.querySelector('.menu-content')
const navButton = document.getElementById("nav-button");

// homeLink.onclick=function(){
//     banner.style.backgroundImage=
//     "url(./good.jpeg)";
//     // homeLink.innerHTML ="homeLink";

// }
let list = document.getElementById('list')
let menbar = document.getElementById('menu-bar')

console.log(banner.classList)
function kitchenHandler() {
   banner.classList = "banner-kitchen"
   console.log(banner.classList)
}

function bedroomHandler() {
    banner.classList = "banner-bedroom"
    console.log(banner.classList)
 }

 function dinningHandler() {
    banner.classList = "banner-dinning"
    console.log(banner.classList)
 }

 function backyardHandler() {
    banner.classList = "banner-backyard"
    console.log(banner.classList)
 }


 function homeHandler() {
    banner.classList = "banner-main"
    console.log(banner.classList)
 }


