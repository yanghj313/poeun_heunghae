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

$(function () {
	$('.n-slide')
		.on('init', function (event, slick) {})
		.slick({
			infinite: true,
			slidesToShow: 1,
			arrows: false,
			fade: true,
			asNavFor: '.n-slide-thumbs,.bg_slide',
			focusOnSelect: true,
			lazyLoad: 'progressive',
			variableWidth: false,
			swipeToSlide: true,
			autoplay: true,
			speed: 1000,
			dots: true,
		});

	$('.n-slide-thumbs').slick({
		infinite: true,
		slidesToShow: 6,
		asNavFor: '.n-slide,.bg_slide',
		focusOnSelect: true,
		autoplay: false,
		centerMode: false,
		arrows: false,
		lazyLoad: 'ondemand',
		variableWidth: false,
		vertical: true,
		lazyLoad: 'progressive',
	});

	$('.bg_slide').slick({
		infinite: true,
		slidesToShow: 1,
		asNavFor: '.n-slide,.n-slide-thumbs',
		focusOnSelect: true,
		autoplay: false,
		centerMode: false,
		arrows: false,
		lazyLoad: 'ondemand',
		variableWidth: false,
		lazyLoad: 'progressive',
		fade: true,
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const textElement = document.querySelector('.text-content');
	const imgElement = document.querySelector('.bg_slide .bg-image');

	function updateTextColorBasedOnBrightness(src) {
		const tempImg = new Image();
		tempImg.src = src;
		tempImg.crossOrigin = 'Anonymous'; // CORS 우회 설정 (필요시 사용)

		tempImg.onload = function () {
			// 평균 밝기 간단 판단: 보라색 및 어두운 색을 대략적으로 판단할 수 있게 설정
			const colorSum = 0.299 * tempImg.width + 0.587 * tempImg.height + 0.114 * (tempImg.width + tempImg.height);

			// 밝기 임계값을 설정하여 어두운 배경일 때 흰 글씨 적용
			if (colorSum < 300) {
				// 어두운 이미지로 간주
				textElement.style.color = '#ffffff';
			} else {
				textElement.style.color = '#191F28';
			}
		};
	}

	// 이미지가 로드될 때마다 텍스트 색상 업데이트
	imgElement.addEventListener('load', function () {
		updateTextColorBasedOnBrightness(imgElement.src);
	});

	// 페이지 로드 시 첫 글씨 색 설정
	updateTextColorBasedOnBrightness(imgElement.src);
});
