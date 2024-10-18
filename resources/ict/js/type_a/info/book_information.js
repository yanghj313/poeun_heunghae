//도서정보
$(function () {
  const mainSlider = new Swiper(".main-slider", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const thumbnailSlider = new Swiper(".thumbnail-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  mainSlider.on("slideChange", () => {
    thumbnailSlider.slideTo(mainSlider.activeIndex);
  });

  thumbnailSlider.on("click", (swiper) => {
    mainSlider.slideTo(swiper.clickedIndex);
  });
});
