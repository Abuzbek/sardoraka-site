const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var galleryThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
var galleryTop = new Swiper(".gallery-top", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs,
  },
});
const btnNav = document.querySelector(".navbar-btn");
const navLinks = document.querySelector(".navbar-links");
const overlayNav = document.querySelector(".overlay-nav");
btnNav.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlayNav.classList.toggle('hidden')
});
overlayNav.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlayNav.classList.toggle('hidden')
});
