class Wishlist {
  static selectors = {
    btn_toggle: '.btn--toggle',
    form_block_toggle: '.form-block__toggle',
    form_block_toggle_wrap: '.form-block__toggle-wrap',
    form_block_toggle_text: '.form-block__toggle-text',
    form_block_toggle_list: '.form-block__toggle-list',
    num_toggle: '.form-block__toggle-num',
    card: '.js-card',
    title: '.js-title',
    card_text_remove_btn: '.card-text__remove-btn',
  };

  static classes = {
    btn_toggle: 'btn--toggle',
    btn_toggle_active: 'btn--toggle-active',
    form_block_toggle: 'form-block__toggle',
    form_block_toggle_active: 'form-block__toggle--active',
    card_text_remove_btn: 'card-text__remove-btn',
  };

  static strings = {
    btn_toggle_active_text: 'Добавлена в список',
    btn_toggle_text: 'Добавить в список',
    btn_toggle_active_icon: '#square_active',
    btn_toggle_icon: '#square',
  }

  constructor() {
    document.addEventListener('click', this.onClick.bind(this));

    this.products = [];

    this.toggleBtn = document.querySelector(Wishlist.selectors.form_block_toggle);

    if (!this.toggleBtn) return;

    this.numToggle = this.toggleBtn.querySelector(Wishlist.selectors.num_toggle);
    this.toggleWrap = document.querySelector(Wishlist.selectors.form_block_toggle_wrap);
    this.toggleText = this.toggleWrap.querySelector(Wishlist.selectors.form_block_toggle_text);
    this.toggleList = this.toggleWrap.querySelector(Wishlist.selectors.form_block_toggle_list);
  }

  createObjProduct(element) {
    this.parentEl = element.closest(Wishlist.selectors.card);

    if (!this.parentEl) return;

    const dataId = Number(this.parentEl.dataset.id);

    const title = this.parentEl.querySelector(Wishlist.selectors.title);
    const titleText = title.textContent.trim();

    const img = this.parentEl.querySelector('img');
    const imgSrc = img.src;
    const arrImg = imgSrc.split('/');
    const lastElArrImg = arrImg[arrImg.length - 1];
    const imgName = lastElArrImg.split('.')[0];

    // eslint-disable-next-line consistent-return
    return {
      id: dataId,
      title: titleText,
      img: imgName,
    };
  }

  insertHTML() {
    const str = this.products.map((product) => `
        <article class="card-text">
          <picture class="card-text__picture">
            <source type="image/avif" srcset="./assets/images/card_block/${product.img}.avif">
            <source type="image/webp" srcset="./assets/images/card_block/${product.img}.webp">
            <img class="img card-text__img" src="./assets/images/card_block/${product.img}.png" loading="lazy" alt="${product.title}" width="57" height="43">
          </picture>
          <div class="card-text__content">
            <h2 class="title card-text__title">
              <a class="title__link card-text__link" href="#">
                ${product.title}
              </a>
            </h2>
            <button class="btn card-text__remove-btn" data-btn-id="${product.id}">
              <span class="btn__text ">
                Удалить
              </span>
              <svg class="icon btn__icon card-text__remove-icon" aria-hidden="true">
                <use href="./assets/sprites/sprite-mono.svg#close"></use>
              </svg>
            </button>
          </div>
        </article>
      `).join('');

    this.toggleList.innerHTML = '';

    this.toggleList.insertAdjacentHTML('afterbegin', str);
  }

  add(product) {
    this.products.push(product);

    this.insertHTML();
  }

  remove(id) {
    this.products = this.products.filter((product) => product.id !== id);

    this.insertHTML();
  }

  setHeightToggleWrap() {
    const style = window.getComputedStyle(this.toggleWrap);

    this.toggleWrap.style.maxHeight = `${this.toggleWrap.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize, 10) + parseInt(style.marginBottom, 10)}rem`;
  }

  updateCounter(type) {
    let num = Number(this.numToggle.textContent);

    if (type === 'plus') {
      num += 1;
    } else {
      num -= 1;
    }

    this.numToggle.textContent = num;
  }

  toggleVisibilityText() {
    if (!this.products.length) {
      this.toggleText.style.display = 'block';
    } else {
      this.toggleText.style.display = 'none';
    }
  }

  // eslint-disable-next-line class-methods-use-this, consistent-return
  toggleWishlistBtn(element, isRemove) {
    const useEl = element.querySelector('use');
    const textEl = element.querySelector('span');

    const useElAttr = useEl.getAttribute('href');

    const arr = useElAttr.split('#');

    if (!element.classList.contains(Wishlist.classes.btn_toggle_active)) {
      element.classList.add(Wishlist.classes.btn_toggle_active);
      useEl.setAttribute('href', `${arr[0]}${Wishlist.strings.btn_toggle_active_icon}`);
      textEl.textContent = `${Wishlist.strings.btn_toggle_active_text}`;

      return 'add_to_wishlist';
    }

    if (isRemove) {
      element.classList.remove(Wishlist.classes.btn_toggle_active);
      useEl.setAttribute('href', `${arr[0]}${Wishlist.strings.btn_toggle_icon}`);
      textEl.textContent = `${Wishlist.strings.btn_toggle_text}`;
    }
  }

  onClickFormToggleBtn() {
    if (!this.toggleBtn.classList.contains(Wishlist.classes.form_block_toggle_active)) {
      this.toggleBtn.classList.add(Wishlist.classes.form_block_toggle_active);

      this.setHeightToggleWrap();
    } else {
      this.toggleBtn.classList.remove(Wishlist.classes.form_block_toggle_active);
      this.toggleWrap.removeAttribute('style');
    }
  }

  onClickWishlistToggleBtn(element) {
    const result = this.toggleWishlistBtn(element);

    if (!this.toggleBtn) return;

    if (result === 'add_to_wishlist') {
      this.updateCounter('plus');

      const product = this.createObjProduct(element);

      this.add(product);

      this.toggleVisibilityText();

      if (this.toggleBtn.classList.contains(Wishlist.classes.form_block_toggle_active)) {
        this.setHeightToggleWrap();
      }

      element.setAttribute('onclick', `window.location.href = '${window.location.origin}/franchise/catalog.html'`);
    }
  }

  onClickRemoveBtn(element) {
    this.updateCounter('minus');

    const elementId = Number(element.dataset.btnId);

    this.remove(elementId);

    this.toggleVisibilityText();

    if (this.toggleBtn.classList.contains(Wishlist.classes.form_block_toggle_active)) {
      this.setHeightToggleWrap();
    }

    this.toggleWishlistBtn(document.querySelector(`.btn--toggle[data-btn-id="${elementId}"]`), true);
  }

  onClick(e) {
    const targetEl = e.target;

    const closestEl = targetEl.closest('button');

    if (!closestEl) return;

    if (closestEl.classList.contains(Wishlist.classes.btn_toggle)) {
      this.onClickWishlistToggleBtn(closestEl);
    } else if (closestEl.classList.contains(Wishlist.classes.form_block_toggle)) {
      this.onClickFormToggleBtn();
    } else if (closestEl.classList.contains(Wishlist.classes.card_text_remove_btn)) {
      this.onClickRemoveBtn(closestEl);
    }
  }
}

export default Wishlist;
