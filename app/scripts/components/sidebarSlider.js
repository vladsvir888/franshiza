import Swiper, { Autoplay } from 'swiper';

const sidebarSlider = () => {
  new Swiper('.sidebar-slider', {
    modules: [Autoplay],
    direction: 'vertical',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
};

export default sidebarSlider;
