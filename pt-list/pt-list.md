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
indent-a                     | xs / s / m / l / xl / 2xl / 3xl | Внешние отступы со всех сторон
indent-h                     | xs / s / m / l / xl / 2xl / 3xl | Внешние отступы по горизонтали
indent-v                     | xs / s / m / l / xl / 2xl / 3xl | Внешние отступы по вертикали
indent-t                     | xs / s / m / l / xl / 2xl / 3xl | Внешний отступ сверху
indent-r                     | xs / s / m / l / xl / 2xl / 3xl | Внешний отступ справа
indent-b                     | xs / s / m / l / xl / 2xl / 3xl | Внешний отступ снизу
indent-l                     | xs / s / m / l / xl / 2xl / 3xl | Внешний отступ слева
space-a                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренние отступы со всех сторон
space-h                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренние отступы по горизонтали
space-v                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренние отступы по вертикали
space-t                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренний отступ сверху
space-r                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренний отступ справа
space-b                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренний отступ снизу
space-l                      | 2xs / xs / s / m / l / xl / 2xl  | Внутренний отступ слева
