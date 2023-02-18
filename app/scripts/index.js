// components
import BurgerMenu from './components/burgerMenu';
import MobileSearch from './components/mobileSearch';
import Tabs from './components/tabs';
import Accordion from './components/accordion';
import sidebarSlider from './components/sidebarSlider';
import detailTabsSlider from './components/detailTabsSlider';
import initVideo from './components/video';
import Wishlist from './components/wishlist';
import scrollToForm from './components/scrollToForm';
import toggleModal from './components/toggleModal';
import topBtn from './components/topBtn';
import similarFranchiseSlider from './components/similarFranchiseSlider';
import toggleText from './components/toggleText';
import initDatepicker from './components/datepicker';
import initValidation from './components/validation';
import toggleInputPassword from './components/inputPassword';
import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu(document.querySelector(BurgerMenu.selectors.header));

  new MobileSearch(document.querySelector(MobileSearch.selectors.header));

  sidebarSlider();

  detailTabsSlider('.detail-tabs');
  detailTabsSlider('.detail-accordion');

  document.querySelectorAll(Tabs.selectors.tab_list).forEach((tablist) => new Tabs(tablist));

  document.querySelectorAll(Accordion.selectors.accordion).forEach((element) => new Accordion(element));

  initVideo();

  new Wishlist();

  scrollToForm();

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

  initDatepicker();

  initValidation();

  toggleInputPassword();

  toggleModal();
});
