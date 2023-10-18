const swiper = new Swiper(".swiper", {
  loop: true,
  initialSlide: 1,
  spaceBetween: 30,
  centeredSlides : true,
  speed: 1000,
  slidesPerView: 1.5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: { 
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides : false,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides : false,
    },
  }
});
