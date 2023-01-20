import Swiper, { Pagination, Navigation } from 'swiper';

const detailTabsSlider = (selector) => {
  new Swiper(`${selector} .detail-tabs-slider__inner`, {
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
      500: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
  });
};

export default detailTabsSlider;
