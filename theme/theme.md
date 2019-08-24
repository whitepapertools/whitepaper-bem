# Тема

Блок, отвечающий за глобальные переменные цветов, типографики и отступов.
Миксуется к самому внешнему блоку, например `body`. Это обязательное условие для работы системы.

```html
<body class="page
  theme
  theme_color_default
  theme_space_default
  theme_size_default
  theme_gap_medium
  ">
  ...
</body>
```


Получается, что слой темы состоит из нескольких маленьких тем. Их можно менять независимо друг от друга. Т.е. можно поменять цвет, не трогая типографику и отступы.

На странице можно использовать несколько тем.

```html
<body class="page
  theme
  theme_color_default
  theme_space_default
  theme_size_default
  theme_gap_medium
  ">

  <section class="section theme theme_color_inverse">
    <!-- секция с инверсией цветов -->
    ...
  </section>

  <section class="section theme theme_color_brand">
    <!-- секция с цветами бренда -->
    ...
  </section>
</body>
```


## Живые примеры и дизайн

[theme на whitepaper.tools](http://whitepaper.tools/doc.html#/theme)

___


## Модификаторы

Модификаторы       | Значение                                                     | Описание
------------------ | ------------------------------------------------------------ | ----------------------------------
`color`            | `whitepaper-brand` `whitepaper-default` `whitepaper-inverse` | Цветовая схема
`size`             | `default`                                                    | Размеры и высоты строк типографики
`space`            | `default`                                                    | Размеры отступов
`breakpoint`       | `default`                                                    | Точки изменения интерфейса при адаптиве
`font`             | `default`                                                    | Используемый шрифт
`gap`              | `large` `medium` `small`                                     | Размер расстояния между колонками сетки
`menu`             | `default`                                                    | Размер бокового меню

___


## Новая тема

Чтобы создать темы для своего проекта, скопируй на уровень своего проекта блок `theme` и новые значения модификаторов, которые подходят тебе. Файловая структура блока

```
theme/
  color/
  default.css   // по аналогии создай файл с названием своей темы
  size/
  default.css   // по аналогии создай файл с названием своей темы
  space/
  default.css   // по аналогии создай файл с названием своей темы
  breakpoint/
  default.css   // по аналогии создай файл с названием своей темы
  font/
  default.css   // по аналогии создай файл с названием своей темы
  menu/
  default.css   // по аналогии создай файл с названием своей темы
  gap/
  large.css     // эти значения зависят от значений модификатора space
  medium.css
  small.css
```

___


## Цвета

Переменные цветов используются в модификациях блоков и типографики, подчёркивая их смысл или состояние. Все переменные для цветов называются по смыслу, месту их использования. Они не обозначают значение цвета.

⚠️ Для математики изменений цветов мы используем плагин [postcss-color-function](https://github.com/postcss/postcss-color-function), но также подойдёт любой другой популярный препроцессор. Postcss-переменные присваиваются как значение в [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).



### Базовые цвета

5 цветов для статусов. Они не наследуются от основной палитры, но влияют на цвета статусные текста и фонов блоков. С префиксом `color-base-`

С префиксом `--color-base-`

Переменная              | Описание
----------------------- | -----------------------------------------------------------------------------
`$color-base-base`      | Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, ...
`$color-base-essential` | Базовый цвет поверхностей
`$color-base-project`   | Проектный цвет, от которого выстраивают акцентные состояния
`$color-base-phantom`   | Тонирующий цвет, от которого выстраиватся бордеры, паранджа
`$color-base-path`      | Ссылочный цвет, от которого выстраиваются все их состояния
`$color-base-success`   | Цвет успеха
`$color-base-warning`   | Цвет ошибки
`$color-base-alert`     | Цвет предупреждения
`$color-base-system`    | Цвет нейтральный
`$color-base-normal`    | Цвет системнный


### Цвета фонов

С префиксом `--color-bg-`

Переменная            | Описание
--------------------- | ----------------------------------
`$color-bg-brand`     | Цвет фона брендированый
`$color-bg-action`    | Цвет фона действия
`$color-bg-selection` | Цвет фона выделения
`$color-bg-hover`     | Цвет фона при наведении
`$color-bg-border`    | Цвет границ
`$color-bg-stripe`    | Цвет зебры
`$color-bg-ghost`     | Цвет затенения
`$color-bg-default`   | Цвет дефолта
`$color-bg-tone`      | Цвет паранджи
`$color-bg-soft`      | Цвет молока
`$color-bg-success`   | Цвет успеха
`$color-bg-alert`     | Цвет ошибки
`$color-bg-warning`   | Цвет предупреждения
`$color-bg-normal`    | Цвет нейтральный
`$color-bg-system`    | Цвет системнный
`$color-bg-link`      | Цвет фона ссылки


### Цвета типографики

С префиксом `--color-typo` и `--color-link`

Переменная              | Описание
----------------------- | ----------------------------------
`$color-typo-brand`     | Цвет брендового текста
`$color-typo-promo`     | Цвет основного текста
`$color-typo-secondary` | Цвет промо текста
`$color-typo-ghost`     | Цвет второстепенного текста
`$color-typo-disable`   | Цвет дополнительного текста
`$color-typo-success`   | Цвет неактивного текста
`$color-typo-warning`   | Цвет текста успеха
`$color-typo-alert`     | Цвет текста ошибки

Переменная             | Описание
---------------------- | ----------------------------------
`$color-link`          | Цвет основной ссылки
`$color-link-external` | Цвет дополнительной ссылки
`$color-link-minor`    | Цвет второстепенной ссылки
`$color-link-hover`    | Цвет ховера ссылки

Чтобы применить цвет к своему локальном блоку используй нужную переменную.

```css
.your-block {
  background: var(--color-bg-brand);
}
```

___


## Отступы

Переменные отступов используются как для ритма внутри сеток, так и для обозначения уровней вложенности и разделения смысловых сущностей внутри паттернов.

```css
.theme_space_default {
  --space-3xs: 2px;
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-s: 12px;
  --space-m: 16px;
  --space-l: 20px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 40px;
  --space-4xl: 48px;
  --space-5xl: 72px;
  --space-6xl: 96px;
}
```


Вышеуказанные переменные указываются для значений модификаторов паттернов на внешние и внутренние отступы. В дефолтной теме используются отступы с модулем 4px + самое маленькое значение 2px.
Также используется для блока `decorator`, который можно миксовать к блокам на страницах, чтобы не дублировать CSS и держать интерфейс консистентным.

Эти переменные можно использовать, как в локальных стилях блока, так и в разметке с помощью специального блока `decorator`.

```css
.your-block {
    padding: var(--space-m);
}
```

```html
<div class="your-block decorator decorator_space-a_l"></div>
```

___


## Размеры типографики

Переменные размеров используются в текстовых блоках и подчёркивают информационную иерархию.

Задает размеры и высоты строк для контентного блока `text`.
Эти переменные могут использоваться в локальных стилях, но только когда нет возможности использовать блок `text`


```css
.theme_size_default {
    /* Размер текста */
    --size-text-base: 16px;

    --size-text-xs: 0.7em;
    --size-text-s: 0.8em;
    --size-text-m: 1em;
    --size-text-l: 1.125em;
    --size-text-xl: 1.25em;
    --size-text-2xl: 1.5em;
    --size-text-3xl: 2em;
    --size-text-4xl: 3em;
    --size-text-5xl: 4.5em;
    --size-text-6xl: 6em;

    /* Межстрочный интервал */
    --line-height-text-xs: 1.2em;
    --line-height-text-s: 1.4em;
    --line-height-text-m: 1.5em;
    --line-height-text-l: 1.6em;


    /* Размер текста DEPRECATED */
    --size-typo-xs: 11px;
    --size-typo-s: 13px;
    --size-typo-m: 15px;
    --size-typo-l: 18px;
    --size-typo-xl: 20px;
    --size-typo-2xl: 24px;
    --size-typo-3xl: 32px;
    --size-typo-4xl: 48px;
    --size-typo-5xl: 72px;
    --size-typo-6xl: 96px;

    /* Межстрочный интервал DEPRECATED */
    --line-height-typo-xs: 15px;
    --line-height-typo-s: 18px;
    --line-height-typo-m: 21px;
    --line-height-typo-l: 25px;
    --line-height-typo-xl: 28px;
    --line-height-typo-2xl: 34px;
    --line-height-typo-3xl: 42px;
    --line-height-typo-4xl: 62px;
    --line-height-typo-5xl: 82px;
    --line-height-typo-6xl: 115px;
}
```

___


## Шрифты

Модификатор темы `font` определяет шрифтовую гарнитуру у текстовых блоков. Используй миксование темы для изменения шрифтовой настройки блока на любом уровне.

```html
<article class="theme_font_default">
    <h2 class="text text_size_2xl text_font_sans"></h2>
    <p class="text text_size_m text_font_serif"></p>
    <button class="button theme_font_brand"></button>
</article>
```

___


## Расстояния

Модификатор темы `gap` используются для формирования отступов внутри обвязок и сеток. Значений всего три: `small`, `medium`, `large`.

Переменные с префиксом `--col-gap`, `--row-gap` задают расстояния между колонками и строками сетки. Они наследуются от одной корневой переменной `--gap`, которая переопределяется в зависимости от разрешения.

В значение переменной `--gap` указывается любая переменная из отступов.

```css
.theme_gap_medium {
    /* Размеры отступа у контента */
    --gap: var(--space-l);

    /* Размеры отступов в колонках относительно --gap */
    --col-gap-third: calc(var(--gap) * 0.33); /* Одна треть */
    --col-gap-half: calc(var(--gap) * 0.5); /* Половина */
    --col-gap-two-thirds: calc(var(--gap) * 0.66); /* Две трети */
    --col-gap-full: var(--gap); /* Полный */
    --col-gap-2x: calc(var(--gap) * 2); /* Двойной */
    --col-gap-3x: calc(var(--gap) * 3); /* Тройной */
}

@media screen and (min-width: $screen-s) {
    :root { --gap: var(--space-3xl); }
}

@media screen and (min-width: $screen-m) {
    :root { --gap: var(--space-4xl); }
}

@media screen and (min-width: $screen-l) {
    :root { --gap: var(--space-5xl); }
}
```

___


## Точки перестроения

Postcss-переменные с префиксом `$screen` используются для адаптива сеточных конструкций и уникальных блоков.

```css
/* Переменные для mobile-first подхода */
$screen-xs: 320px; /* Смартфоны */
$screen-s: 720px; /* Планшеты в вертикальном режиме */
$screen-m: 1024px; /* Планшеты в горизонтальном режиме */
$screen-l: 1280px; /* Ноутбуки */
$screen-xl: 1440px; /* Настольные компьютеры и ноутбуки */
$screen-2xl: 1600px; /* Настольные компьютеры */

/* Переменные для desktop-first подхода */
$screen-xs-max: 719px;
$screen-s-max: 1023px;
$screen-m-max: 1279px;
$screen-l-max: 1439px;
$screen-xl-max: 1599px;
$screen-2xl-max: 1920px;
```


### Использование в уникальных блоках

⚠️ Мы храним значения брейкпоинтов в postcss-переменных, для лёгкого применениях их в любых блоках проекта.

```css
@import 'path/to/your/theme_breakpoint_default.post.css';

.block {
    width: 200px;
    ...
}
@media screen and (min-width: $screen-s) {
    .block {
        width: 300px;
        ...
    }
}
@media screen and (min-width: $screen-l) {
    .block {
        width: 450px;
        ...
    }
}
```
