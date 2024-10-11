$(document).ready(function () {
	// Slick Slider 초기화
	$('.slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1, // 스크롤 수를 1로 변경
		dots: true,
	});

	// 슬라이더에 touchmove 이벤트 리스너 추가
	$('.slider').on('touchmove', function (event) {
		event.preventDefault(); // 기본 동작 방지
	});
});
