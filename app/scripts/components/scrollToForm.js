const scrollToForm = () => {
  document.querySelector('.btn--sticky').addEventListener('click', () => {
    const form = document.querySelector('.form-photo-block');

    form.scrollIntoView();
  });
};

export default scrollToForm;
