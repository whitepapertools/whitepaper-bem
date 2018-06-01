# pt-card

Способ представления информации в маленьком формате. [Пример](https://codepen.io/whitepapertools/pen/6dfa7d09f4c412333aa70bf475064679/)

```js
{
	block: 'pt-card',
	content: [
	{
		elem: 'image'
	},
	{
		elem: 'header'
	},
	{
		elem: 'content'
	},
	{
		elem: 'footer'
	}]
}
```

Модификатор | Значение
----------- | ----------
border      | all
shadow      | cloud
view        | default

## Элемент header

Располагается поверх всего контента и висит в верху карточки. Выполняет роль шапки. Может использоваться, как шапка карточки, так и как шапка контента.

Модификаторы `pt-card__header` | Значение
------------------------------ | -------------------------
align                          | center / right
space-a                        | xs / s / m / l / xl / xxl
space-h                        | xs / s / m / l / xl / xxl
space-v                        | xs / s / m / l / xl / xxl

## Элемент content

Основной ребенок паттерна `pt-card`, в котором лежит весь контент.

Модификаторы `pt-card__content` | Значение
------------------------------- | -------------------------
align                           | center
vertical-align                  | center
space-a                         | xs / s / m / l / xl / xxl
space-h                         | xs / s / m / l / xl / xxl
space-v                         | xs / s / m / l / xl / xxl
space-t                         | xs / s / m / l / xl / xxl
space-r                         | xs / s / m / l / xl / xxl
space-b                         | xs / s / m / l / xl / xxl
space-l                         | xs / s / m / l / xl / xxl

## Элемент footer

Располагается поверх всего контента и висит в внизу карточки. Выполняет роль подвала. Может использоваться, как подвал карточки, так и как подвал контента.

Модификаторы элемента `footer`  | Значение
------------------------------- | -------------------------
align                           | center / top / bottom
distribute                      | right / between
space-a                         | xs / s / m / l / xl / xxl
space-h                         | xs / s / m / l / xl / xxl
space-v                         | xs / s / m / l / xl / xxl

## Элемент image

Элемент для отображения изображения.

Модификаторы элемента `image` | Значение
----------------------------- | -------------
shadow                        | bottom / top
size                          | cover

## Элемент play

Этот элемент показывает, что карточка является ссылкой на видео. Вставляется в элемент `image`.
