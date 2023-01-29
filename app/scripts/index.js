// components
import BurgerMenu from './components/burgerMenu';
import MobileSearch from './components/mobileSearch';
import Tabs from './components/tabs';
import Accordion from './components/accordion';
import sidebarSlider from './components/sidebarSlider';
import detailTabsSlider from './components/detailTabsSlider';
import initVideo from './components/video';
import addToList from './components/addToList';
import scrollToForm from './components/scrollToForm';
import showModal from './components/showModal';
import Dropdown from './components/dropdown';
import toggleResultList from './components/toggleResultList';
import topBtn from './components/topBtn';
import similarFranchiseSlider from './components/similarFranchiseSlider';
import toggleText from './components/toggleText';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu(document.querySelector(BurgerMenu.selectors.header));

  new MobileSearch(document.querySelector(MobileSearch.selectors.header));

  sidebarSlider();

  detailTabsSlider('.detail-tabs');
  detailTabsSlider('.detail-accordion');

  document.querySelectorAll(Tabs.selectors.tab_list).forEach((tablist) => new Tabs(tablist));

  document.querySelectorAll(Accordion.selectors.accordion).forEach((element) => new Accordion(element, null, 'always_open'));

  initVideo();

  addToList();

  scrollToForm();

  showModal({
    btnSelector: '.statistics__btn',
    modalSelector: '#modal_login',
  });
  showModal({
    btnSelector: '.form-block__modal-btn',
    modalSelector: '#send_request',
    closeSelector: '.modal__footer-btn',
  });

  toggleResultList();

  topBtn();

  toggleText({
    selector: '.card-block__toggle',
    text: 'Развернуть',
    activeText: 'Свернуть',
  });

  toggleText({
    selector: '.review-list__show-more',
    text: 'Развернуть список отзывов',
    activeText: 'Свернуть список отзывов',
  });

  similarFranchiseSlider('.similar-franchise-slider');

  document.querySelectorAll(Dropdown.selectors.dropdown).forEach((element) => new Dropdown(element));
});
