class Accordion {
  static selectors = {
    accordion: '.accordion',
    item: '.accordion__item',
    button: '.accordion__btn[aria-expanded]',
  }

  constructor(element, index, type) {
    this.accordion = element;
    this.items = [...this.accordion.querySelectorAll(Accordion.selectors.button)];
    this.activeIndex = index;
    this.type = type;

    if (this.type === 'always_open') {
      this.items.forEach((item) => {
        item.addEventListener('click', this.onClickAlwaysOpen.bind(this));
      });
    } else {
      this.items.forEach((item, i) => {
        item.addEventListener('click', this.onClick.bind(this));

        const content = item.parentElement.nextElementSibling;

        if (this.activeIndex === i) {
          content.style.maxHeight = this.setMaxHeight(content);
          item.setAttribute('aria-expanded', true);
          item.closest(Accordion.selectors.item).classList.add('show');
        }
      });
    }
  }

  setMaxHeight(element) {
    return `${element.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize)}rem`;
  }

  onClickAlwaysOpen(e) {
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

  onClick(e) {
    const {
      target,
    } = e;

    const btn = target.closest(Accordion.selectors.button);

    const currentIndex = this.items.indexOf(btn);
    const currentContent = btn.parentElement.nextElementSibling;
    const currentItem = btn.parentElement.parentElement;

    const activeContent = this.items[this.activeIndex].parentElement.nextElementSibling;
    const activeItem = this.items[this.activeIndex].parentElement.parentElement;
    const btnActiveContent = this.items[this.activeIndex];

    if (this.activeIndex === currentIndex) {
      if (currentContent.style.maxHeight) {
        currentContent.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
        currentItem.classList.remove('show');
      } else {
        currentContent.style.maxHeight = this.setMaxHeight(currentContent);
        btn.setAttribute('aria-expanded', true);
        currentItem.classList.add('show');
      }
    } else {
      activeContent.removeAttribute('style');
      btnActiveContent.setAttribute('aria-expanded', false);
      activeItem.classList.remove('show');

      currentContent.style.maxHeight = this.setMaxHeight(currentContent);
      btn.setAttribute('aria-expanded', true);
      currentItem.classList.add('show');

      this.activeIndex = currentIndex;
    }
  }
}

export default Accordion;
