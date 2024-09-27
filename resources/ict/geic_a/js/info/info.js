$(function () {
	var now = new Date();

	let y = now.getFullYear();
	let mo = now.getMonth() + 1;
	let d = now.getDate();
	let dow = now.getDay();
	var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
	var today = new Date().getDay();
	var todayLabel = week[today];

	$('#years').text(y);
	$('#months').text(mo);
	$('#days').text(d);
	$('#dayofweeks').text(todayLabel);
});

//공지사항
$(function () {
    $('.d-notice-slide').on('init', function (event, slick) {

    }).slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.d-notice-slide-thumbs',
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000

    });


    $('.d-notice-slide-thumbs').slick({
        infinite: true,
        slidesToShow: 5,
        asNavFor: '.d-notice-slide',
        focusOnSelect: true,
        autoplay: false,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        variableWidth: false,
        dots: true

    });
});


//시설안내

$(document).ready(function () {
    $('.faci_tab a').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.faci_tab a').removeClass('active');
        $('.tab_content').removeClass('active');


        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

});


$(function () {
    $('.floor_slide_01').on('init', function (event, slick) {

    }).slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        speed: 1000

    });
});
$(function () {
    $('.floor_slide_02').on('init', function (event, slick) {

    }).slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        speed: 1000

    });
});
$(function () {
    $('.floor_slide_03').on('init', function (event, slick) {

    }).slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        speed: 1000

    });
});

//오늘의행사
$(function () {
    $('.swiper-wrapper').on('init', function (event, slick) {

    }).slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000

    });
});

//문화강좌
$(function () {
    $('.cul_slide').on('init', function (event, slick) {

    }).slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000

    });
});