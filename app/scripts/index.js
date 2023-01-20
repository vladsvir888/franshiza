import LazyLoad from 'vanilla-lazyload';
// import AirDatepicker from 'air-datepicker';

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
import toggleList from './components/toggleList';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  new BurgerMenu(document.querySelector(BurgerMenu.selectors.header));

  new MobileSearch(document.querySelector(MobileSearch.selectors.header));

  sidebarSlider();

  detailTabsSlider('.detail-tabs');
  detailTabsSlider('.detail-accordion');

  document.querySelectorAll(Tabs.selectors.tab_list).forEach((tablist) => new Tabs(tablist));

  document.querySelectorAll(Accordion.selectors.accordion).forEach((element) => new Accordion(element, 0));

  initVideo();
  addToList();
  scrollToForm();
  showModal();
  toggleList();

  document.querySelectorAll(Dropdown.selectors.dropdown).forEach((element) => new Dropdown(element));

  // new AirDatepicker('#input');
});
