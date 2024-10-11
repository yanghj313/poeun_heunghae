$(function () {
	var now = new Date();

	let y = now.getFullYear();
	let mo = now.getMonth() + 1;
	let d = now.getDate();
	let dow = now.getDay();
	var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
	var today = new Date().getDay();
	var todayLabel = week[today];

	$('#years').text(y);
	$('#months').text(mo);
	$('#days').text(d);
	$('#dayofweeks').text(todayLabel);
});

//공지사항
$(function () {
	var swiper = new Swiper('.notice-slide-thumbs', {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper2 = new Swiper('.notice-slide', {
		loop: true,
		spaceBetween: 10,
		effect: 'fade',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: swiper,
		},
	});
});

//시설안내
$(document).ready(function () {
	$('.faci_tab a').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.faci_tab a').removeClass('active');
		$('.tab_content').removeClass('active');

		$(this).addClass('active');
		$('#' + tab_id).addClass('active');
	});
});

$(function () {
	$('.floor_slide_01').bxSlider({
		infiniteLoop: false,
		controls: false,
		pager: true,
		slideMargin: 40,
	});
});

$(function () {
	$('.floor_slide_02').bxSlider({
		infiniteLoop: false,
		controls: false,
		pager: true,
		slideMargin: 40,
	});
});

$(function () {
	$('.floor_slide_03').bxSlider({
		infiniteLoop: false,
		controls: false,
		pager: true,
		slideMargin: 40,
	});
});

//신착도서, 대출베스트
$(function () {
	$('.slider').bxSlider({
		infiniteLoop: false,
		slideWidth: 1800,
		controls: false,
		pager: true,
		slideMargin: 40,
	});
});

//도서정보
$(function () {
	const mainSlider = new Swiper('.main-slider', {
		loop: true,
		spaceBetween: 10,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});

	const thumbnailSlider = new Swiper('.thumbnail-slider', {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 6,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	mainSlider.on('slideChange', () => {
		thumbnailSlider.slideTo(mainSlider.activeIndex);
	});

	thumbnailSlider.on('click', swiper => {
		mainSlider.slideTo(swiper.clickedIndex);
	});
});

//강좌안내
$(function () {
	$('.bslide-box').bxSlider({
		infiniteLoop: false,
		slideWidth: 1800,
		controls: false,
		pager: true,
		slideMargin: 40,
	});
});
