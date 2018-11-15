$(function () {

    // Ajax form

    $('.popup-form').submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            setTimeout(function () {
                $.fancybox.open('<div class="success-message"><div class="message-heading"><p>Спасибо!</p></div><div class="message-text"><p>Мы Вам перезвоним!</p></div></div>');
            }, 1000);
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
            setTimeout(function () {
                $.fancybox.close();
                $.fancybox.close();
            }, 4000);
        });
        return false;
    });


    // Header-slider
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // team slider
    $('.persons').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.persons').mousewheel(function(e) {
        if (e.deltaY < 0) {
            if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
                return
            }

            e.preventDefault()
            $(this).slick('slickNext')
        } else {
            if($(this).slick('slickCurrentSlide') == 0) {
                return
            }

            e.preventDefault()
            $(this).slick('slickPrev')


        }
    });



    // Portfolio slider
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false,
        variableWidth: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.portfolio-slider').mousewheel(function(e) {
        if (e.deltaY < 0) {
            if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
                return
            }

            e.preventDefault()
            $(this).slick('slickNext')
        } else {
            if($(this).slick('slickCurrentSlide') == 0) {
                return
            }

            e.preventDefault()
            $(this).slick('slickPrev')
        }
    });




    // Features slider
    $('.features-slider').slick({
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
    });



    $('.features-slider').mousewheel(function(e) {
        if (e.deltaY < 0) {
            if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
                return
            }

            e.preventDefault()
            $(this).slick('slickNext')
        } else {
            if($(this).slick('slickCurrentSlide') == 0) {
                return
            }

            e.preventDefault()
            $(this).slick('slickPrev')


        }
    });

    // $('.features-slider').mousewheel(function(e) {
    //     if (e.deltaY < 0) {
    //
    //
    //         e.preventDefault()
    //         $(this).find('.slick-slide').removeClass("slick-somth-out")
    //         $(this).find('.slick-active').addClass("slick-somth-in")
    //     }
    //     else{
    //         $(this).find('.slick-slide').removeClass("slick-somth-in")
    //         $(this).find('.slick-active').addClass("slick-somth-out")
    //
    //     }
    // });

    // $('.features-slider').find('.slick-slide').removeClass("slick-somth");
    // $('.features-slider').find('.slick-active').addClass("slick-somth");





    // function offScroll() {
    //     document.body.style.overflow = "hidden";
    //     this.onmouseout = function () {
    //         document.body.style.overflow = "auto";
    //     };
    // }


    // $('.portfolio-slider').mousewheel(function(e) {
    //     e.preventDefault();
    //
    //     if (e.deltaY < 0) {
    //         $(this).slick('slickNext');
    //     } else {
    //         $(this).slick('slickPrev');
    //     }
    // });


    // $('.features-slider').mousewheel(function(e) {
    //     e.preventDefault();
    //
    //     if (e.deltaY < 0) {
    //         $(this).slick('slickNext');
    //     } else {
    //         $(this).slick('slickPrev');
    //     }
    // });


});


