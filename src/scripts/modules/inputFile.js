export default class InputFile {
  constructor(inputs) {
    this.inputs = document.querySelectorAll(inputs);
    if (!this.inputs) return;
    this.init();
  }

  init() {
    this.inputs.forEach((input) => input.addEventListener('change', (event) => {
      const [file] = event.target.files;
      const fileSize = input.getAttribute('data-max-size') || 50;

      if ((file.size / 1024 / 1024) < fileSize) {
        const nextEl = input.nextElementSibling;
        nextEl?.classList.add('active');

        const nextElText = nextEl.querySelector('span');
        if (nextElText) nextElText.textContent = file.name;
      } else {
        // eslint-disable-next-line
        input.value = null;
        // eslint-disable-next-line
        alert(`Размер файла не может превышать ${fileSize} Мб`);
        // Если на проекте есть уведомления, расскоментируй ниже и убери alert
        // window.toast.error('Ошибка', `Размер файла не может превышать ${fileSize} Мб`)
      }
    }));
  }
}
