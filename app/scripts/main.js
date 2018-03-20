$(document).ready(function() {

    $('.hamburger').on('click', function() {
        $('.hamburger__inner').toggleClass('is-active');
        $('.nav').toggleClass('visible');
    });

});