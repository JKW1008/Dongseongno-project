let second_swiper = new Swiper(".second-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    431: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 96,
    },
  },
  mousewheel: false,
  keyboard: true,

});

