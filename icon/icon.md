# icon

В whitepaper на уровне контента предусмотрен блок `icon` для вставки иконок. Иконки тематизируются аналогично тексту с помощью модификаторов. Иконки можно вставлять инлайново, или с помощью шаблонизаторов.

``` html
<div class="icon icon_view_brand icon_size_m">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.4617 8.47109L19.0711 4.92893L15.5289 10.5383L22 12L15.5289 13.4617L19.0711 19.0711L13.4617 15.5289L12 22L10.5383 15.5289L4.92893 19.0711L8.47109 13.4617L2 12L8.47109 10.5383L4.92893 4.92893L10.5383 8.47109L12 2Z"/>
    </svg>
</div>
```


## Модификаторы блока

Модификатор   | Значение | Описание
--------------|----------| --------
`view`        | `default` `disable` `primary` `secondary` `ghost` `success` `warning` `alert` | Цвет иконки
`round`       | `default` `disable` `primary` `secondary` `ghost` `success` `warning` `alert` | Добавляет круглую подложку
`border`      | `primary` `secondary` `ghost` `success` `warning` `alert` | Добавляет бесцветную круглую подложку с бордером
`size`        | `s` `m` | Размер иконки