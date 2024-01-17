export default function copyOnClick() {
  const copyBtns = document.querySelectorAll('.js-copy-link');
  if (!copyBtns) return;

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const btnText = btn.querySelector('.share__input').value.trim();
      const resultMessage = btn.querySelector('.share__result');
      window.navigator.clipboard.writeText(btnText);
      resultMessage.classList.add('fadeInUp', 'js-visible');
      setTimeout(() => {
        resultMessage.classList.remove('fadeInUp', 'js-visible');
      }, 1500);
    });
  });
}
