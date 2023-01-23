const toggleCardText = () => {
  document.querySelectorAll('.card-block__toggle').forEach((btn) => {
    btn?.addEventListener('click', () => {
      const closestEl = btn.closest('.card-block');
      const text = btn.querySelector('.btn__text');

      if (!closestEl.classList.contains('card-block--show')) {
        closestEl.classList.add('card-block--show');
        text.textContent = 'Свернуть';
      } else {
        closestEl.classList.remove('card-block--show');
        text.textContent = 'Развернуть';
      }
    });
  });
};

export default toggleCardText;
