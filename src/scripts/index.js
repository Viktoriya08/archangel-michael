/* eslint-disable import/no-duplicates */
// LIBS
import initSliders from '@scripts/libs/sliders.js';
// import '@scripts/libs/lazy-load';
// import "@scripts/libs/focus-visible
// import '@scripts/libs/fancyapps';
// import '@scripts/libs/photoswipe';
// eslint-disable-next-line import/no-duplicates
import '@scripts/libs/gsap';
import {
  headerScroll, parallaxEffect, parallaxFooter, parallaxSectionFix, mainLoader,
} from '@scripts/libs/gsap';
// import '@scripts/libs/nouislider';
// import '@scripts/libs/input-mask';
import '@scripts/libs/select';
import '@scripts/libs/counterUp';
import '@scripts/libs/datapicker';

// UTILS
// import webpAvifSupportChecker from '@scripts/utils/imageFormatChecker';

// MODULES
import initMobilemenu from '@scripts/modules/mobileMenu';
import initAnimations from '@scripts/modules/animations';
// import initTableWrapper from '@scripts/modules/tableWrapper';
// import Tabs from '@scripts/modules/tabs';
import Dropdown from '@scripts/modules/dropdowns';
// import Toast from '@scripts/modules/toast';
import Popup from '@scripts/modules/popup';
// import InputFile from '@scripts/modules/inputFile';
import fixHeader from '@scripts/modules/fixHeader';
import { customCursors } from '@scripts/modules/customCursor';
import copyOnClick from '@scripts/modules/copyOnClick';
import videoPlay from '@scripts/modules/videoPlay';

// webpAvifSupportChecker();

document.addEventListener('DOMContentLoaded', () => {
  if (window.host !== 'archangel-michael.localhost') {
    window.initUI();
  }
});

// eslint-disable-next-line func-names
window.initUI = function () {
  initSliders();
  initMobilemenu('.burger', '.header__nav', '.header');
  fixHeader();
  // eslint-disable-next-line no-new, new-cap
  new customCursors();
  initAnimations();
  headerScroll('.header');
  parallaxEffect('[data-paralax]');
  parallaxSectionFix();
  parallaxFooter();
  mainLoader();
  copyOnClick();
  // initTableWrapper();
  // new Tabs();
  // eslint-disable-next-line no-new
  new Dropdown('[data-dropdown]');
  // window.toast = new Toast();
  window.popup = new Popup('[data-popup]');
  // new InputFile('.default-input--file input');
  videoPlay();
};
