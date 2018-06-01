# pt-list

`pt-list` – это описание списка похожих друг на друга вертикально перечисленных сущностей.

Структура блока очень простая:

```js
{
	block: 'pt-list',
	content: [
	{
		elem: 'item'
	},
	{
		elem: 'item'
	}]
}
```

[Пример](https://codepen.io/whitepapertools/pen/138d1417680b2e1e4c75f9f5fffb7d39/)

Модификатор | Значение
----------- | ---------------
border      | all
view        | default / ghost


Элементы `item` могут включать в себя друг друга. [Пример](https://codepen.io/whitepapertools/pen/60834c80ab573c6afdd1ed88f6b71f1f/)

Модификаторы элемента `item` | Значение                         | Описание
---------------------------- | -------------------------------- | -------------------------------------
border                       | bottom / top                     | Обводка
distribute                   | default / between                | Распределение контента по горизонтали
vertical-align               | center / top / baseline          | Вертикальное выравнивание контента
indent-a                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы со всех сторон
indent-h                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по горизонтали
indent-v                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по вертикали
indent-t                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ сверху
indent-r                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ справа
indent-b                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ снизу
indent-l                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ слева
space-a                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы со всех сторон
space-h                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-t                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ сверху
space-r                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ справа
space-b                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ снизу
space-l                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ слева
