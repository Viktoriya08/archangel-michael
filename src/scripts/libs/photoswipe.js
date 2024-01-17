/*
Легковесная замена fancybox
Документация: https://photoswipe.com/getting-started/
*/

import PhotoSwipeLightbox from 'photoswipe';

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  });
  lightbox.init();
});
