import Swiper, { Pagination, Navigation } from 'swiper';
// import { Fancybox } from '@fancyapps/ui';
// import ru from '@fancyapps/ui/src/Fancybox/l10n/ru';

const detailTabsSlider = (selector) => {
  // let gallery = [];

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
      500: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
    loop: true,
    // on: {
    //   init() {
    //     const slides = this.slides.filter((slide) => !slide.classList.contains('swiper-slide-duplicate'));

    //     gallery = slides.map((slide) => {
    //       const img = slide.querySelector('img');

    //       return {
    //         src: img.src,
    //         thumb: img.src,
    //       };
    //     });
    //   },

    //   click() {
    //     Fancybox.show(gallery, {
    //       dragToClose: false,
    //       l10n: ru,
    //       showClass: 'fancybox-fadeIn',
    //       Toolbar: {
    //         display: ['close', 'counter'],
    //       },
    //       // Thumbs: {
    //       //   autoStart: false,
    //       // },
    //     });
    //   },
    // },
  });
};

export default detailTabsSlider;
