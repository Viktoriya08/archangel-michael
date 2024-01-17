## Макет -
https://www.figma.com/file/Lr0YgOnCrGtezEH6YfuEsG/%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB-%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-(Copy)?type=design&node-id=1-2&mode=design&t=rsS5E30EM998Fqjw-0


# Gulp-Vituum

> Используется [Vite](https://vitejs.dev/), [Vituum](https://vituum.dev/) и [Gulp v4](https://gulpjs.com/)

## Начало работы

Установка npm зависимостей

```
npm install
```

Запуск в режиме разработчика

```
npm run dev
```

Собрать проект

```
npm run build
```
Собрать проект с форматированием картинок в WebP

```
npm run buildWithWebP
```

Деплой проекта в html.xpager.ru

```
npm run deployFTPHtml
```

Деплой проекта в html.xpager.ru с форматированием картинок в WebP

```
npm run deployFTPHtmlWebP
```

Деплой проекта на боевой сайт

```
npm run deployFTPServer
```

Деплой проекта на боевой сайт с форматированием картинок в WebP

```
npm run deployFTPServerWebP
```

Собрать svg sprite

```
npm run sprite
```

Перезаписать шрифты (Если появились новые)

```
npm run fonts
```

## Структура папок и файлов

```
├── .vscode/                      # настройки VSCode
│   └── snippets/                 # сниппеты
├── dist/                         # собранный проект
├── config/                       # настройки сборщика
│   └── gulp-tasks/               # задачи gulp
│   └── gulp-settings.js          # пути
│   └── gulp-plugins.js           # общие плагины
├── src/                          # исходники
|   ├── assets/                   #
│   │   └── fonts/                # шрифты
│   │   └── img/                  # папка для хранения картинок
│   │   └── svg-sprite/           # папка для преобразования svg в спрайт
│   ├── scripts/                  # скрипты
│   │   └── modules/              # модули
│   │   └── libs/                 # библиотеки
│   │   └── utils/                # утилиты
│   │   └── index.js               # главный скрипт
│   ├── templates/                # Разметка
│   │   └── blocks/               # общие блоки
│   │   └── pages/                # страницы
│   │   │   └── index.pug         # главная страница
│   │   └── sections/             # секции страниц
│   ├── styles/                   # стили сайта
│   │   └── main.scss             # главный файл стилей
│   │   └── base/                 # базовые стили
│   │   │   └── mixins            # миксины
│   │   │   └── _null.sass        # файл для обнуление стилей браузера
│   │   │   └── _fonts.sass       # файл для подключения шрифтов (подключаются автоматически)
│   │   │   └── _variables.sass   # файл для написания css- или sass-переменных
│   │   │   └── _animations.sass  # файл анимаций
│   │   │   └── _base.sass        # файл общих стилей (настройки)
│   │   └── blocks/               # стили общих блоков
│   │   │   └── form/             # стили форм (checkbox, input, ...)
│   │   └── libs/                 # стили различных библиотек (плагинов)
│   │   └── pages/                # стили страниц
│   │   └── sections/             # стили секций
│   └── views/                    # страницы
└── gulpfile.js                   # gulp
└── vite.config.dev.js            # vite конфиг
└── package.json                  # файл с установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .ecrc                         # файл с настройками пакета editorconfig-checker (исключает ненужные папки)
└── README.md                     # документация сборки
```

## Плагины для Vite, Vituum

1. [vite](https://yarn.pm/vite)
2. [vituum](https://yarn.pm/vituum)
3. [@vituum/pug](https://yarn.pm/@vituum/pug)
4. [@rollup/plugin-alias](https://yarn.pm/@rollup/plugin-alias)
5. [@rollup/plugin-replace](https://yarn.pm/@rollup/plugin-replace)
6. [vite-plugin-html-minifier](https://yarn.pm/vite-plugin-html-minifier)
7. [vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint)

## Плагины для Gulp

1. [gulp](https://yarn.pm/gulp)
2. [gulp-fonter-fix](https://npm.io/package/gulp-fonter-fix)
3. [gulp-if](https://yarn.pm/gulp-if)
4. [gulp-newer](https://yarn.pm/gulp-newer)
5. [gulp-notify](https://yarn.pm/gulp-notify)
6. [gulp-plumber](https://yarn.pm/gulp-plumber)
7. [gulp-rename](https://yarn.pm/gulp-rename)
8. [gulp-sharp-responsive](https://yarn.pm/gulp-sharp-responsive)
9. [gulp-svg-sprite](https://yarn.pm/gulp-svg-sprite)
10. [gulp-ttf2woff](https://yarn.pm/gulp-ttf2woff)
11. [gulp-run](https://yarn.pm/gulp-run)
12. [gulp-ttf2woff2](https://yarn.pm/gulp-ttf2woff2)
13. [vinyl-ftp](https://yarn.pm/vinyl-ftp)

## Общие плагины

1. [del](https://yarn.pm/del)
2. [autoprefixer](https://yarn.pm/autoprefixer)
3. [cssnano](https://yarn.pm/cssnano)
4. [sass](https://yarn.pm/sass)
5. [postcss](https://yarn.pm/postcss)
6. [postcss-short](https://yarn.pm/postcss-short)
7. [postcss-sort-media-queries](https://yarn.pm/postcss-sort-media-queries)
8. [postcss-sass](https://yarn.pm/postcss-sass)
9. [stylelint](https://yarn.pm/stylelint)
10. [stylelint-config-standard-scss](https://yarn.pm/stylelint-config-standard-scss)
11. [stylelint-order](https://yarn.pm/stylelint-order)
12. [eslint](https://www.npmjs.com/package/eslint)
13.	[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
14.	[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)

## Зависимости

1. [swiper](https://yarn.pm/swiper)
2. [@fancyapps/ui](https://yarn.pm/@fancyapps/ui)
3. [inputmask](https://yarn.pm/inputmask)
4. [nouislider](https://yarn.pm/nouislider)
5. [photoswipe](https://yarn.pm/photoswipe)
6. [focus-visible](https://yarn.pm/focus-visible)
7. [vanilla-lazyload](https://yarn.pm/vanilla-lazyload)
8. [slim-select](https://yarn.pm/slim-select)
