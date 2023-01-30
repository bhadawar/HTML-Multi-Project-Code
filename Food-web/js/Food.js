// header scroll fixed

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}


// navbar click hide

let navBar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function (){
    navcollapse.classList.remove("show");
    })
    })

