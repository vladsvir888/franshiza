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

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  new BurgerMenu(document.querySelector(BurgerMenu.selectors.header));

  new MobileSearch(document.querySelector(MobileSearch.selectors.header));

  sidebarSlider();

  detailTabsSlider();

  document.querySelectorAll(Tabs.selectors.tab_list).forEach((tablist) => new Tabs(tablist));

  document.querySelectorAll(Accordion.selectors.accordion).forEach((element) => new Accordion(element, 1));

  initVideo();
  addToList();
  scrollToForm();
  showModal();

  // new AirDatepicker('#input');
});
