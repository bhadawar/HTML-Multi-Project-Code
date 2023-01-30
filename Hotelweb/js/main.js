// header scrolled:
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
    nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    } 
}

// header scrolled exit:

// nav hide :
 let navBar = document.querySelectorAll(".nav-link");
 let navCollapse = document.querySelector(".navbar-collapse.collapse");
 navBar.forEach(function(a){
a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
})
 })
// nav hide  exit:

// swipper slide:
var Swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
    });
// swipper slide exit:

// counter start:
document.addEventListener("DOMcontentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end  - start,
        increment = end > start ? 1 : -1,
        step = math.abs(math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1", 0 , 2145, 3000);
    counter("count2", 100 , 3255, 2500);
    counter("count3", 0 , 1400, 3000);
    counter("count4", 0 , 7158, 3000);
});
// counter exit:


// our partner swiper:
var swiper = new swiper(".our-partner", {
    slidesperview: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesperview: 5, 
            spaceBetween: 10, 
        },
        '767': {
            slidesperview: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesperview: 2,
            spaceBetween: 8,
        },
        
    },
}); 
// our partner swiper exit:
