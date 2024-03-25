const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerGroup: 1,
  //   autoplay: {
  //     delay: 2000,
  //   },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});
