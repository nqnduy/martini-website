/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
    let header = $('.header'),
        btnMenu = $('.header__btnmenu'),
        screen = {
            mobile: 767,
            tablet: 991,
            desktop: 1199
        };

    // DETECT DEVICE
    function mobileDetect() {
        let md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile() != null || md.tablet() != null) {
            mobile = true
            tablet = true
        } else {
            mobile = false
            tablet = false
        }
    }
    mobileDetect();


    // WINDOW SCROLLING
    $(window).on('scroll', function () {

    })


    // INIT
    function init() {
        $('body').imagesLoaded()
            .progress({ background: true }, function (instance, image) { })
            .always(function (instance) {
                $('.loading').addClass('--hide')
            })
            .fail(function () {
                // console.log('all images loaded, at least one is broken');
            })
            .done(function (instance) {
                // console.log('all images successfully loaded');
            });
    }
    init();

})

let clientX, clientY;
let outerCursor = document.querySelector(".innerCursor");
let innerCursor = document.querySelector(".outerCursor");
let title = document.querySelector(".content__title-main");
let sub = document.querySelector(".content__title-sub");

console.log("title:", title);

let initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", function (e) {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    let render = () => {
        TweenMax.set(outerCursor, {
            x: clientX - outerCursor.clientWidth / 2,
            y: clientY - outerCursor.clientHeight / 2,
            delay: 0.08,
            ease: Power1.easeOut,
        });

        TweenMax.set(innerCursor, {
            x: clientX - innerCursor.clientWidth / 2,
            y: clientY - innerCursor.clientHeight / 2,
            delay: 0.2,
        });

        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};

initCursor();

// // hover state
function growOnHover() {
    title.addEventListener("mouseover", function () {
        TweenMax.to(innerCursor, 1, {
            width: "300px",
            height: "300px",
            background: "#fff",
            transition: "0.005s all",
            mixBlendMode: "difference",
        });
    });
}
title.addEventListener("mouseout", function () {
    TweenMax.to(innerCursor, 1, {
        width: "100px",
        height: "100px",
        background: "transparent",
        transition: "0.01s all",
        mixBlendMode: "normal",
    });
});

growOnHover();

var tl = gsap.timeline({delay: 0.4});
tl.to(title, { autoAlpha: 1, duration: 1.6 });
tl.from(title, { y: 110, stagger: 0.1, duration: 1 }, "-=0.2");
tl.to(sub, { autoAlpha: 1, duration: 0.5 }, "-=0.5");
tl.from(sub, { y: 80, duration: 1, stagger: 0.1 }, "-=0.5");
tl.play();

