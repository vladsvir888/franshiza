import { Fancybox } from '@fancyapps/ui';

const showModal = ({ btnSelector, modalSelector, closeSelector }) => {
  document.querySelectorAll(btnSelector).forEach((btn) => {
    btn.addEventListener('click', () => {
      const link = document.head.querySelector('link[data-link="fancybox"]');

      link?.remove();

      Fancybox.show([{ src: modalSelector, type: 'inline' }]);

      const script = document.createElement('link');
      script.setAttribute('rel', 'stylesheet');
      script.setAttribute('href', './assets/fancybox.min.css');
      script.dataset.link = 'fancybox';

      document.head.prepend(script);
    });
  });

  document.querySelector(closeSelector)?.addEventListener('click', () => {
    Fancybox.close([{ src: modalSelector, type: 'inline' }]);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  });
};

export default showModal;
