class Accordion {
  static selectors = {
    accordion: '.accordion',
    button: '.accordion__btn',
  }

  constructor(element, index) {
    this.accordion = element;
    this.items = [...this.accordion.querySelectorAll(Accordion.selectors.button)];
    this.activeIndex = index;

    this.items.forEach((item, i) => {
      item.addEventListener('click', this.onClick.bind(this));

      const content = item.parentElement.nextElementSibling;

      if (this.activeIndex === i) {
        content.style.maxHeight = this.setMaxHeight(content);
      }
    });
  }

  setMaxHeight(element) {
    return `${element.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize)}rem`;
  }

  onClick(e) {
    const {
      target,
    } = e;
    const btn = target.closest(Accordion.selectors.button);
    const currentIndex = this.items.indexOf(btn);
    const activeSection = this.items[this.activeIndex].parentElement.nextElementSibling;
    const btnActiveSection = this.items[this.activeIndex];
    const currentSection = btn.parentElement.nextElementSibling;

    if (this.activeIndex === currentIndex) {
      if (currentSection.style.maxHeight) {
        currentSection.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      } else {
        currentSection.style.maxHeight = this.setMaxHeight(currentSection);
        btn.setAttribute('aria-expanded', true);
      }
    } else {
      activeSection.removeAttribute('style');
      currentSection.style.maxHeight = this.setMaxHeight(currentSection);
      btnActiveSection.setAttribute('aria-expanded', false);
      btn.setAttribute('aria-expanded', true);

      this.activeIndex = currentIndex;
    }
  }
}

export default Accordion;
