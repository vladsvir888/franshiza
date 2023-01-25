const toggleText = ({ selector, text, activeText }) => {
  document.querySelectorAll(selector).forEach((btn) => {
    btn?.addEventListener('click', () => {
      const parentEl = btn.parentElement;
      const textEl = btn.querySelector('.btn__text');

      if (!parentEl.classList.contains('show')) {
        parentEl.classList.add('show');
        textEl.textContent = activeText;
      } else {
        parentEl.classList.remove('show');
        textEl.textContent = text;
      }
    });
  });
};

export default toggleText;
