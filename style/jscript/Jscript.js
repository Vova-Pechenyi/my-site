$(function() {
    $('.a-fa').click(function () {
        $('.ul-list').toggleClass('ul-menu');
    });
    
    $('.work-card-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
    });
    new WOW().init();
})