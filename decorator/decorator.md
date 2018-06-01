# Декоратор

Блок для применения внутренних и внешних отступов к любым блокам в разметке.

```js
{
	block: 'yourblock',
	mix: { block: 'decorator', mods: { 'indent-a': 'l', 'space-a': 's' } }
}
```

Модификаторы decorator | Значение                                                                 | Описание
---------------------- | ------------------------------------------------------------------------ | ----------------
space-a                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ со всех сторон
space-v                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ по вертикали
space-h                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ по горизонтали
space-t                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ сверху
space-r                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ справа
space-b                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ снизу
space-l                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ слева
indent-a               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ со всех сторон
indent-v               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ по вертикали
indent-h               | auto                                                                     | Ценртирование блока по горизонтали
indent-h               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ по горизонтали
indent-t               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ сверху
indent-r               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ справа
indent-b               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ снизу
indent-l               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ слева