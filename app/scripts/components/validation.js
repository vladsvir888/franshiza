import Pristine from 'pristinejs';

const initValidation = () => {
  const config = {
    classTo: 'input-block',
    errorClass: 'input-block--error',
    successClass: 'input-block--success',
    errorTextParent: 'input-block',
    errorTextTag: 'div',
    errorTextClass: 'input-block__message',
  };

  const selectors = {
    form: '.form--validation',
    message: '.input-block__message',
  };

  const forms = document.querySelectorAll(selectors.form);

  if (!forms.length) return;

  Pristine.addValidator('phone-validator', (value) => {
    const regExp = /^\d+$/;

    if (regExp.test(value)) {
      return true;
    }

    return false;
  }, '${1}', 1, false);

  function appendAlertMessage(form) {
    const errorMessages = [...form.querySelectorAll(selectors.message)];

    const str = errorMessages.map((errorMessage) => errorMessage.textContent).join(' ');

    const alertMessage = document.createElement('div');

    alertMessage.setAttribute('role', 'alert');

    alertMessage.classList.add('visually-hidden');

    alertMessage.append(str);

    form.prepend(alertMessage);

    setTimeout(() => {
      alertMessage.remove();
    }, 2000);
  }

  forms.forEach((form) => {
    const pristine = new Pristine(form, config, false);

    form.addEventListener('submit', (e) => {
      const valid = pristine.validate();

      if (!valid) {
        e.preventDefault();

        appendAlertMessage(form);
      }
    });
  });
};

export default initValidation;
