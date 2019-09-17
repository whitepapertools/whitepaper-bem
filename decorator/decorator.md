# decorator

Блок для применения внутренних и внешних отступов к любым блокам в разметке.

```html
<div class="yourblock decorator decorator_space-a_m decorator_space-b_l">
```

Модификаторы `decorator` | Значение                                                               | Описание
------------------------ | -----------------------------------------------------------------------| ----------------------------------
`space-a`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ со всех сторон
`space-v`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ по вертикали
`space-h`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ по горизонтали
`space-t`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ сверху
`space-r`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ справа
`space-b`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ снизу
`space-l`                | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ слева
`indent-a`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ со всех сторон
`indent-v`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ по вертикали
`indent-h`               | `auto`                                                                 | Ценртирование блока по горизонтали
`indent-h`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ по горизонтали
`indent-t`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ сверху
`indent-r`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ справа
`indent-b`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ снизу
`indent-l`               | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ слева
`distribute`             | `between` `center` `right`                                             | Распределение элементов по горизонтали
`vertical-align`         | `baseline` `bottom` `center` `top`                                     | Вертикальное выравнивание
`border`                 | `a` `v` `h` `top` `bottom` `left` `right`                              | Обводка
