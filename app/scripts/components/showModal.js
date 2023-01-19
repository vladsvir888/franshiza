import { Fancybox } from '@fancyapps/ui';

const showModal = () => {
  document.querySelectorAll('.statistics__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      Fancybox.show([{ src: '#modal_login', type: 'inline' }]);
    });
  });
};

export default showModal;
