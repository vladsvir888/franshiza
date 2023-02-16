const toggleInputPassword = () => {
  const btn = document.querySelector('.input-block__btn-eye');
  const input = document.querySelector('.input-block__input-password');

  if (!btn && !input) return;

  btn.addEventListener('click', () => {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';

    input.setAttribute('type', type);

    btn.classList.toggle('slash');
  });
};

export default toggleInputPassword;
