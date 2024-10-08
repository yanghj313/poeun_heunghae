$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});
