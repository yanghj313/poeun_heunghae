$(function () {
	var thumbsSwiper = new Swiper('.notice-slide-thumbs', {
		slidesPerView: 5, // 5개의 썸네일이 메인 이미지 너비에 맞춰져 표시됩니다.
		freeMode: true,
		watchSlidesProgress: true,
		loop: true,
	});

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
