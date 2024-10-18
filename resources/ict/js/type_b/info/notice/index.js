$(function () {
	var thumbsSwiper = new Swiper('.notice-slide-thumbs', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
	});

	// 메인 슬라이드 초기화 및 썸네일 연동
	var mainSwiper = new Swiper('.notice-slide', {
		spaceBetween: 10,
		thumbs: {
			swiper: thumbsSwiper,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
