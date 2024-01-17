/**
 * @param {querySelector} burger - burger selector
 * @param {querySelector} menu - menu selector
 */

export default function initMobilemenu(burgerClass, menuClass, headerClass) {
  const burger = document.querySelector(burgerClass);
  if (!burger) return;

  const menu = document.querySelector(menuClass);
  const header = document.querySelector(headerClass);
  const body = document.querySelector('body');

  function outsideEvtListener(evt) {
    if (evt.target === menu || menu.contains(evt.target)) return;
    burger.classList.toggle('opened');
    header.classList.toggle('opened');
    body.classList.toggle('mobilemenu-opened');
    document.removeEventListener('click', outsideEvtListener);
  }

  burger.addEventListener('click', () => {
    if (body.classList.contains('mobilemenu-opened')) {
      document.removeEventListener('click', outsideEvtListener);
    } else {
      setTimeout(() => {
        document.addEventListener('click', outsideEvtListener);
      });
    }
    burger.classList.toggle('opened');
    header.classList.toggle('opened');
    body.classList.toggle('mobilemenu-opened');
  });
}
