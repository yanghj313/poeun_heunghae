$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});
});

$(document).ready(function () {
	$('.grid-item img').click(function () {
		$('#modal-image').attr('src', $(this).attr('src'));
		$('#modal-title').text($(this).siblings('.title-wrapper').find('.content-title').text());
		$('#modal').fadeIn();
	});

	$('.close').click(function () {
		$('#modal').fadeOut();
	});

	$(window).click(function (event) {
		if ($(event.target).is('#modal')) {
			$('#modal').fadeOut();
		}
	});
});
