import Swiper, { Pagination, Navigation } from 'swiper';

const detailTabsSlider = () => {
  new Swiper('.detail-tabs-slider__inner', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
