
const root = document.documentElement;

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  effect: 'fade', // 페이드 효과 사용
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}`;
    }
  }
});

function setImgSrc() {
  if (window.matchMedia("(max-width: 430px)").matches) {
    // The view width is less than or equal to 430 pixels
    const images = document.querySelectorAll(".main_carousel .swiper-slide img");
    images.forEach((img, index) => {
      img.src = `./img/Frame${index + 7}.png`;
    });
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    // The view width is less than or equal to 768 pixels
    const images = document.querySelectorAll(".main_carousel .swiper-slide img");
    images.forEach((img, index) => {
      img.src = `./img/Frame${index + 4}.png`;
    });
  } else if (window.matchMedia("(min-width: 769px)").matches) {
    // The view width is greater than 768 pixels
    const images = document.querySelectorAll(".main_carousel .swiper-slide img");
    images.forEach((img, index) => {
      img.src = `./img/Frame${index + 1}.png`;
    });
  }
}

// Call the function when the webpage is first loaded
setImgSrc();

// Call the function when the resize event is triggered
window.addEventListener("resize", setImgSrc);