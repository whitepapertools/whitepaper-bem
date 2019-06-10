# pt-list

`pt-list` используется для вертикального представления повторяющихся сущностей. Отлично подходит для отображения истории, контактов, вертикальных меню.

```html
<div class="preview">
    <div class="pt-list pt-list_border_all pt-list_view_default" style="min-width: 280px">
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Первая операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +1000 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Вторая операция
        </div>
        <div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
            -500 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Третья операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +2000 ₽
        </div>
    </div>
    </div>
</div>
```

## Живые примеры и дизайн

[pt-list на whitepaper.tools](http://whitepaper.tools/doc.html#/pt-list)

___


## Модификаторы блока

Модификатор | Значение          | Описание
----------- | ----------------- | ----------------------------------
`border`    | `all`             | Устанавливает границу вокруг блока
`view`      | `default` `ghost` | Управляет фоном списка

___


## Элементы

### Элемент item

Единственный элемент паттерна, который определяет строку списка. Является контейнером для контента строки. Элементы `item` могут включать в себя друг друга.

Модификаторы элемента `item` | Значение                           | Описание
---------------------------- | ---------------------------------- | -------------------------------------
`border`                     | `bottom` `top`                     | Обводка
`distribute`                 | `default` `between`                | Распределение контента по горизонтали
`vertical-align`             | `center` `top` `baseline`          | Вертикальное выравнивание контента
`indent-a`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешние отступы со всех сторон
`indent-h`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешние отступы по горизонтали
`indent-v`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешние отступы по вертикали
`indent-t`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешний отступ сверху
`indent-r`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешний отступ справа
`indent-b`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешний отступ снизу
`indent-l`                   | `xs` `s` `m` `l` `xl` `xxl` `xxxl` | Внешний отступ слева
`space-a`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренние отступы со всех сторон
`space-h`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренние отступы по горизонтали
`space-v`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренние отступы по вертикали
`space-t`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренний отступ сверху
`space-r`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренний отступ справа
`space-b`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренний отступ снизу
`space-l`                    | `xxs` `xs` `s` `m` `l` `xl` `xxl`  | Внутренний отступ слева