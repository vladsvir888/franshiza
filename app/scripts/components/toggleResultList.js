const toggleResultList = () => {
  const toggleBtn = document.querySelector('.form-block__toggle');
  const toggleContent = document.querySelector('.form-block__toggle-list');

  toggleBtn?.addEventListener('click', () => {
    if (!toggleBtn.classList.contains('form-block__toggle--active')) {
      toggleBtn.classList.add('form-block__toggle--active');
      toggleContent.style.maxHeight = `${toggleContent.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize)}rem`;
    } else {
      toggleBtn.classList.remove('form-block__toggle--active');
      toggleContent.removeAttribute('style');
    }
  });
};

export default toggleResultList;
