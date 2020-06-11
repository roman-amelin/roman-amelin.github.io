$(document).ready(function () {
	$(".js-scroll").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.gallery__list').slick({
		slidesToShow: 4,
  	slidesToScroll: 4,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
			  	slidesToScroll: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
			  	slidesToScroll: 2,
				}
			},
		],
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
