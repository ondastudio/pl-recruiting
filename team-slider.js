document.addEventListener("DOMContentLoaded", () => {
  const testimonialSwiper = new Swiper(".swiper.is-testimonial", {
    speed: 600,
    spaceBetween: 40,
    direction: "horizontal",
    slideActiveClass: "is-active",
    slideToClickedSlide: true,
    slidesPerView: "auto",
    keyboard: true
  });

  if (window.innerWidth < 992) {
    const teamSwiper = new Swiper(".swiper.is-team", {
      speed: 600,
      spaceBetween: 40,
      direction: "horizontal",
      slideActiveClass: "is-active",
      slideToClickedSlide: true,
      slidesPerView: "auto",
      keyboard: true
    });
  }
});