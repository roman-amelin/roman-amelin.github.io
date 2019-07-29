$(document).ready(function() {

	if ($(window).width() > 1125 ) {

		$('.nav-item').click(function(event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});
	}

	var sec = 10;
	var checked = 0;
	var format = 1;

	var message = '<h3>Заявка с сайта: </h3>';
	var message_heros = [];

	function getMessage() {

		var heros_links = '';
		var heros_sum = $('.heros__check span').text();
		var client_phone = $('.heros__phone').val();
		var client_message = $('.heros__message').val();
		var client_email = $('.heros__email').val();

		for (var i = 0; i < message_heros.length; i++) {
			heros_links += '<a href="' + 'videpresent.com/' + message_heros[i] + '"> Заказали героя! </a><br>';
		}
		
		message += heros_links;
		message += '<p>В формате: ' + format + '</p>';
		message += '<p>Длительностью: ' + sec + '</p>';
		message += '<p>На сумму: ' + heros_sum + '</p>';
		message += '<h4>Телефон: ' + client_phone + '</h4>';
		message += '<h4>Email: ' + client_email + '</h4>';
		message += '<p>Сообщение: ' + client_message + '</p>';

		return message;
	}

	$('.heros__group li').click(function() {

		$(this).toggleClass('activ');

		var prise = +$(this).parent('.heros__group').attr('data-prise');
		var isActiv = $(this).hasClass('activ');
		var link = $(this).children('img').attr('src');

		if (isActiv) {

			checked += prise;
			message_heros.push(link);

		} else {

			checked -= prise;

			for (var i = 0; i < message_heros.length; i++) {
				var index_item = message_heros[i];

				if (index_item == link) {

					message_heros.splice(i, 1);

				}

			}

		}

		getCheck();

	});

	$('.heros__format .button').click(function() {

		$('.heros__format .button').removeClass('activ');
		$(this).toggleClass('activ');

		var t = $(this).attr('data-format');
		console.log(t);

		if (t == 1.5) {

			format = 1.5;
			getCheck();
		
		} else {

			format = 1;
			getCheck();

		}

	});

	$('.heros__sec').change(function() {

		var s = $(this).val();

		if (!isNaN(s)) {

			if (s < 10) {
				alert("Минимальная длительность видео 10 сек")
				$(this).val(10);
			} else {
				sec = s;
				getCheck();
			}
			sec = s;
			getCheck();
		
		} else {
			alert('Введите цело число!')
			$(this).val('');
		}
		
	});

	$('.heros__phone').change(function() {

		var valid = +$(this).val();

		if (isNaN(valid)) {
			alert('Введите коректный номер!');
			$(this).val('')
		}

	});

	function getCheck() {
		var check = (sec * checked) * format;
		$('.heros__check .check').html(Math.floor((check * 0.84)) + ' руб<br>' + check + ' сом');
	}

	$('.slider__content').slick({
		prevArrow : '<img src="static/img/arrow.png" alt="arrow">',
		nextArrow : '<img src="static/img/arrow.png" alt="arrow">',
		autoplay : true,
		autoplaySpeed : 10000
	});

	$('.heros__go').click(function() {
		var final_message = getMessage();

		$.ajax({
			url: 'smart02.php',
			type: 'POST',
			dataType: 'html',
			data: {siteMessage: final_message},
		})
		.done(function() {
			console.log("success");

			$('.heros__sec').val('');
			$('.heros__phone').val('');
			$('.heros__email').val('');
			$('.heros__message').val('');

			$('.heros__go-descr').css({display: 'block'});

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	$('#callback .call_go').click(function() {
		var user_name = $('#callback .name').val();
		var user_phone = $('#callback .phone').val();
		var user_email = $('#callback .email').val();
		/*var user_comment = $('#callback .comment').val();*/

		var call_message = '<h1>Заявка на консультацию: </h1>';
		call_message += '<p>Имя: ' + user_name + '</p>';
		call_message += '<p>Телефон: ' + user_phone + '</p>';
		call_message += '<p>Email: ' + user_email + '</p>';
		/*call_message += '<p>Коментарий: ' + user_comment + '</p>';*/

		$.ajax({
			url: 'smart02.php',
			type: 'POST',
			dataType: 'html',
			data: {siteMessage: call_message},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
		});
		$('#scroller').click(function () {
		$('body,html').animate({
		    scrollTop: 0
		}, 400);
		return false;
	});

});