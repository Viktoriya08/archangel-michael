/* eslint-disable arrow-parens */
// eslint-disable-next-line import/no-extraneous-dependencies
import counterUp from 'counterup2';

// eslint-disable-next-line func-names
window.onload = function () {
  // initInterSection('numbers')
  // eslint-disable-next-line no-use-before-define
  initInterSection('numbers-count');
};

function initInterSection(parent) {
  const callback = entries => {
    entries.forEach(entry => {
      const numberBlock = entry.target;
      const circs = document.querySelectorAll('#circ');

      if (entry.isIntersecting && !numberBlock.classList.contains('active')) {
        // eslint-disable-next-line no-use-before-define
        startCounterUp(numberBlock);
        numberBlock.classList.add('active');
        circs.forEach(element => {
          element.style.animation = 'progress 1.5s linear forwards';
        });
      }
    });
  };
  const IO = new IntersectionObserver(callback, {
    threshold: 0.25,
  });
  const numberBlock = document.querySelector(`.${parent}`);
  if (numberBlock) {
    IO.observe(numberBlock);
  }
}

function startCounterUp(parent) {
  const counterItems = parent.querySelectorAll('[data-counter]');
  counterItems.forEach((counterItem) => {
    counterUp(counterItem, {
      duration: 1000,
      dnumberBlockay: 5,
    });
  });
}
