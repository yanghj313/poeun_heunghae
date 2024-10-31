$(document).ready(function () {
	var swiper1 = new Swiper('.swiper1', {
		loop: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		spaceBetween: 30,
		speed: 1000,
		on: {
			reachEnd: function () {
				setTimeout(function () {
					$('.swiper1').fadeOut(500, function () {
						$('.swiper2').fadeIn(500);
						swiper2.slideTo(0);
						$('.cate1').removeClass('on');
						$('.cate2').addClass('on');
					});
				}, 1000);
			},
		},
	});

	var swiper2 = new Swiper('.swiper2', {
		loop: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		spaceBetween: 30,
		speed: 1000,
		on: {
			reachEnd: function () {
				setTimeout(function () {
					$('.swiper2').fadeOut(500, function () {
						$('.swiper3').fadeIn(500);
						swiper3.slideTo(0);
						$('.cate2').removeClass('on');
						$('.cate3').addClass('on');
					});
				}, 1000);
			},
		},
	});

	var swiper3 = new Swiper('.swiper3', {
		loop: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		spaceBetween: 30,
		speed: 1000,
		on: {
			reachEnd: function () {
				setTimeout(function () {
					$('.swiper3').fadeOut(500, function () {
						$('.swiper1').fadeIn(500);
						swiper1.slideTo(0);
						$('.cate3').removeClass('on');
						$('.cate1').addClass('on');
					});
				}, 1000);
			},
		},
	});
});
