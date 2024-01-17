// Для вызова успешного тоста
// window.toast.success('Спасибо за заявку', 'Мы свяжемся с вами')
// Для ошибки window.toast.error('Возникла ошибка', 'Попробуйте еще раз')

export default class Toast {
  constructor() {
    this.toasts = [];
    this.intervals = [];
  }

  /**
  * Сообщение об успехе
  * @param {*} text
  */
  success(title, text = '') {
    const toast = document.createElement('div');
    toast.classList.add('toast', 'toast-success');
    toast.innerHTML = `
      <div class="toast__content">
        <div class="toast__title">${title}</div>
        <div class="toast__text">${text}</div>
      </div>
      <div class="toast__close"></div>
    `;
    this.insertToast(toast);
  }

  /**
  * Сообщение об ошибке
  * @param {*} text
  */
  error(title, text = '') {
    const toast = document.createElement('div');
    toast.classList.add('toast', 'toast-error');
    toast.innerHTML = `
      <div class="toast__content">
				<div class="toast__title">${title}</div>
				<div class="toast__text">${text}</div>
			</div>
			<div class="toast__close"></div>`;
    this.insertToast(toast);
  }

  /**
  * @param {HTMLElement} toast - toast - element
  */
  insertToast(toast) {
    document.querySelectorAll('.toast').forEach((item) => item.classList.add('hide'));

    document.body.append(toast);
    toast.classList.add('toast-inserting');
    toast.querySelector('.toast__close').addEventListener('click', () => this.removeToast(toast));
    setTimeout(() => {
      toast.classList.remove('toast-inserting');
      toast.classList.add('toast-inserted');
    }, 500);

    setTimeout(() => {
      Toast.removeToast(toast);
    }, 3000);
  }

  static removeToast(toast) {
    toast.classList.remove('toast-inserted');
    toast.classList.add('toast-removing');
    setTimeout(() => {
      toast.remove();
    }, 550);
  }
}
