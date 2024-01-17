// Документация и примеры
// https://air-datepicker.com/ru/examples

// eslint-disable-next-line import/no-extraneous-dependencies
import AirDatepicker from 'air-datepicker';

document.addEventListener('DOMContentLoaded', () => {
  window.initDatapicker('.default-datapicker__input');
});

window.initDatapicker = (datapickerList) => {
  const datapickerElems = document.querySelectorAll(datapickerList);

  datapickerElems.forEach((datapickerItem) => {
    // eslint-disable-next-line no-undef
    const picker = new AirDatepicker(datapickerItem, {
      range: true,
      multipleDatesSeparator: ' - ',
      // buttons: ['clear'],
      container: '.default-datapicker__box',
      // inline: true,
      autoClose: true,
    });
  });
};
