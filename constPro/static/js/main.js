$(document).ready(function () {
    svg4everybody({});

    $(".header__nav nav ul a").on("click", function (event) {

      if ($(window).innerWidth() < 992) return;

      event.preventDefault();
      
      var id  = $(this).attr('href')

      if ($(id).length == 0) return;

      var top = $(id).offset().top + 3;

      $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".js-scroll").on("click", function (event) {

      event.preventDefault();
      
      var id  = $(this).attr('href')

      if ($(id).length == 0) return;

      var top = $(id).offset().top + 3;

      $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.langs__active').click(function(event) {
      $('#langs').fadeToggle();
    });

    $('.gallery__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      swipe: false,
      arrows: true,
      infinite: false,
      prevArrow: '<div class="slick-prew slick-arrow" aria-label="Prev"><img src="static/images/general/arrow.png" alt="Prev" /></div>',
      nextArrow: '<div class="slick-next slick-arrow" aria-label="Next"><img src="static/images/general/arrow.png" alt="Next" /></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });

    $('.gallery__slide a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        tPrev: 'Предыдущее',
        tNext: 'Следующее',
        tCounter: '%curr% из %total%',
      }
    });
});