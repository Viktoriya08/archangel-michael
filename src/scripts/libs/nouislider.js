/*
Ренж слайдер
Документация: https://refreshless.com/nouislider/
Примеры использования и готовая разметка: https://codepen.io/brexston74/pen/dyjJGeg
*/

import noUiSlider from 'nouislider';

document.addEventListener('DOMContentLoaded', () => {
  window.initNoUiSlider('.slider-range');
});

window.initNoUiSlider = (sliders) => {
  const rangeSliders = document.querySelectorAll(`${sliders}__range`);

  rangeSliders.forEach((rangeSlider) => {
    const sliderMin = Number(rangeSlider.getAttribute('data-min'));
    const sliderMax = Number(rangeSlider.getAttribute('data-max'));
    const sliderStart = Number(rangeSlider.getAttribute('data-start'));
    const sliderStop = Number(rangeSlider.getAttribute('data-stop'));
    const sliderStep = Number(rangeSlider.getAttribute('data-step'));

    noUiSlider.create(rangeSlider, {
      start: sliderStop ? [sliderStart, sliderStop] : sliderStart,
      step: sliderStep,
      connect: true,
      range: {
        min: [sliderMin],
        max: [sliderMax],
      },
      format: {
        to: (v) => v || 0,
        from: (v) => v || 0,
      },
    });

    const [...snapValues] = rangeSlider.parentNode.querySelector(`${sliders}__price`).children;
    const resetValuesBtn = rangeSlider.parentNode.querySelector(`${sliders}__reset`);

    resetValuesBtn?.addEventListener('click', () => rangeSlider.noUiSlider.reset());

    if (snapValues.length > 0) {
      rangeSlider.noUiSlider.on('update', (values, handle) => {
        if (snapValues[0].nodeName === 'SPAN') {
          snapValues[handle].textContent = values[handle].toLocaleString('ru-RU');
        } else {
          snapValues[handle].value = values[handle].toLocaleString('ru-RU');
        }
      });

      if (snapValues[0].nodeName === 'INPUT') {
        snapValues.forEach((item) => item.addEventListener('change', () => {
          const [min, max] = snapValues;
          rangeSlider.noUiSlider.set([min.value, max.value]);
        }));
      }
    }
  });
};
