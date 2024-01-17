// На элемент с кнопками табов ставим атрибут
// (data-tabs="селекторКонтейнера с самим контентом табов")
// Для того чтобы табы работали по ховеру надо добавить атрибут data-tabs-hover
export default class Tabs {
  constructor() {
    this.allTabs = document.querySelectorAll('[data-tabs]');
    this.init();
  }

  init() {
    this.allTabs.forEach((tabs) => {
      const event = tabs.hasAttribute('data-tabs-hover');
      const tabsContent = Array.from(tabs.children);
      const tabPages = document.querySelectorAll(`.${tabs.getAttribute('data-tabs')} > *`);
      tabsContent.forEach((elem, index) => {
        elem.setAttribute('data-tab-page', index);
        elem.addEventListener(event ? 'mouseenter' : 'click', () => {
          tabsContent.forEach((e) => e.classList.remove('active'));
          tabPages.forEach((item) => item.classList.remove('active'));

          elem.classList.add('active');
          try {
            tabPages[elem.getAttribute('data-tab-page')].classList.add('active');
          } catch (e) {
            console.error(e);
          }
        });
      });
    });
  }
}
