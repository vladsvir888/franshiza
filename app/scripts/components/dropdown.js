class Dropdown {
  static selectors = {
    dropdown: '.dropdown',
    btn: '.dropdown__btn',
    menu: '.dropdown__menu',
    menu_btn_active: '.dropdown__menu-btn--active',
  };

  static classes = {
    dropdown_active: 'dropdown--active',
    menu_btn: 'dropdown__menu-btn',
    menu_btn_active: 'dropdown__menu-btn--active',
  };

  constructor(containerEl) {
    this.dropdown = containerEl;
    this.btn = this.dropdown.querySelector(Dropdown.selectors.btn);
    this.btns = this.dropdown.querySelectorAll(Dropdown.selectors.btn);
    this.menu = this.dropdown.querySelector(Dropdown.selectors.menu);

    document.addEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {
    const { target } = e;

    if (
      target.closest(Dropdown.selectors.dropdown)
      && !this.dropdown.classList.contains(Dropdown.classes.dropdown_active)
    ) {
      this.dropdown.classList.add(Dropdown.classes.dropdown_active);
      this.btn.setAttribute('aria-expanded', true);
    } else {
      this.dropdown.classList.remove(Dropdown.classes.dropdown_active);
      this.btn.setAttribute('aria-expanded', false);
    }

    if (target.classList.contains(Dropdown.classes.menu_btn)) {
      const activeEl = this.dropdown.querySelector(Dropdown.selectors.menu_btn_active);

      if (activeEl) {
        activeEl.classList.remove(Dropdown.classes.menu_btn_active);
      }

      target.classList.add(Dropdown.classes.menu_btn_active);

      const text = target.textContent;

      this.btn.querySelector('span').textContent = text;
    }
  }
}

export default Dropdown;
