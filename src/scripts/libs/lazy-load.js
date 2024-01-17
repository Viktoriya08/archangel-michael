/*
Ленивая (отложенная) загрузка картинок
Документация плагина: https://github.com/verlok/vanilla-lazyload
*/

import LazyLoad from 'vanilla-lazyload';

const initLazyMedia = () => {
  const initLazyLoad = new LazyLoad({
    elements_selector: '[data-src],[data-srcset]',
    class_loaded: '_lazy-loaded',
    use_native: true,
  });
  initLazyLoad();
};

// Обновить модуль
// lazyMedia.update();

document.addEventListener('DOMContentLoaded', () => {
  initLazyMedia();
});
