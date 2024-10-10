$(function () {
  var now = new Date();

  let y = now.getFullYear();
  let mo = now.getMonth() + 1;
  let d = now.getDate();
  let dow = now.getDay();
  var week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  var today = new Date().getDay();
  var todayLabel = week[today];

  $("#years").text(y);
  $("#months").text(mo);
  $("#days").text(d);
  $("#dayofweeks").text(todayLabel);
});

//공지사항
$(function () {
  var swiper = new Swiper(".notice-slide-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    /*
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".notice-slide", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});

//시설안내
$(document).ready(function () {
  $(".faci_tab a").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".faci_tab a").removeClass("active");
    $(".tab_content").removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });
});

$(function () {
  $(".floor_slide_01").bxSlider({
    infiniteLoop: false,
    controls: false,
    pager: true,
    slideMargin: 40,
  });
});

$(function () {
  $(".floor_slide_02").bxSlider({
    infiniteLoop: false,
    controls: false,
    pager: true,
    slideMargin: 40,
  });
});

$(function () {
  $(".floor_slide_03").bxSlider({
    infiniteLoop: false,
    controls: false,
    pager: true,
    slideMargin: 40,
  });
});

//도서정보
$(function () {
  $(".bookinfo_main")
    .on("init", function (event, slick) {})
    .slick({
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      asNavFor: ".bookinfo_thumbnails",
      focusOnSelect: true,
      lazyLoad: "ondemand",
      variableWidth: false,
      swipeToSlide: true,
      autoplay: false,
      speed: 1000,
      cssEase: "ease-in-out",
    });

  $(".bookinfo_thumbnails").slick({
    infinite: true,
    slidesToShow: 6,
    asNavFor: ".bookinfo_main",
    focusOnSelect: true,
    autoplay: false,
    centerMode: false,
    arrows: false,
    lazyLoad: "ondemand",
    variableWidth: false,
  });
});

//강좌안내
$(function () {
  $(".bslide-box").bxSlider({
    infiniteLoop: false,
    slideWidth: 1800,
    controls: false,
    pager: true,
    slideMargin: 40,
  });
});
