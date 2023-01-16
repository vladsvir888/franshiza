import * as focusTrap from 'focus-trap';

import MobileSearch from './mobileSearch';

class BurgerMenu {
  static selectors = {
    header: '.header',
    mobile_search: '.mobile-search',
    btn: '.burger',
    menu: '.burger-menu',
    close: '.burger-menu__close',
    content: '.burger-menu__content',
    search: '.burger-menu__search',
  };

  static classes = {
    active_menu: 'burger-menu--active',
    active_mobile_search: 'mobile-search--active',
  };

  constructor(containerEl) {
    this.btn = containerEl.querySelector(BurgerMenu.selectors.btn);
    this.menu = containerEl.querySelector(BurgerMenu.selectors.menu);
    this.trap = focusTrap.createFocusTrap(this.menu);
    this.close = containerEl.querySelector(BurgerMenu.selectors.close);
    this.mobileSearch = containerEl.querySelector(BurgerMenu.selectors.mobile_search);

    this.btn.addEventListener('click', this.onClick.bind(this));
    this.menu.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onClick(e) {
    const { target } = e;

    // если target - это любой элемент в модалке и он не равен закрывающей кнопке, и он не равен кнопке-поиску, то выходим
    if (
      target.closest(BurgerMenu.selectors.content)
      && !target.closest(BurgerMenu.selectors.close)
      && !target.closest(BurgerMenu.selectors.search)) {
      return;
    }

    if (this.menu.classList.contains(BurgerMenu.classes.active_menu)) {
      this.btn.setAttribute('aria-expanded', false);
      this.menu.classList.remove(BurgerMenu.classes.active_menu);
      this.trap.deactivate();
      document.body.classList.remove('lock');

      if (
        target.closest(BurgerMenu.selectors.search)
        && !this.mobileSearch.classList.contains(BurgerMenu.classes.active_mobile_search)
      ) {
        setTimeout(() => {
          this.mobileSearch.classList.add(BurgerMenu.classes.active_mobile_search);

          this.mobileSearch.animate(MobileSearch.config, {
            duration: 500,
          });
        }, 200);
      }
    } else {
      this.btn.setAttribute('aria-expanded', true);
      this.menu.classList.add(BurgerMenu.classes.active_menu);
      this.trap.activate();
      document.body.classList.add('lock');
    }
  }

  onKeyDown(event) {
    if (
      !(
        event.code === 'Escape'
        && this.menu.classList.contains(BurgerMenu.classes.active_menu)
      )
    ) {
      return;
    }

    this.btn.setAttribute('aria-expanded', false);
    this.menu.classList.remove(BurgerMenu.classes.active_menu);
    this.trap.deactivate();
  }
}

export default BurgerMenu;
