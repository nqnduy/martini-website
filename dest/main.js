/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
    let header = $('.header'),
        btnMobile = $('.header__btnmenu'),
        navMobile = $('.nav'),
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


    // BUTTON MENU CLICKED
    function btnMenuClicked() {
        let btnMenu = $('.header__btnmenu')
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