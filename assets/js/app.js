let no = document.querySelector("#Count");
let Sub = document.querySelector("#Sub");
let Add = document.querySelector("#Add");
Add.addEventListener("click", function () {
    no.innerHTML = +no.innerHTML + 1;
});
Sub.addEventListener("click", function () {
    no.innerHTML = +no.innerHTML - 1;
});
// ====================================timer========================================
function updateTimer() {
    future = Date.parse("oct 2, 2023 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>:</span></div>' +
        '<div>' + h + '<span>:</span></div>' +
        '<div>' + m + '<span>:</span></div>' +
        '<div>' + s + '<span></span></div>';
}
setInterval('updateTimer()', 1000);
// hshdydydy
$('.slider').slick({

    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: '.pre',
    nextArrow: '.nxt',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick').slick({

    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: '.prev',
    nextArrow: '.next',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});