class Accordion {
  static selectors = {
    accordion: '.accordion',
    item: '.accordion__item',
    button: '.accordion__btn[aria-expanded]',
  }

  constructor(element) {
    this.accordion = element;
    this.items = [...this.accordion.querySelectorAll(Accordion.selectors.button)];

    this.items.forEach((item) => {
      item.addEventListener('click', this.onClick.bind(this));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setMaxHeight(element) {
    return `${element.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize, 10)}rem`;
  }

  onClick(e) {
    const {
      target,
    } = e;

    const btn = target.closest(Accordion.selectors.button);
    const content = btn.parentElement.nextElementSibling;
    const item = btn.closest(Accordion.selectors.item);

    if (!item.classList.contains('show')) {
      content.style.maxHeight = this.setMaxHeight(content);
      btn.setAttribute('aria-expanded', true);
      item.classList.add('show');
    } else {
      content.removeAttribute('style');
      btn.setAttribute('aria-expanded', false);
      item.classList.remove('show');
    }
  }
}

export default Accordion;
