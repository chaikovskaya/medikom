/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 720;
GLOBAL.tablet = GLOBAL.tablet || 992;
GLOBAL.columnsStartLength = GLOBAL.columnsStartLength || 0;

GLOBAL.parseData = function parseData(data) {
    try {
        data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
        data = {};
    }
    return data;
};


GLOBAL.owl = GLOBAL.owl || {};
GLOBAL.owl.common = GLOBAL.owl.common || {};
GLOBAL.owl.common.loop = true;
GLOBAL.owl.common.dots = false;
GLOBAL.owl.common.margin = 0;
GLOBAL.owl.common.responsiveClass = true;
GLOBAL.owl.common.autoHeight = true;
GLOBAL.owl.common.mouseDrag = true;
GLOBAL.owl.common.nav = false;
/*--/global--*/

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

function initDropdown() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}

function initScrollUp() {
    $(window).scroll(function(){
        var position = $(window).scrollTop(),
            positionBlock = $('.js-main-content').scrollTop();

        if (position > positionBlock) {
            $('body').addClass('main-content-animate');
        } else {
            $('body').removeClass('main-content-animate');
        }
    });
}

function initValidate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate');
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

function initMask() {
    $('.js-mask-phone').inputmask({
        mask: '+7 (999) 999-99-99',
        "tabThrough": true,
        "showMaskOnHover": false,
    });

    $('.js-mask-email').inputmask({
        alias: "email",
        "tabThrough": true,
        "showMaskOnHover": false,
    });
}

function initPopup() {
    $(".js-popup").fancybox({
        toolbar  : false,
        smallBtn : true,
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close">' +
                'Закрыть<i class="fancybox-close-icon icon icon_cross_light"></i>' +
                '</button>',
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        },
    });
}

function initSelect() {
    $('.js-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="selectric-button"><i class="selectric-icon"></i></b>',
    });
}

var sliderMainBanner;
function initSliderMainBanner() {
    jQuery('.js-slider-main-banner').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderMainBanner = new Swiper($slider[0], {
            loop: isStart,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: false,
            spaceBetween: 0,
            slidesPerView: 1,
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                720: {
                    simulateTouch: false,
                },
                992: {
                    simulateTouch: false,
                },
                1370: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

var sliderAdvantages = undefined;
function initSliderAdvantages() {
    jQuery('.js-slider-advantages').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderAdvantages = new Swiper($slider[0], {
            loop: false,
            pagination: false,
            navigation: false,
            spaceBetween: 0,
            slidesPerView: "auto",
            mousewheel: {
                invert: true,
                releaseOnEdges: true,
            },
            breakpoints: {
                0: {
                    simulateTouch: false,
                },
                720: {
                    simulateTouch: false,
                },
                992: {
                    simulateTouch: false,
                },
                1370: {
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}
function reInitSliderAdvantages() {
    if (sliderAdvantages) {
        sliderAdvantages.destroy();
    }
    sliderAdvantages = undefined;
}

var sliderActions;
function initSliderActions() {
    jQuery('.js-slider-actions').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderActions = new Swiper($slider[0], {
            loop: isStart,
            pagination: {
                el: ".js-slider-pagination",
                dynamicBullets: true,
                clickable: true,
            },
            navigation: {
                nextEl: $slider.find('.js-slider-next')[0],
                prevEl: $slider.find('.js-slider-prev')[0],
                disabledClass: "slider-button_disabled",
            },
            slidesPerView: 1,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    spaceBetween: 17,
                },
                992: {
                    simulateTouch: false,
                    spaceBetween: 33,
                },
            },
            on: {
                beforeInit: function () {
                },
                init: function () {
                },
                slideChangeTransitionEnd: function () {
                },
            },
        });
    });
}

function initMobileMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MobileMenu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        if (sliderAdvantages != undefined) {
            reInitSliderAdvantages();
        }
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        if (sliderAdvantages == undefined) {
            initSliderAdvantages();
        }
    } else {
        GLOBAL.widthWindow = '';
        if (sliderAdvantages == undefined) {
            initSliderAdvantages();
        }
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
    });

    initDropdown();
    initScroll();
    initScrollUp();
    initValidate();
    initMask();
    initPopup();
    initSelect();
    initSliderMainBanner();
    initSliderActions();
    ymaps.ready(initMap);
    initMobileMenu();
});
