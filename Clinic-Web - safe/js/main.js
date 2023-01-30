// scrolled header fixed 

let nav = document.querySelector(".navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}



// auto close menu apply js

let navBar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function (){
    navcollapse.classList.remove("show");
    })
    })