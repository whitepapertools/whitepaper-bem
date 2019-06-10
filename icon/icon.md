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

Модификатор | Значение                                                                      | Описание
------------|-------------------------------------------------------------------------------| ----------------------------------------
`view`      | `default` `disable` `primary` `secondary` `ghost` `success` `warning` `alert` | Цвет иконки
`round`     | `default` `disable` `primary` `secondary` `ghost` `success` `warning` `alert` | Цвет круглой подложки
`border`    | `primary` `secondary` `ghost` `success` `warning` `alert`                     | Цвет бордера бесцветной круглой подложки
`size`      | `s` `m`                                                                       | Размер иконки