
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
const frame = document.querySelector(".frame");
const overlayPath = document.querySelector(".overlay__path");
const menuWrap = document.querySelector(".menu-wrap");
const menuItems = document.querySelectorAll(".menu__item");
const openMenuBtn = document.querySelector("button.button-menu");
const closeMenuBtn = document.querySelector("button.button-close");
const title = {
    main: document.querySelector(".content__title-main"),
    sub: document.querySelector(".content__title-sub"),
};

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
    title.main.addEventListener("mouseover", function () {
        TweenMax.to(innerCursor, 1, {
            width: "300px",
            height: "300px",
            background: "#fff",
            transition: "0.005s all",
            mixBlendMode: "difference",
        });
    });
    openMenuBtn.addEventListener("mouseover", function () {
        TweenMax.to(innerCursor, 1, {
            width: "64px",
            height: "64px",
            transition: "0.005s all",
        });
    });
}
title.main.addEventListener("mouseout", function () {
    TweenMax.to(innerCursor, 1, {
        width: "64px",
        height: "64px",
        background: "transparent",
        transition: "0.01s all",
        mixBlendMode: "normal",
    });
});

growOnHover();

var tl = gsap.timeline({delay: 0.4});
tl.to(title.main, { autoAlpha: 1, duration: 1.6 });
tl.from(title.main, { y: 110, stagger: 0.1, duration: 1 }, "-=0.2");
tl.to(title.sub, { autoAlpha: 1, duration: 0.5 }, "-=0.5");
tl.from(title.sub, { y: 80, duration: 1, stagger: 0.1 }, "-=0.5");
tl.play();




let isAnimating = false;

const openMenu = () => {

    if (isAnimating) return;
    isAnimating = true;
    gsap.timeline({
        onComplete: () => (isAnimating = false),
    })
        .set(overlayPath, {
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
            overlayPath,
            {
                duration: 0.8,
                ease: "power4.in",
                attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
            },
            0
        )
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
            onComplete: () => {
                frame.classList.add("frame--menu-open");
                menuWrap.classList.add("menu-wrap--open");
            },
        })
        .to(
            [title.main, title.sub],
            {
                duration: 0.8,
                ease: "power3.in",
                y: -200,
                stagger: 0.05,
            },
            0.2
        )
        .set(menuItems, {
            opacity: 0,
        })
        .set(overlayPath, {
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 0 V 50 Q 50 0 100 100 V 0 z" },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        })
        .to(
            menuItems,
            {
                duration: 1.1,
                ease: "power4",
                startAt: { y: 150 },
                y: 0,
                opacity: 1,
                stagger: 0.05,
            },
            ">-=1.1"
        );
}
const closeMenu = () => {
    if (isAnimating) return;
    isAnimating = true;
    gsap.timeline({
        onComplete: () => (isAnimating = false),
    })
        .set(overlayPath, {
            attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        })
        .to(
            overlayPath,
            {
                duration: 0.8,
                ease: "power4.in",
                attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
            },
            0
        )
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2",
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
            onComplete: () => {
                frame.classList.remove("frame--menu-open");
                menuWrap.classList.remove("menu-wrap--open");
            },
        })
        // now reveal
        .set(overlayPath, {
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(overlayPath, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
        })
        .to(overlayPath, {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        // title elements
        .to(
            [title.main, title.sub],
            {
                duration: 1.1,
                ease: "power4",
                y: 0,
                stagger: -0.05,
            },
            ">-=1.1"
        )
        // menu items translate animation
        .to(
            menuItems,
            {
                duration: 0.8,
                ease: "power2.in",
                y: 100,
                opacity: 0,
                stagger: -0.05,
            },
            0
        );
};



openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
