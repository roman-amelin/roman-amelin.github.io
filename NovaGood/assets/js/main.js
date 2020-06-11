(function ($) {
	"use strict";

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------
   
    $(".health-slider").slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-sort-up"></i>',
        prevArrow: '<i class="fas fa-sort-down"></i>',
    });  
   
   
    $(".health-slider-mobaile").slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
    });  
   
    $(".team-slider").slick({
        infinite: true,
        dots: true,
        arrows:false,
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 2,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
        ] 
    });
   
    $(".testimonial-slider").slick({
        infinite: true,
        dots: false,
        arrows:true,
        slidesToShow: 8,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        }
        ] 
    });  


}(jQuery));	