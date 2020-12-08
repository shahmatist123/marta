/**
 * @package Helix3 Framework
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2016 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */

jQuery(function ($) {

    // ************    START Helix 1.4 JS    ************** //
    // **************************************************** //

    //Default
    if (typeof sp_offanimation === 'undefined' || sp_offanimation === '') {
        sp_offanimation = 'default';
    }

    if (sp_offanimation == 'default') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('offcanvas');
        });

        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('offcanvas');
        });
    }

    // Slide Top Menu
    if (sp_offanimation == 'slidetop') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('slide-top-menu');
        });

        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('slide-top-menu');
        });
    }

    //Full Screen
    if (sp_offanimation == 'fullscreen') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas');
        });
        $(document).ready(function () {
            $('.off-canvas-menu-init').addClass('full-screen');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas');
        });
    }

    //Full screen from top
    if (sp_offanimation == 'fullScreen-top') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('full-screen-off-canvas-ftop');
        });
        $(document).ready(function () {
            $('.off-canvas-menu-init').addClass('full-screen-ftop');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('full-screen-off-canvas-ftop');
        });
    }

    //Dark with plus
    if (sp_offanimation == 'drarkplus') {
        $('#offcanvas-toggler').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').addClass('new-look-off-canvas');
        });
        $('<div class="offcanvas-overlay"></div>').insertBefore('.offcanvas-menu');
        $(document).ready(function () {
            $('.off-canvas-menu-init').addClass('new-look');
        });
        $('.close-offcanvas,.offcanvas-overlay').on('click', function (event) {
            event.preventDefault();
            $('.off-canvas-menu-init').removeClass('new-look-off-canvas');
        });
    }

    // if sticky header
    if ($("body.sticky-header").length > 0 && $('#sp-header').length > 0) {
        var fixedSection = $('#sp-header');
        // sticky nav
        var headerHeight = fixedSection.outerHeight();
        var stickyNavTop = fixedSection.offset().top;
        fixedSection.addClass('animated');
        fixedSection.before('<div class="nav-placeholder"></div>');
        $('.nav-placeholder').height('inherit');
        //add class
        fixedSection.addClass('menu-fixed-out');
        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                fixedSection.removeClass('menu-fixed-out').addClass('menu-fixed');
                $('.nav-placeholder').height(headerHeight);
            } else {
                if (fixedSection.hasClass('menu-fixed')) {
                    fixedSection.removeClass('menu-fixed').addClass('menu-fixed-out');
                    $('.nav-placeholder').height('inherit');
                }
            }
        };
        stickyNav();
        $(window).scroll(function () {
            stickyNav();
        });
    }
    // go to top
    if (typeof sp_gotop === 'undefined') {
        sp_gotop = '';
    }

    if (sp_gotop) {
        // go to top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut(400);
            }
        });

        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    } // has go to top

    // Preloader
    if (typeof sp_preloader === 'undefined') {
        sp_preloader = '';
    }

    if (sp_preloader) {
        $(window).on('load', function () {
            if ($('.sp-loader-with-logo').length > 0) {
                move();
            }
            setTimeout(function () {
                $('.sp-pre-loader').fadeOut();
            }, 1000);
        });
    } // has preloader
    //preloader Function
    function move() {
        var elem = document.getElementById("line-load");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    // ************    END:: Helix 1.4 JS    ************** //
    // **************************************************** //

    // **************   START Mega SCRIPT   *************** //
    // **************************************************** //

    //mega menu
    $('.sp-megamenu-wrapper').parent().parent().css('position', 'static').parent().css('position', 'relative');
    $('.sp-menu-full').each(function () {
        $(this).parent().addClass('menu-justify');
    });

    // boxlayout
    if ($("body.layout-boxed").length > 0) {
        var windowWidth = $('#sp-header').parent().outerWidth();
        $("#sp-header").css({"max-width": windowWidth, "left": "auto"});
    }

    // **************   END:: Mega SCRIPT   *************** //
    // **************************************************** //

    // **************  START Others SCRIPT  *************** //
    // **************************************************** //

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Article Ajax voting
    // $(document).on('click', '.sp-rating .star', function (event) {
    //     event.preventDefault();
    //
    //     var data = {
    //         'action': 'voting',
    //         'user_rating': $(this).data('number'),
    //         'id': $(this).closest('.post_rating').attr('id')
    //     };
    //
    //     var request = {
    //         'option': 'com_ajax',
    //         'plugin': 'helix3',
    //         'data': data,
    //         'format': 'json'
    //     };
    //
    //     $.ajax({
    //         type: 'POST',
    //         data: request,
    //         beforeSend: function () {
    //             $('.post_rating .ajax-loader').show();
    //         },
    //         success: function (response) {
    //             var data = $.parseJSON(response.data);
    //
    //             $('.post_rating .ajax-loader').hide();
    //
    //             if (data.status == 'invalid') {
    //                 $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
    //             } else if (data.status == 'false') {
    //                 $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
    //             } else if (data.status == 'true') {
    //                 var rate = data.action;
    //                 $('.voting-symbol').find('.star').each(function (i) {
    //                     if (i < rate) {
    //                         $(".star").eq(-(i + 1)).addClass('active');
    //                     }
    //                 });
    //
    //                 $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
    //             }
    //
    //         },
    //         error: function () {
    //             $('.post_rating .ajax-loader').hide();
    //             $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
    //         }
    //     });
    // });

    /* Карусели */

    $('.slider__carousel').slick({

        infinite: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        dots: true
    });


    $('.greeting__slider').slick({


        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true


    });

    $('.brands__carousel').slick({


        slidesToShow: 6,
        arrows: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.8,
                    slidesToScroll: 3.8
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 3.2
                }
            }
        ]
    });

    $('.carousel-other-products').slick({


        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false


    });

    $('.carousel-comments-list').slick({


        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false


    });

    $('.slide-reviews').slick({


        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 2.8
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1.2
                }
            }
        ]
    });
    $('.jshop_list_product_carousel').slick({


        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        loop: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll:2
                }
            }
        ]
    });

    $('.tabs__testimonails .speasyimagegallery-row').slick({


        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1.3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1.3
                }
            }
        ]
    });
    /* END Карусели */

    /* Иконка меню каталога */

    jQuery(function ($) {

        const icons = document.querySelectorAll('.burger__icon');
        icons.forEach(icon => {
            icon.addEventListener('click', (event) => {
                icon.classList.toggle("open");
            });

        });


    });

    $('.burger__icon').click(function () {
        $('.menucustom-vertical__nav').toggleClass('show');

    });

    /* END Иконка меню каталога */

    /* Фильтры товаров */
    $('.price-slider-title').click(function () {
        $('.slider_wrapper').show();
    });

    $('.price-hide-block').click(function () {
        $('.slider_wrapper').hide();
    });
    /* END Фильтры товаров */

    /* Joomshopping Social Share */


    $('.social-share-open').click(function () {
        $('.social-share__content').show();
    });
    $('.close-button-share').click(function () {
        $('.social-share__content').hide();
    });
    /* END Joomshopping Social Share */

    /* Скрипт скролбара */
    $(document).ready(function () {

        var nice = $(".ui-multiselect-checkboxes, .comment-body, .testimonial__item").niceScroll({cursorcolor: "#ffb000"});

    });
    $(document).ready(function () {

        var nice = $(".prod-description__item, .cat__desk").niceScroll({cursorcolor: "#ffb000"});

    });

    /* END Скрипт скролбара */
    /* Модальное окно*/

    $(document).ready(function () {
        $('.trigger').on('click', function () {
            $('.modal-wrapper').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

    });

    $(document).ready(function () {
        $('.triggerform').on('click', function () {
            $('.modal-form__feedback').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

    });

    $(document).ready(function () {
        $('.trigger-pro').on('click', function () {
            $('.modal-products__feedback').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

    });


    /* END Модальное окно*/

    /* Автозакрытие после отправки формы */
    $('.feedback-button').click(function () {
        setTimeout(function () {
            jQuery('.modal-form__feedback').hide();//Скрываю модальное окно
        }, 3500); // здесь закрывается модальное окно через 3 секунды

    });
    /* END Автозакрытие после отправки формы */
    $('.filter-field-price-slider').click(function () {
        $('.slider_wrapper').removeClass('slide-price-hidden');

    });


    /* Скрытие блока по нажатию в недочерное пространство */
    jQuery(function ($) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".slider_wrapper"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.addClass('slide-price-hidden'); // скрываем его

            }

        });

    });
    /* Скрытие блока по нажатию в недочерное пространство */


    /* Табы отзыва */
    $(document).ready(function () {

        var $wrapper = $('.tabs__testimonails'),
            $allTabs = $wrapper.find('.tab-content > div'),
            $tabMenu = $wrapper.find('.tab-menu li'),
            $line = $('<div class="line"></div>').appendTo($tabMenu);

        $allTabs.not(':first-of-type').css('position','absolute');
        $allTabs.not(':first-of-type').css('pointer-events','none');
        $allTabs.not(':first-of-type').css('opacity','0');
        $tabMenu.filter(':first-of-type').find(':first').width('100%')

        $tabMenu.each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });

        $allTabs.each(function (i) {
            $(this).attr('data-tab', 'tab' + i);
        });

        $tabMenu.on('click', function () {

            var dataTab = $(this).data('tab'),
                $getWrapper = $(this).closest($wrapper);

            $getWrapper.find($tabMenu).removeClass('active');
            $(this).addClass('active');

            $getWrapper.find($allTabs).css('opacity','0');
            $getWrapper.find($allTabs).css('pointer-events','none');
            $getWrapper.find($allTabs).css('position','absolute');

            $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').css('opacity','1');
            $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').css('pointer-events','auto');
            $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').css('position','unset');

        });

    });//end ready

    /* END  Табы отзыва */

    let burgerImgDefault =  document.querySelector('.burger').innerHTML
    let burgerImgClose =  '<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9.26211 7.49893L14.6327 2.14085C14.8679 1.90566 15 1.58668 15 1.25408C15 0.921478 14.8679 0.602498 14.6327 0.367312C14.3975 0.132126 14.0785 0 13.7459 0C13.4133 0 13.0943 0.132126 12.8592 0.367312L7.50107 5.73789L2.14298 0.367312C1.9078 0.132126 1.58882 -2.47808e-09 1.25621 0C0.92361 2.47809e-09 0.604629 0.132126 0.369443 0.367312C0.134258 0.602498 0.0021315 0.921478 0.00213149 1.25408C0.00213149 1.58668 0.134258 1.90566 0.369443 2.14085L5.74002 7.49893L0.369443 12.857C0.252379 12.9731 0.159463 13.1113 0.0960548 13.2635C0.0326462 13.4157 0 13.5789 0 13.7438C0 13.9087 0.0326462 14.0719 0.0960548 14.2241C0.159463 14.3763 0.252379 14.5144 0.369443 14.6306C0.485551 14.7476 0.623689 14.8405 0.775887 14.9039C0.928086 14.9674 1.09133 15 1.25621 15C1.42109 15 1.58434 14.9674 1.73654 14.9039C1.88874 14.8405 2.02687 14.7476 2.14298 14.6306L7.50107 9.25998L12.8592 14.6306C12.9753 14.7476 13.1134 14.8405 13.2656 14.9039C13.4178 14.9674 13.581 15 13.7459 15C13.9108 15 14.074 14.9674 14.2262 14.9039C14.3784 14.8405 14.5166 14.7476 14.6327 14.6306C14.7498 14.5144 14.8427 14.3763 14.9061 14.2241C14.9695 14.0719 15.0021 13.9087 15.0021 13.7438C15.0021 13.5789 14.9695 13.4157 14.9061 13.2635C14.8427 13.1113 14.7498 12.9731 14.6327 12.857L9.26211 7.49893Z" fill="white"/>\n' +
        '</svg>\n'
    let burgerMenuBool = false
    /* Бургер меню */
    $('.burger, .overlay').click(function () {
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('.nav__burger').toggleClass('show');
        $('body').toggleClass('overflow');

        if (burgerMenuBool){
            document.querySelector('.burger').innerHTML = burgerImgDefault
            burgerMenuBool = false
            document.querySelector('body').style = 'overflow: unset'

        }
        else{
            document.querySelector('.burger').innerHTML = burgerImgClose
            burgerMenuBool = true
            document.querySelector('body').style = 'overflow: hidden'
        }
    });

    /* Убираем боковое меню после клика на пункт меню */
    $(".nav__burger").on("click", "a", function (event) {
        $('.nav__burger').removeClass('show');
        $('.overlay').removeClass('show');
        $('.burger').removeClass('clicked');
        document.querySelector('.burger').innerHTML = burgerImgDefault
    });
    /* END Убираем боковое меню после клика на пункт меню */
    /* END Бургер меню */

    /* Кнопка поиска на мобильном */
    $('.open-mob-search').click(function () {
        $('#mod-search-searchword').toggleClass('active-search');
        $('.mob-search__custom .button').toggleClass('active-search-button');
        $('#sp-navigation').toggleClass('active-nav');
    });

    /* END Кнопка поиска на мобильном */

    /* Мобильное меню - Каталог товаров */

    $('.mob-menu__heading').click(function () {
        $('.menumobile__nav').toggleClass('active-mobmenu');
        $('.mob-menu__heading').toggleClass('mob-menu__active')
    });

    // $('.menumobile__nav .parent').click(function () {
    //     $('.nav-child__custom').toggleClass('active-nav-child__custom');
    //
    // });
    let menuMobile = document.querySelectorAll('.menumobile__nav .parent')
    if (menuMobile){
        for (let i=0; i<menuMobile.length;i++){
            menuMobile[i].addEventListener('click', function (){
                this.classList.add('active-nav-child__custom')
            })
        }
    }
    let childMobile = document.querySelectorAll('.nav-child__custo')
    if (childMobile){
        for (let i=0; i<childMobile.length;i++){
            childMobile[i].addEventListener('click', function (){
                this.classList.add('active-nav-child__custom')
            })
        }
    }

    /* END Мобильное меню - Каталог товаров */

    // **************  END:: Others SCRIPT  *************** //
    // **************************************************** //

});
// $(document).ready(function() {
//     let searchInputs = document.querySelectorAll('.search-query')
//     if (searchInputs.length!==0){
//         for (let i=0; i<searchInputs.length;i++){
//             searchInputs[i].addEventListener('input', function (){
//                 let searchPopupItems = document.querySelectorAll('.search-popup__wrapper a')
//                 for (let j = 0; j<searchPopupItems.length;j++){
//                     searchInputs[i].innerHTML = searchInputs[i].textContent
//                     let searchInputText = searchInputs[i].innerHTML.split(' ')
//                     for (let q=0; q<searchInputText.length;q++){
//
//                     }
//                 }
//             })
//         }
//     }
// })
window.onload = function () {
    let btnCart = document.querySelectorAll('.button_cart')
    if (btnCart.length !== 0) {
        for (let i = 0; i < btnCart.length; i++) {
            btnCart[i].addEventListener('click', function () {
                this.classList.add('btn-cart__green')
                this.textContent = 'В корзине'
            })
        }
    }
    let footerMobile = document.querySelectorAll('.item-mobile-down')
    if (footerMobile){
        footerMobile.forEach(function (item){
            let isClickFooter = false
            item.addEventListener('click', function (){

                if (isClickFooter){
                    this.classList.remove('footer-active')
                    isClickFooter = false
                }
                else{
                    this.classList.add('footer-active')
                    isClickFooter = true
                }
            })
        })
    }
    let addComment = document.querySelector('.checkout-add__comment')
    let addCommentTextarea = document.querySelector('.checkout-add__comment-text')
    let commentDefault = addComment.innerHTML
    let commentEdit = '<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 1.78639H7.85556H14V0.289062H7.85556H6.3H0V1.78639H6.3Z" fill="#828282"/>\n' +
        '</svg>\n' +
        '<span>Удалить комментарий к заказу</span>'
    let addCommentClick = false
    if (addComment){
        addComment.addEventListener('click', function (){
            if (addCommentClick){
                addCommentTextarea.setAttribute('style','')
                addComment.innerHTML = commentDefault
                addCommentClick = false
            }
            else{
                addCommentTextarea.setAttribute('style','opacity: 1; pointer-events: auto;')
                addComment.innerHTML = commentEdit
                addCommentClick = true
            }
        })
    }
}
