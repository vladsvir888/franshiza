import * as focusTrap from 'focus-trap';

class BurgerMenu {
  static selectors = {
    btn: '.burger',
    menu: '.burger-menu',
    header: '.header',
    close: '.burger-menu__close',
    content: '.burger-menu__content',
  };

  static classes = {
    menu: 'burger-menu--active',
  };

  constructor(containerEl) {
    this.btn = containerEl.querySelector(BurgerMenu.selectors.btn);
    this.menu = containerEl.querySelector(BurgerMenu.selectors.menu);
    this.trap = focusTrap.createFocusTrap(this.menu);
    this.close = containerEl.querySelector(BurgerMenu.selectors.close);

    this.btn.addEventListener('click', this.onClick.bind(this));
    this.menu.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onClick(e) {
    const { target } = e;

    // если target - это любой элемент в модалке и он не равен close btn, то выходим
    if (target.closest(BurgerMenu.selectors.content) && !target.closest(BurgerMenu.selectors.close)) {
      return;
    }

    if (this.menu.classList.contains(BurgerMenu.classes.menu)) {
      this.btn.setAttribute('aria-expanded', false);
      this.menu.classList.remove(BurgerMenu.classes.menu);
      this.trap.deactivate();
      document.body.classList.remove('lock');
    } else {
      this.btn.setAttribute('aria-expanded', true);
      this.menu.classList.add(BurgerMenu.classes.menu);
      this.trap.activate();
      document.body.classList.add('lock');
    }
  }

  onKeyDown(event) {
    if (
      !(
        event.code === 'Escape' && this.menu.classList.contains(BurgerMenu.classes.menu)
      )
    ) {
      return;
    }

    this.btn.setAttribute('aria-expanded', false);
    this.menu.classList.remove(BurgerMenu.classes.menu);
    this.trap.deactivate();
  }
}

export default BurgerMenu;
