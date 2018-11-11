$(function() {

    // Ajax form

    $('.header-form').submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                $.fancybox.open('<div class="success-message"><div class="message-heading"><p>Спасибо!</p></div><div class="message-text"><p>Мы Вам перезвоним!</p></div></div>');
                th.trigger("reset");
            }, 1000);
            setTimeout(function() {
                th.trigger("reset");
            }, 5000);
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
        // centerMode: true,
        variableWidth: true,
        // centerPadding: '60px',
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


    // Porfolio slider
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: '80px',
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















    // $('#div').on('mouseenter', function (event) {
    //     $("body").css("overflow","hidden");
    // }).on('mouseleave',  function(){
    //     $("body").css("overflow","auto");
    // });



    // $('#div').bind('mousewheel DOMMouseScroll', function(e) {
    //     var scrollTo = null;
    //     if (e.type == 'mousewheel') {
    //         scrollTo = (e.originalEvent.wheelDelta * -1);
    //     }
    //     else if (e.type == 'DOMMouseScroll') {
    //         scrollTo = 40 * e.originalEvent.detail;
    //     }
    //     if (scrollTo) {
    //         e.preventDefault();
    //         $(this).scrollTop(scrollTo + $(this).scrollTop());
    //     }
    // });

    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    new ScrollMagic.Scene({
        duration: 100,	// the scene should last for a scroll distance of 100px
        offset: 50	// start this scene after scrolling for 50px
    })
        .setPin("#my-sticky-element") // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller



});
