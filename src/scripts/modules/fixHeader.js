/* eslint-disable eqeqeq */
export default function fixHeader() {
  const header = document.querySelector('.header-1');

  if (!header) return;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition == 0) {
      header.classList.remove('scroll');
    } else {
      header.classList.add('scroll');
    }
  });
}
