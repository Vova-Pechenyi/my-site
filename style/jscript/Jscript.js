$(function() {
    $('.a-fa').click(function () {
        $('.ul-list').toggleClass('ul-menu');
    });
    
    $('.work-card-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
    });
    
    $('.featured-images').slick({
        autoplay: true,
        autoplaySpeed: 000,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: 2,
    });
    
    $('.clients-slider').slick({
        slidesToShow: 2,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });
    $('.bgr-brands').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 000,
        speed: 3000,
        cssEase: 'linear',
    });
})