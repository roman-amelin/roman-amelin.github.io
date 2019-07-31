$(function(){

  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true
  });

  $('.partners').owlCarousel({
    loop: true,
    responsiveClass: true, 
    dots: false,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }    
  });

  var link = $('.menu-link');
  var link_active = $('.menu-link_active');
  var menu = $('.menu');
  var nav_link = $('.menu a');

  link.click(function(){
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
  });

  nav_link.click(function(){
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
  });

  // new 

  // var link = $('.menu-link');
  // var link_active = $('.menu-link_active');
  // var menu = $('.menu');
  // var nav_link = $('.menu a');

  // link.click(function(){
  //   link.toggleClass('menu-link_active');
  //   menu.toggleClass('menu_active');
  // });

  // nav_link.click(function(){
  //   link.toggleClass('menu-link_active');
  //   menu.toggleClass('menu_active');

  // var open = $('.open');

  // var prices = $('.prices');



  // open.click(function() {
  //   prices.toggleClass('prices-active');
  //   open.toggleClass('open-active');
  // });



$('.open').click(function(e) {
  $('.open-active').removeClass('open-active');
  $('.prices-active').removeClass('prices-active');
  $($(this).attr('data-table')).toggleClass('prices-active');
  $(this).toggleClass('open-active');


});


document.body.onload = function(){
    setTimeout(function(){
      var preloader = document.getElementById('page-preloader');
      if(!preloader.classList.contains('done')){
        preloader.classList.add('done');
      }
    }, 1000);
  }
 

});