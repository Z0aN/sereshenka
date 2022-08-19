$(document).ready(function(){
    $('.prices-slider').slick({
        arrows:false,
        adaptiveHeight: true,
        slidesToShow : 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 2000,
        draggable: true,
        swipe: true,
    });
});