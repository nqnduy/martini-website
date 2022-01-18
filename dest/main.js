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


    // BUTTON MENU CLICKED
    function btnMenuClicked() {
        btnMenu.on('click', function () {
            $(this).toggleClass('active')
            $('body').toggleClass('navshow')
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
                    992: {
                        items: 6
                    },
                    1200: {
                        items: 10
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

    // INIT
    function init() {
        $('body').imagesLoaded()
            .progress({ background: true }, function (instance, image) { })
            .always(function (instance) {
                setTimeout(function () {
                    $('.loading').addClass('--hide')
                }, 200)
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