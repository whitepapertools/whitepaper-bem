# pt-informer

`pt-informer` — информационный блок, имеющий статус. Вставляется, как в контент, так и на отдельный интерфейсный слой.

```html
<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success">
    <div class="pt-informer__content pt-informer__content_space-a_l">
        // контент
    </div>
</div>
```

## Живые примеры и дизайн

[pt-informer на whitepaper.tools](http://whitepaper.tools/doc.html#/pt-informer)

___


## Модификаторы блока

Модификаторы | Значение                                                | Описание
------------ | ------------------------------------------------------- | -----------------------------------
`view`       | `normal` `success` `warning` `alert` `system` `default` | Статус информера
`space-a`    | `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl`                | Внутренние отступы по всем сторонам
`space-h`    | `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl`                | Внутренние отступы по горизонтали
`space-v`    | `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl`                | Внутренние отступы по вертикали