# Текст

## Текст в интерфейсе

В основе любого интерфейса лежит типографика. В вебе у текстовых блоков есть много разных свойств, влияющих на отображение.

Для манипуляции всеми этими свойствами у нас есть блок `text`. С его помощью каждый текстовый блок можно обернуть и применять модификаторы.

Визуально модификации текста можно посмотреть в разделе [Типографика](http://whitepaper.tools/text.html).

Модификатор | Значение                                         | Описание
----------- | ------------------------------------------------ | ------------------------------------
align       | center / left / right                            | Горизонтальное выравнивание текста
decoration  | underline                                        | Подчеркивание
display     | block / inline-block / inline                    | Способ отображения блока на странице
font        | mono / sans / serif                              | Семейство шрифтов
size        | xs / s / m / l / xl / xxl / xxxl / xxxxl         | Размер
spacing     | xs / s / m                                       | Межбуквенное расстояние
style       | italic                                           | Курсив
transform   | uppercase                                        | Верхний регистр
type        | h1 / h2 / h3 / p / blockquote                    | Стиль текста
view        | alert / brand / disable / ghost / link-minor / link / primary / promo / secondary / success / warning | Цвет
weight      | black / bold / semibold / regular / light / thin | Жирность шрифта

## Текст на инфо-страницах

Для простого манипулирования уровнями иерархии для инфо-страниц в блоке `text` есть модификаторы `type`. [Пример](https://codepen.io/whitepapertools/pen/6ade0a2ae7f41842e8492859f21baf4d/)
