$(function() {
    $('.a-fa').click(function () {
        $('.ul-list').toggleClass('ul-menu');
    });
    
    $('.work-card-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
    });
    
    
    $('.slider-clients').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 6800,
        speed: 200,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
    });
    $('.menu-bars').click(function () {
        $('.menu-bars').children('ul').slideToggle('500');
    });
    new WOW().init();
})


