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
                '<svg class="fancybox-close-icon" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M4.43813 3.48015L6.78457 1.11987C6.90032 0.992969 6.96286 0.825999 6.95915 0.653818C6.95544 0.481637 6.88576 0.317552 6.76465 0.195813C6.64355 0.0740734 6.48038 0.00408869 6.30921 0.000467177C6.13803 -0.00315433 5.97208 0.0598672 5.846 0.176377L3.50016 2.53604L1.15371 0.175765C1.02755 0.0593372 0.861561 -0.00357608 0.690389 0.000157127C0.519217 0.00389033 0.356092 0.0739815 0.235066 0.1958C0.11404 0.317618 0.0444653 0.481749 0.040865 0.653932C0.0372647 0.826116 0.099917 0.993044 0.215744 1.11987L2.56158 3.47953L0.215135 5.83981C0.149117 5.90073 0.0960368 5.97446 0.0590912 6.05657C0.0221455 6.13867 0.00209814 6.22744 0.000156047 6.31754C-0.00178605 6.40764 0.0144172 6.4972 0.0477904 6.58084C0.0811636 6.66448 0.131017 6.74045 0.194348 6.8042C0.25768 6.86795 0.33318 6.91814 0.416304 6.95177C0.499428 6.98539 0.588456 7.00175 0.67803 6.99985C0.767603 6.99796 0.855869 6.97785 0.937514 6.94074C1.01916 6.90363 1.09249 6.85028 1.15311 6.78392L3.50016 4.42303L5.8466 6.7833C5.90717 6.84971 5.98047 6.9031 6.06209 6.94027C6.14371 6.97743 6.23197 6.9976 6.32154 6.99955C6.41111 7.0015 6.50015 6.9852 6.5833 6.95163C6.66644 6.91807 6.74197 6.86792 6.80535 6.80421C6.86872 6.74051 6.91862 6.66456 6.95205 6.58095C6.98548 6.49734 7.00174 6.40778 6.99985 6.31768C6.99797 6.22758 6.97798 6.13879 6.94109 6.05667C6.90419 5.97454 6.85116 5.90077 6.78518 5.83981L4.43813 3.48015Z" fill="#526295"/>\n' +
                '</svg>' +
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
                invert: false,
                releaseOnEdges: true,
                sensitivity: 400
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

