//신착도서
$(function () {
    $('.nbooks_wrap_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        arrows: false,
        swipe: false,
        infinite: true,
        slidesToShow: 1,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        centerMode: true,
    });
});

//베스트
$(function () {
    $('.bbooks_wrap_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        arrows: false,
        swipe: false,
        infinite: true,
        slidesToShow: 4,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        centerMode: true
    });
});

//인기도서

$(document).ready(function () {
    // 게시판
    $('.join_tab a').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.join_tab a').removeClass('active');
        $('.tab_content').removeClass('active');


        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

});


$('.pbooks_wrap_slide_01').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
});

$('.pbooks_wrap_slide_01').slick('goTo', 1);

$('.pbooks_wrap_slide_02').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    cssEase: 'linear',

});
$('.pbooks_wrap_slide_02').slick('goTo', 1);

$('.pbooks_wrap_slide_03').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
});

$('.pbooks_wrap_slide_03').slick('goTo', 1);

$('.pbooks_wrap_slide_04').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,

});

$('.pbooks_wrap_slide_04').slick('goTo', 1);

$('.pbooks_wrap_slide_05').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,

});

$('.pbooks_wrap_slide_05').slick('goTo', 1);

//도서검색 목록


$(function () {
    $('.info_fold').hide();

    $('.list_btn').on('click', function () {
        $('.info_fold').not($('.' + $(this).attr('id'))).hide();
        $('.' + $(this).attr('id')).toggle(1000);

    });
});

//도서정보
$(function () {
    $('.bookinfo_main').on('init', function (event, slick) {

    }).slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.bookinfo_thumbnails',
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        variableWidth: false,
        swipeToSlide: true,
        autoplay: true,
        speed: 1000

    });


    $('.bookinfo_thumbnails').slick({
        infinite: true,
        slidesToShow: 4,
        asNavFor: '.bookinfo_main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        variableWidth: false,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 3840,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
					},
            {
                breakpoint: 2160,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                }
					},
            {
                breakpoint: 1920,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
					}
				]


    });
});



//나의서재
$(function () {
    //input을 datepicker로 선언
    $("#datepicker1, #datepicker2").datepicker({
        closeText: "닫기",
        prevText: "이전달",
        nextText: "다음달",
        currentText: "오늘",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
	"7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
	"7월", "8월", "9월", "10월", "11월", "12월"],
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        weekHeader: "주",
        dateFormat: "yy-mm-dd",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "년",
        showOn: "button",
        buttonImage: "../../img/page/book/u-calender0.svg", //버튼 이미지 경로
        buttonImageOnly: true
    });

    //초기값을 오늘 날짜로 설정해줘야 합니다.
    $("#datepicker1, #datepicker2").datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
});

$(document).ready(function () {
    // 게시판
    $('.my_tab a').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.my_tab a').removeClass('active');
        $('.tab_content').removeClass('active');


        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

});

//추천도서
$(document).ready(function () {
    // 게시판
    $('.reco_tab a').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.reco_tab a').removeClass('active');
        $('.tab_content').removeClass('active');


        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

});

//추천도서_키워드클릭시
$(function () {
    $('.rebooks_wrap_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        arrows: false,
        swipe: false,
        infinite: true,
        slidesToShow: 1,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToScroll: 1,
        centerMode: true,
    });
});

//사서추천
$(function () {
    $('.rebooks_wrap_slide_01').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 5,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 2160,
                settings: {
                    slidesToShow: 6,


                }
					},
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 5,

                }
					},
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 6,

                }
					}
				]

    });

    $('.rebooks_wrap_slide_01').slick('goTo', 1);

});

//빅데이터
$(document).ready(function () {
    // 게시판
    $('.recom_tab a').click(function () {

        var tab_id = $(this).attr('data-tab');

        $('.recom_tab a').removeClass('active');
        $('.tab_contentt').removeClass('active');


        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

});

$(function () {
    $('.rebooks_wrap_slide_02').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 6

    });


});

$(function () {
    $('.rebooks_wrap_slide_03').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 6

    });


});
$(function () {
    $('.rebooks_wrap_slide_04').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 6

    });


});

$(function () {
    $('.rebooks_wrap_slide_05').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 6
    });


});
$(function () {
    $('.rebooks_wrap_slide_06').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 6
    });

});
