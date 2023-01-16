import LazyLoad from 'vanilla-lazyload';
// import { Fancybox } from '@fancyapps/ui';
// import AirDatepicker from 'air-datepicker';

// components
import BurgerMenu from './components/burgerMenu';
import MobileSearch from './components/mobileSearch';
import Tabs from './components/tabs';
import Accordion from './components/accordion';
import sidebarSlider from './components/sidebarSlider';
import detailTabsSlider from './components/detailTabsSlider';
import initVideo from './components/video';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  new BurgerMenu(document.querySelector(BurgerMenu.selectors.header));

  new MobileSearch(document.querySelector(MobileSearch.selectors.header));

  sidebarSlider();

  detailTabsSlider();

  document.querySelectorAll(Tabs.selectors.tab_list).forEach((tablist) => new Tabs(tablist));

  document.querySelectorAll(Accordion.selectors.accordion).forEach((element) => new Accordion(element, 0));

  initVideo();

  // document.querySelectorAll('.btn--toggle-gray').forEach((btn) => {
  //   btn.addEventListener('click', () => {
  //     const useEl = btn.querySelector('use');
  //     const textEl = btn.querySelector('span');

  //     const useElAttr = useEl.getAttribute('href');

  //     const arr = useElAttr.split('#');

  //     if (arr[1] === 'square') {
  //       useEl.setAttribute('href', `${arr[0]}#square_active`);
  //       textEl.textContent = 'Добавлена в список';
  //     } else {
  //       useEl.setAttribute('href', `${arr[0]}#square`);
  //       textEl.textContent = 'Добавить в список';
  //     }
  //   });
  // });

  // new AirDatepicker('#input');
});
