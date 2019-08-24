# icon

В whitepaper на уровне контента предусмотрен блок `icon` для вставки иконок. Иконки тематизируются аналогично тексту с помощью модификаторов. Иконки можно вставлять инлайново, или с помощью шаблонизаторов.

``` html
<div class="icon icon_view_brand icon_size_m">
    <svg></svg>
</div>
```


## Живые примеры и дизайн

[icon на whitepaper.tools](http://whitepaper.tools/doc.html#/content-icons)


## Модификаторы блока

Модификатор | Значение | Описание
------------|--------- | --------
`view`      | `alert` `brand` `ghost` `link` `primary` `secondary` `success` `warning` | Цвет иконки
`round`     | `alert` `brand` `ghost` `primary` `secondary` `success` `warning` `default` | Цвет круглой подложки
`border`    | `alert` `brand` `ghost` `primary` `secondary` `success` `warning` | Цвет бордера бесцветной круглой подложки
`size`      | `s` `m` | Размер иконки


## Графические файлы

Все графические элементы должны быть подвязаны на модификатор `name`. Соответственно, должен быть css-класс `.icon_name_burger` и для него графический элемент `icon_name_burger.svg`. 

!> В самом svg-файле лучше не указывать цвета, а использовать значение currentColor. Так будет удобнее использовать иконки в связке с текстовыми блоками в рамках паттерна `pt-icon-plus`.