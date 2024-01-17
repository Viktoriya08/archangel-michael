/* eslint-disable operator-linebreak */
/* eslint-disable prefer-template */
// eslint-disable-next-line max-classes-per-file
export class customCursors {
  containers;

  activeCursors = [];

  constructor() {
    this.containers = document.querySelectorAll('[data-custom-cursor]').length
      ? document.querySelectorAll('[data-custom-cursor]')
      : [];
    if (!this.containers.length) return;
    this.#init();
  }

  #init() {
    this.containers.forEach((container) => {
      // eslint-disable-next-line no-use-before-define, new-cap
      this.activeCursors.push(new customCursor(container));
    });
  }
}

class customCursor {
  container;

  cursorTemplate;

  templateBounds = {
    height: 0,
    width: 0,
  };

  noCursorElems;

  constructor(container) {
    this.container = container || null;
    if (!this.container) return;
    this.noCursorElems =
			container.querySelectorAll('[data-default-cursor]') || [];
    this.cursorTemplate =
			container.querySelector(container.getAttribute('data-custom-cursor')) ||
			null;
    if (!this.cursorTemplate) return;
    this.#init();
  }

  #init() {
    this.templateBounds.height = this.cursorTemplate.offsetHeight / 2;
    this.templateBounds.width = this.cursorTemplate.offsetWidth / 2;

    this.container.addEventListener('mouseenter', () => {
      if (window.matchMedia('(max-width: 1024px)').matches) return;
      this.cursorTemplate.classList.add('shown');
    });

    this.container.addEventListener('mousemove', (e) => {
      e.stopPropagation();
      if (window.matchMedia('(max-width: 1024px)').matches) return;
      const halfScreenWidth = document.documentElement.clientWidth / 2;
      // Если мышь находится в правой половине экрана
      if (e.clientX >= halfScreenWidth) {
        this.cursorTemplate.classList.remove('custom-cursor_left');
        // eslint-disable-next-line brace-style
      }
      // Если мышь находится в левой половине экрана
      else {
        this.cursorTemplate.classList.add('custom-cursor_left');
      }
      this.cursorTemplate.style.top =
				e.clientY - this.templateBounds.height + 'px';
      this.cursorTemplate.style.left =
				e.clientX - this.templateBounds.width + 'px';
    });

    this.container.addEventListener('mouseleave', () => {
      if (window.matchMedia('(max-width: 1024px)').matches) return;
      this.cursorTemplate.classList.remove('shown');
    });

    Array.from(this.noCursorElems).forEach((elem) => {
      // elem.style.pointerEvents = "all"

      elem.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        if (window.matchMedia('(max-width: 1024px)').matches) return;
        this.cursorTemplate.classList.remove('shown');
      });

      elem.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        if (window.matchMedia('(max-width: 1024px)').matches) return;
        this.cursorTemplate.classList.add('shown');
      });
    });
  }
}
