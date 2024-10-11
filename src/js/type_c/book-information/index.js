$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 3,
		dots: false,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});

	$('.button').on('click', function () {
		$('#popup').fadeIn();
	});

	$('.close_btn').on('click', function () {
		$('#popup').fadeOut();
	});

	$(window).on('click', function (e) {
		if ($(e.target).is('#popup')) {
			$('#popup').fadeOut();
		}
	});
});
