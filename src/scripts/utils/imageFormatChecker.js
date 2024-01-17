// Проверка поддержки webp, avif.
// Если - есть поддержка, то добавляет классы webp, avif тегу html
// (Для использования webp, avif в css)

function detectSupport(formatsArr) {
  const result = {};
  const processArr = [];
  const root = document.querySelector('html');

  const baseFormatsArr = [
    {
      type: 'webp',
      url: 'data:image/webp;base64,UklGRhwAAABXRUJQVlA4TBAAAAAvAAAAEAfQpv5HmQMR0f8A',
    },
  ];

  baseFormatsArr.concat(formatsArr);

  function detectImageSupport(formatItem) {
    const image = new Image();
    image.src = formatItem.url;

    image.onerror = () => {
      const rootSelectors = new Set(root.getAttribute('class') ? root.getAttribute('class').split(' ') : []);

      processArr.push(new Promise(((resolve) => {
        result[formatItem.type.toLowerCase()] = false;
        resolve({ [formatItem.type.toLowerCase()]: false });
      })));

      rootSelectors.add(`no-${formatItem.type.toLowerCase()}`);
      root.setAttribute('class', [...rootSelectors].join(' '));
    };

    image.onload = () => {
      const rootSelectors = new Set(root.getAttribute('class') ? root.getAttribute('class').split(' ') : []);

      processArr.push(new Promise(((resolve) => {
        result[formatItem.type.toLowerCase()] = true;
        resolve({ [formatItem.type.toLowerCase()]: true });
      })));

      rootSelectors.add(formatItem.type.toLowerCase());
      root.setAttribute('class', [...rootSelectors].join(' '));
    };
  }

  return () => {
    baseFormatsArr.forEach(((item) => {
      detectImageSupport(item);
    }));

    Promise.all(processArr).then((() => result));
  };
}

const webpAvifSupportChecker = detectSupport();

export default webpAvifSupportChecker;
