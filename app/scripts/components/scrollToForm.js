const scrollToForm = () => {
  document.querySelectorAll('.btn--scroll').forEach((btn) => {
    btn?.addEventListener('click', () => {
      const form = document.querySelector('.form-scroll');

      form.scrollIntoView();
    });
  });
};

export default scrollToForm;
