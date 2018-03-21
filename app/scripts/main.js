$(document).ready(function() {

    $('.hamburger').on('click', function() {
        $('.hamburger__inner').toggleClass('is-active');
        $('.nav').toggleClass('visible');
    });

    $(".guestbook-slider-js").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows : false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });

});