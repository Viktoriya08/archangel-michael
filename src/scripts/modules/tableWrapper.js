export default function initTableWrapper() {
  function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.classList.add('table-wrap');
    wrapper.appendChild(el);
  }

  // Оборачиваем таблицы в контенте для адаптивности
  const tables = document.querySelectorAll('table:not([class])');
  tables.forEach((table) => {
    wrap(table, document.createElement('div'));
  });
}
