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
    a.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })
})


// hvbdhvhevv

const $left = $(".left");
const $gl = $(".gallery");
const $gl2 = $(".gallery2");
const $photosCounterFirstSpan = $(".photos-counter span:nth-child(1)");

$gl2.on("init", (event, slick) => {
    $photosCounterFirstSpan.text(`${slick.currentSlide + 1}/`);
    $(".photos-counter span:nth-child(2)").text(slick.slideCount);
});

$gl.slick({
    rows: 0,
    slidesToShow: 2,
    arrows: false,
    draggable: false,
    useTransform: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                vertical: true
            }
        }
    ]
});

$gl2.slick({
    rows: 0,
    useTransform: false,
    prevArrow: ".arrow-left",
    nextArrow: ".arrow-right",
    fade: true,
    asNavFor: $gl
});

function handleCarouselsHeight() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const gl2H = $(".gallery2").height();
        $left.css("height", gl2H);
    } else {
        $left.css("height", "auto");
    }
}

$(window).on("load", () => {
    handleCarouselsHeight();
    setTimeout(() => {
        $(".loading").fadeOut();
        $("body").addClass("over-visible");
    }, 300);
});

$(window).on(
    "resize",
    _.debounce(() => {
        handleCarouselsHeight();
    }, 200)
);

$(".gallery .item").on("click", function () {
    const index = $(this).attr("data-slick-index");
    $gl2.slick("slickGoTo", index);
});

$gl2.on("afterChange", (event, slick, currentSlide) => {
    $photosCounterFirstSpan.text(`${slick.currentSlide + 1}/`);
});




// slick slider

$(document).ready(function() {
    $(".slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 700,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  