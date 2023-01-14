import LazyLoad from 'vanilla-lazyload';
// import { Fancybox } from '@fancyapps/ui';
// import AirDatepicker from 'air-datepicker';

// components
import BurgerMenu from './components/burgerMenu';
import MobileSearch from './components/mobileSearch';
// import Tabs from './components/tabs';
// import Accordion from './components/accordion';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  new BurgerMenu(document.querySelector(BurgerMenu.selectors.header));
  new MobileSearch(document.querySelector(MobileSearch.selectors.header));

  // document.querySelectorAll(Tabs.selectors.tab_list).forEach((tablist) => new Tabs(tablist));

  // document.querySelectorAll(Accordion.selectors.accordion).forEach((element) => new Accordion(element, 0));

  // new AirDatepicker('#input');
});
