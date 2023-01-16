import Swiper, { Pagination, Navigation } from 'swiper';

const detailTabsSlider = () => {
  new Swiper('.detail-tabs-slider__inner', {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export default detailTabsSlider;