var sliderNews = undefined;
function initSliderNews() {
    jQuery('.js-slider-news').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderNews = new Swiper($slider[0], {
            loop: isStart,
            pagination: false,
            navigation: false,
            spaceBetween: 0,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                720: {
                    simulateTouch: false,
                    slidesPerView: 2,
                    spaceBetween: 26,
                },
                992: {
                    simulateTouch: false,
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
function reInitSliderNews() {
    if (sliderNews) {
        sliderNews.destroy();
    }
    sliderNews = undefined;
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

function initMenuWidth() {
    $(".js-menu-width").each(function(){
        var $list = $(this),
            $item = $list.find('li'),
            lengthItem = $item.length,
            className1 = 'main-submenu_col-2',
            className2 = 'main-submenu_col-3',
            amountItem1 = $list.data("menu-count"),
            amountItem2 = amountItem1 * 2;

        $list.removeClass(className1);
        $list.removeClass(className2);
        if (lengthItem > amountItem1) {
            $list.addClass(className1);
        }
        if (lengthItem > amountItem2) {
            $list.addClass(className2);
        }
    });
}

function initForm() {
    jQuery('.js-form').each(function() {
        var $checkbox = $(this).find('.js-form-checkbox'),
            $button = $(this).find('.js-form-button'),
            classDisabled = $(this).data('form-disabled');

        if ($checkbox.is(':checked')) {
            $button.removeClass(classDisabled);
        } else {
            $button.addClass(classDisabled);
        }

        $checkbox.on("change", function(e) {
            e.stopPropagation();
            if ($checkbox.is(':checked')) {
                $button.prop("disabled", false);
                $button.removeClass(classDisabled);
            } else {
                $button.prop("disabled", true);
                $button.addClass(classDisabled);
            }
        });
    });
}

function openPopupBooking($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-booking');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        autoFocus: false,
        afterShow: function (data) {
            initValidate(data.$refs.container.find('.js-form-validate'));
            initMask();
            initSelect();
            initForm();

            var index = $element.data('index') || 0;
            $('.js-select-service .js-select').val(index).selectric('refresh');
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M4.43813 3.48015L6.78457 1.11987C6.90032 0.992969 6.96286 0.825999 6.95915 0.653818C6.95544 0.481637 6.88576 0.317552 6.76465 0.195813C6.64355 0.0740734 6.48038 0.00408869 6.30921 0.000467177C6.13803 -0.00315433 5.97208 0.0598672 5.846 0.176377L3.50016 2.53604L1.15371 0.175765C1.02755 0.0593372 0.861561 -0.00357608 0.690389 0.000157127C0.519217 0.00389033 0.356092 0.0739815 0.235066 0.1958C0.11404 0.317618 0.0444653 0.481749 0.040865 0.653932C0.0372647 0.826116 0.099917 0.993044 0.215744 1.11987L2.56158 3.47953L0.215135 5.83981C0.149117 5.90073 0.0960368 5.97446 0.0590912 6.05657C0.0221455 6.13867 0.00209814 6.22744 0.000156047 6.31754C-0.00178605 6.40764 0.0144172 6.4972 0.0477904 6.58084C0.0811636 6.66448 0.131017 6.74045 0.194348 6.8042C0.25768 6.86795 0.33318 6.91814 0.416304 6.95177C0.499428 6.98539 0.588456 7.00175 0.67803 6.99985C0.767603 6.99796 0.855869 6.97785 0.937514 6.94074C1.01916 6.90363 1.09249 6.85028 1.15311 6.78392L3.50016 4.42303L5.8466 6.7833C5.90717 6.84971 5.98047 6.9031 6.06209 6.94027C6.14371 6.97743 6.23197 6.9976 6.32154 6.99955C6.41111 7.0015 6.50015 6.9852 6.5833 6.95163C6.66644 6.91807 6.74197 6.86792 6.80535 6.80421C6.86872 6.74051 6.91862 6.66456 6.95205 6.58095C6.98548 6.49734 7.00174 6.40778 6.99985 6.31768C6.99797 6.22758 6.97798 6.13879 6.94109 6.05667C6.90419 5.97454 6.85116 5.90077 6.78518 5.83981L4.43813 3.48015Z" fill="#526295"/>\n' +
                '</svg>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupBooking() {
    $(".js-popup-booking").on('click', function() {
        $.fancybox.close();
        openPopupBooking($(this));
    });
}

function openPopupCity($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-popup-city');
    }

    $.fancybox.open({
        src  : $element.data('src'),
        type : 'ajax',
        toolbar  : false,
        smallBtn : true,
        afterShow: function (data) {
            $('.js-location-radio').on('click', function(e) {
               $('.js-location').addClass('g-hidden');
               $.fancybox.close();
            });
        },
        btnTpl: {
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-close" title="{{CLOSE}}">' +
                '<svg class="fancybox-close-icon" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M4.43813 3.48015L6.78457 1.11987C6.90032 0.992969 6.96286 0.825999 6.95915 0.653818C6.95544 0.481637 6.88576 0.317552 6.76465 0.195813C6.64355 0.0740734 6.48038 0.00408869 6.30921 0.000467177C6.13803 -0.00315433 5.97208 0.0598672 5.846 0.176377L3.50016 2.53604L1.15371 0.175765C1.02755 0.0593372 0.861561 -0.00357608 0.690389 0.000157127C0.519217 0.00389033 0.356092 0.0739815 0.235066 0.1958C0.11404 0.317618 0.0444653 0.481749 0.040865 0.653932C0.0372647 0.826116 0.099917 0.993044 0.215744 1.11987L2.56158 3.47953L0.215135 5.83981C0.149117 5.90073 0.0960368 5.97446 0.0590912 6.05657C0.0221455 6.13867 0.00209814 6.22744 0.000156047 6.31754C-0.00178605 6.40764 0.0144172 6.4972 0.0477904 6.58084C0.0811636 6.66448 0.131017 6.74045 0.194348 6.8042C0.25768 6.86795 0.33318 6.91814 0.416304 6.95177C0.499428 6.98539 0.588456 7.00175 0.67803 6.99985C0.767603 6.99796 0.855869 6.97785 0.937514 6.94074C1.01916 6.90363 1.09249 6.85028 1.15311 6.78392L3.50016 4.42303L5.8466 6.7833C5.90717 6.84971 5.98047 6.9031 6.06209 6.94027C6.14371 6.97743 6.23197 6.9976 6.32154 6.99955C6.41111 7.0015 6.50015 6.9852 6.5833 6.95163C6.66644 6.91807 6.74197 6.86792 6.80535 6.80421C6.86872 6.74051 6.91862 6.66456 6.95205 6.58095C6.98548 6.49734 7.00174 6.40778 6.99985 6.31768C6.99797 6.22758 6.97798 6.13879 6.94109 6.05667C6.90419 5.97454 6.85116 5.90077 6.78518 5.83981L4.43813 3.48015Z" fill="#526295"/>\n' +
                '</svg>' +
                "</button>"
        },
        lang: "ru",
        i18n: {
            ru: {
                CLOSE: "Закрыть",
            },
        }
    });
}

function initPopupCity() {
    $(".js-popup-city").on('click', function() {
        $.fancybox.close();
        openPopupCity($(".js-popup-city"));
    });
}

function initAjaxMore() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        beforeSend: function () {
        },
        success: function () {
        }
    };

    $('.JS-AjaxMore').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initExpand() {
    jQuery('.js-expand').each(function() {
        var $element = $(this),
            $block = $element.find('.js-expand-block'),
            $link = $element.find('.js-expand-link'),
            local = GLOBAL.parseData(jQuery(this).data('expand')),
            classActive = local.classActive || 'active',
            classShow = local.classShow || 'show',
            heightParent = parseInt($block.css('min-height'),10) || 27,
            heightChild = $block.height();

        if (heightChild > heightParent) {
            $element.addClass(classActive);

            $link.on("click", function() {
                $element.addClass(classShow);
            });
        }
    });
}

function initAccordion() {
    if (typeof(Accordion) === 'undefined' || !jQuery.isFunction(Accordion)) {
        return false;
    }

    var common = {};

    $('.JS-Accordion').not('.JS-Accordion-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('accordion'));
        new Accordion(this, jQuery.extend({}, common, local));
    });
}

var sliderClientsRegister = undefined;
function initSliderClientsRegister() {
    jQuery('.js-slider-clients-register').each(function() {
        var $slider = $(this),
            sliderLength = $slider.find('.swiper-slide').length;

        var isStart = sliderLength > 1 ? true : false;

        sliderClientsRegister = new Swiper($slider[0], {
            loop: false,
            pagination: false,
            navigation: false,
            spaceBetween: 0,
            breakpoints: {
                0: {
                    simulateTouch: false,
                    slidesPerView: 2,
                },
                720: {
                    simulateTouch: false,
                    slidesPerView: 2,
                   },
                992: {
                    simulateTouch: false,
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
function reInitSliderClientsRegister() {
    if (sliderClientsRegister) {
        sliderClientsRegister.destroy();
    }
    sliderClientsRegister = undefined;
}

function initResizeWindow() {
    var width = $(window).outerWidth();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
        if (sliderAdvantages != undefined) {
            reInitSliderAdvantages();
        }
        if (sliderNews == undefined) {
            initSliderNews();
        }
        if (sliderClientsRegister != undefined) {
            reInitSliderClientsRegister();
        }
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        if (sliderAdvantages == undefined) {
            initSliderAdvantages();
        }
        if (sliderNews == undefined) {
            initSliderNews();
        }
        if (sliderClientsRegister == undefined) {
            initSliderClientsRegister()
        }
    } else {
        GLOBAL.widthWindow = '';
        if (sliderAdvantages == undefined) {
            initSliderAdvantages();
        }
        if (sliderNews != undefined) {
            reInitSliderNews();
        }
        if (sliderClientsRegister != undefined) {
            reInitSliderClientsRegister();
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
    initMenuWidth();
    initPopupBooking();
    initForm();
    initPopupCity();
    initAjaxMore();
    initExpand();
    initAccordion();
});
