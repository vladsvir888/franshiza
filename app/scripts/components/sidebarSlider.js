import Swiper, { Autoplay } from 'swiper';

const sidebarSlider = () => {
  new Swiper('.sidebar-slider', {
    modules: [Autoplay],
    spaceBetween: 20,
    direction: 'vertical',
    loop: true,
    speed: 900,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
};

export default sidebarSlider;
