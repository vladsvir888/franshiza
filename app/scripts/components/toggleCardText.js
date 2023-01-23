const toggleCardText = () => {
  document.querySelectorAll('.card-block__toggle').forEach((btn) => {
    btn?.addEventListener('click', () => {
      btn.closest('.card-block').classList.toggle('card-block--show');
    });
  });
};

export default toggleCardText;
