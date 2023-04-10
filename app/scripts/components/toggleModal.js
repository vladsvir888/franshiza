import { Fancybox } from '@fancyapps/ui';
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru';

const toggleModal = () => {
  window.Fancybox = window.Fancybox ? window.Fancybox : Fancybox;

  Fancybox.bind('[data-fancybox]', {
    l10n: ru,
    showClass: 'fancybox-fadeIn',
  });

  document.querySelectorAll('.modal__close-btn').forEach((closeBtn) => {
    closeBtn?.addEventListener('click', () => {
      Fancybox.close([{ src: '#send_request', type: 'inline' }]);

      if (!closeBtn.classList.contains('modal__footer-btn')) return;

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 200);
    });
  });
};

export default toggleModal;
