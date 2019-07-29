$(function() {

	document.body.onload = function(){
		setTimeout(function(){
			var preloader = document.getElementById('page-preloader');
			if(!preloader.classList.contains('done')){
				preloader.classList.add('done');
			}
		}, 1000);
	}

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	$('.view').magnificPopup({
 		 type: 'image',
 		   gallery: {
    // options for gallery
    enabled: true
  },
	});

	

	var link = $('.mnu-link');
	var link_active = $('.mnu-link_active');
	var menu = $('.mnu');
	var nav_link = $('.mnu a');

	link.click(function(){
		link.toggleClass('mnu-link_active');
		menu.toggleClass('mnu_active');
	});

	nav_link.click(function(){
		link.toggleClass('mnu-link_active');
		menu.toggleClass('mnu_active');
	});

});
