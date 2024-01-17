/*
Документация по работе в шаблоне:
Документация слайдера: https://slimselectjs.com/
Сниппет(HTML): select
*/

import SlimSelect from 'slim-select';

// Примеры работы с Slim Select https://codepen.io/brexston74/pen/BamrZzN
document.addEventListener('DOMContentLoaded', () => {
  window.initSlimSelect('.default-select__select');
});

// Значения по умолчанию
const configSelect = {
  messages: {
    placeholder: 'Выберите',
    searchText: 'Ничего не найдено',
    searchPlaceholder: 'Поиск',
  },
};

window.initSlimSelect = (selectList) => {
  const selectListElems = document.querySelectorAll(selectList);

  selectListElems.forEach((selectItem) => {
    const placeholder = selectItem.getAttribute('data-placeholder');
    const multiple = selectItem.hasAttribute('multiple');
    const search = selectItem.hasAttribute('data-search');
    const limit = selectItem.hasAttribute('data-limit') || 5;

    const initSlimSelect = new SlimSelect({
      select: selectItem,
      settings: {
        showSearch: search,
        searchText: configSelect.messages.searchText,
        searchPlaceholder: configSelect.messages.searchPlaceholder,
        placeholderText: placeholder || configSelect.messages.placeholder,
        closeOnSelect: !multiple,
        allowDeselect: multiple,
        maxValuesShown: true,
        maxValuesMessage: 'Выбрано: {number}',
        maxSelected: limit,
        openPosition: 'down',
        contentLocation: selectItem.parentNode,
      },
    });
    // initSlimSelect();
  });
};
