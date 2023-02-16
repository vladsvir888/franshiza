const toggleInputPassword = () => {
  const btns = document.querySelectorAll('.input-block__btn-eye');

  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.input-block__input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';

      input.setAttribute('type', type);

      btn.classList.toggle('slash');
    });
  });
};

export default toggleInputPassword;
