import Swiper, { Pagination, Navigation } from 'swiper';

const similarFranchiseSlider = (selector) => {
  new Swiper(`${selector} .swiper`, {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: `${selector} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
    loop: true,
  });
};

export default similarFranchiseSlider;
