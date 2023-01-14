class MobileSearch {
  static selectors = {
    header: '.header',
    header_tel: '.header__tel-block',
    search: '.mobile-search',
    btn: '.mobile-search__open-btn',
    close: '.mobile-search__close-btn',
  }

  static classes = {
    search_active: 'mobile-search--active',
  }

  static config = [
    {
      width: '0%',
    },
    {
      width: '100%',
    },
  ]

  constructor(containerEl) {
    this.search = containerEl.querySelector(MobileSearch.selectors.search);
    this.searchBtn = containerEl.querySelector(MobileSearch.selectors.btn);
    this.headerTel = containerEl.querySelector(MobileSearch.selectors.header_tel);
    this.closeBtn = containerEl.querySelector(MobileSearch.selectors.close);

    this.searchBtn.addEventListener('click', this.onClick.bind(this));
    this.closeBtn.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    if (this.search.classList.contains(MobileSearch.classes.search_active)) {
      this.search.classList.remove(MobileSearch.classes.search_active);

      this.search.animate(MobileSearch.config, {
        duration: 500,
        direction: 'reverse',
      });
    } else {
      this.search.classList.add(MobileSearch.classes.search_active);

      this.search.animate(MobileSearch.config, {
        duration: 500,
      });
    }
  }
}

export default MobileSearch;
