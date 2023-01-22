import { Fancybox } from '@fancyapps/ui';

const showModal = () => {
  document.querySelectorAll('.statistics__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const link = document.head.querySelector('link[data-link="fancybox"]');

      link?.remove();

      Fancybox.show([{ src: '#modal_login', type: 'inline' }]);

      const script = document.createElement('link');
      script.setAttribute('rel', 'stylesheet');
      script.setAttribute('href', './assets/fancybox.min.css');
      script.dataset.link = 'fancybox';

      document.head.prepend(script);
    });
  });
};

export default showModal;
