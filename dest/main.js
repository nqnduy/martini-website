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


    // ADD BACKGROUND HEADER SCROLLING
    function toggleBgHeaderScroll() {
        let scroll = window.pageYOffset;
        if (scroll > header.height()) {
            header.addClass('--bg-white')
        } else {
            header.removeClass('--bg-white')
        }
    }
    toggleBgHeaderScroll();


    // WINDOW SCROLLING
    $(window).on('scroll', function () {
        toggleBgHeaderScroll()
    })


    // ANIMATION LI PARENT MENU
    let tlMenu = gsap.timeline()
    tlMenu.fromTo('.nav .nav__menu > li', { duration: 0.5, x: 60, opacity: 0 },
        { duration: 0.5, x: 0, opacity: 1, stagger: 0.03, delay: 0.3 })
        .from('.nav__social', { opacity: 0, x: 60, duration: 0.5 }, '=-0.4')
    // BUTTON MENU CLICKED
    function btnMenuClicked() {
        btnMenu.on('click', function () {
            $(this).toggleClass('active')
            $('body').toggleClass('navshow')
            if ($('body').hasClass('navshow')) {
                tlMenu.restart(0.3)
            }
        })
    }
    btnMenuClicked();



    // ITEM MENU CLICKED
    function itemMenuClicked() {
        let itemMenu = $('.nav li a')
        itemMenu.on('click', function (e) {
            if ($(this).parent().find('ul').length) {
                e.preventDefault()
                $(this).parent().find('ul').slideToggle(300);
                $(this).parent().toggleClass('active')
                if ($(this).parent().hasClass('active')) {
                    // ANIMATION LI PARENT MENU
                    let tlSubMenu = gsap.timeline()
                    itemSubMenu = $(this).parent().find('li')
                    tlSubMenu.fromTo(itemSubMenu, { duration: 0.5, x: 40, opacity: 0 },
                        { duration: 0.5, x: 0, opacity: 1, stagger: 0.05, delay: 0.1 })
                }
            }
        })
    }
    itemMenuClicked();


    // HIDE MENU 
    function hideMenuClickBody() {
        let overlay = $('.overlay')
        overlay.on('click', function () {
            btnMenu.removeClass('active')
            $('body').removeClass('navshow')
        })
    }
    hideMenuClickBody();

    // SLIDER PARTNERS
    function sliderPartners() {
        let $slider = $('.partners__slider-list'),
            $btnPrev = $('.partners__slider .button.--prev'),
            $btnNext = $('.partners__slider .button.--next')
        if ($slider.length) {
            $slider.owlCarousel({
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 800,
                slideTransition: 'cubic-bezier(0.59, 0.29, 0.15, 0.93)',
                responsive: {
                    300: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 5
                    }
                }
            });

            // next
            $btnNext.on('click', function () {
                $slider.trigger('next.owl.carousel');
            });
            // prev
            $btnPrev.on('click', function () {
                $slider.trigger('prev.owl.carousel');
            });
        }
    }
    sliderPartners();

    // SLIDER TESTIMONIALS
    function sliderTestimonials() {
        let $slider = $('.testimonials__slider'),
            $btnPrev = $('.testimonials__controls .button.--prev'),
            $btnNext = $('.testimonials__controls .button.--next')
        if ($slider.length) {
            $slider.owlCarousel({
                loop: true,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 1700,
                slideTransition: 'cubic-bezier(0.59, 0.29, 0.15, 0.93)',
                items: 1
            });
            $btnNext.on('click', function () {
                $slider.trigger('next.owl.carousel');
            });
            $btnPrev.on('click', function () {
                $slider.trigger('prev.owl.carousel');
            });
        }
    }
    sliderTestimonials();


    // ABOUT PAGE - TEAM MEMBERS CLICKED
    function teamMembersClicked() {
        let member = $('.teammembers__list .itemmember .itemmember__front');
        member.on('click', function () {
            $(this).closest('.itemmember').addClass('active')
        })
    }
    teamMembersClicked()

    function teamMembersClose() {
        let btnClose = $('.teammembers__list .itemmember .itemmember__back-close');
        btnClose.on('click', function () {
            $(this).closest('.itemmember').removeClass('active')
        })
    }
    teamMembersClose();


    // CONTACT CHECKBOX SERVICES
    // function checkClickedContact() {
    //     let itemCheck = $('.formgroupcheck .formcheck input'),
    //         formServiceChecked = $('.formservices__more-detail');
    //     itemCheck.on('click', function () {
    //         let id = $(this).data('form')
    //         formServiceChecked.eq(id).toggleClass('active')
    //     })
    // }
    // checkClickedContact();



    // ANIMATION PATH SERVICES HOMEPAGE
    function animationDrawPath() {
        let path = document.querySelector(".solidline");
        if (typeof (path) != 'undefined' && path != null) {
            let length = path.getTotalLength();
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;
        }
    }
    animationDrawPath()



    // INIT WOW JS ANIMATION
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: false,       // act on asynchronously loaded content (default is true)
            callback: function (section) {
                if ($(section).hasClass('stat')) {
                    let number = $('[data-count]')
                    countNumber(number)
                }
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();


    //=============== ABOUT PAGE ================== //

    // SCROLL MAGIC HERO 
    function animationScrollHeroAbout() {
        let overlayHeroAbout = $('.heroabout .hero__overlay'),
            headingHeroAbout = $('.heroabout .hero__content-heading'),
            contentHeroAbout = $('.heroabout .hero__content-des'),
            tlHeroAbout = new gsap.timeline()

        tlHeroAbout.from(overlayHeroAbout, { opacity: 0.4 })
            .from(headingHeroAbout, { y: 80 }, '=-0.5')
            .from(contentHeroAbout, { opacity: 0, y: 200 }, '=-0.5');


        let controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
            duration: 2000,
            offset: 40
        })
            .setTween(tlHeroAbout)
            .setPin('.heroabout')
            .addTo(controller);
    }
    animationScrollHeroAbout();


    // COUNT UP NUMBER
    function countNumber(el) {
        el.each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
    }



    // REACT ANIMATION CONTACT MODEL EGG
    function reactAnimationContactModelEgg() {
        let modelContact = document.querySelector('#contact__model-egg')
        if (typeof (modelContact) != 'undefined' && modelContact != null) {
            let anim = lottie.loadAnimation({
                container: document.querySelector('#contact__model-egg'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'model/egg_rest_state.json',
            });

            let modelContactWrap = document.querySelector('.contact__model');

            anim.goToAndStop(100, true);
            modelContactWrap.addEventListener("mouseenter", () => {
                anim.goToAndPlay(100, true);
            })
        }
    }




    // INIT
    function init() {
        $('body').imagesLoaded()
            .progress({ background: true }, function (instance, image) { })
            .always(function (instance) {
                setTimeout(function () {
                    $('.loading').addClass('--hide')
                }, 200)
                reactAnimationContactModelEgg()
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