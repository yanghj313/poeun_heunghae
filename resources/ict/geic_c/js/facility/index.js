$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});

$(document).ready(function () {
  // 슬라이드 이미지 클릭 시
  $(".grid-item img").click(function () {
    // 모달 이미지 설정
    $("#modal-image").attr("src", $(this).attr("src"));
    $("#caption").text(
      $(this).siblings(".title-wrapper").find(".content-title").text(),
    );
    $("#modal").fadeIn();
  });

  $(".close").click(function () {
    $("#modal").fadeOut();
  });

  // 모달 외부 클릭 시 닫기
  $(window).click(function (event) {
    if ($(event.target).is("#modal")) {
      $("#modal").fadeOut();
    }
  });
});
