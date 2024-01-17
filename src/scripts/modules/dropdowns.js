export default class Dropdown {
  constructor(selector) {
    this.dropdowns = document.querySelectorAll(`${selector}`);
    this.init();
  }

  init() {
    this.dropdowns.forEach((item) => {
      const [title, content] = item.children;
      title.addEventListener('click', () => {
        Dropdown.toggle(item, content);
      });
    });
  }

  static toggle(item, content) {
    const contentEl = content;
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      contentEl.style.height = '0px';
    } else {
      item.classList.add('active');
      contentEl.style.height = `${content.scrollHeight}px`;
    }
  }
}
