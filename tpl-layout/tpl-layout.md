# tpl-layout

`tpl-layout` – блок для описания обвязок.

Сначала обвязке нужно задать правила деления страницы по вертикали в процентном соотношении. Для этого нужно задать модификатору `structure` нужное значение. Если на странице должно быть боковое меню, выбираются значение с префиксом `fold` (свернутое) или `unfold` (развернутое). Размер меню контролируется в блоке `theme`. Для простых страниц с одним основным контейнером моджификатор `structure` указаывать не нужно.

В получившийся каркас можно складывать смысловые элементы обвязки: `content`, `heading`, `container`, `section`.

```html
<div class="tpl-layout">
    <div class="tpl-layout__section">
        <div class="tpl-layout__heading"></div>
        <div class="tpl-layout__content">
            <div class="tpl-layout__container"></div>
        </div>
    </div>
</div>
```


## Живые примеры и дизайн

[tpl-layout на whitepaper.tools](http://whitepaper.tools/doc.html#/layout-outer)

___


## Модификаторы

Модификатор | Значение                                           | Описание
----------- | -------------------------------------------------- | --------------------------------------
`structure` | `10-90` `20-60-20` `30-70` `50-50` `70-30` `90-10` | Разделение страницы на секции без меню

___


## Элемент section

Разделитель страницы, работает по правилам, заданным значением модификатора structure.
Если значение `structure` `10-90`, то элементов `section` должно быть два. Если `20-60-20`, то три.

```html
<div class="tpl-layout tpl-layout_structure_50-50">
    <div class="tpl-layout__section"></div>
    <div class="tpl-layout__section"></div>
</div>
```

```html
<div class="tpl-layout tpl-layout_structure_fold-70-30">
    <div class="tpl-layout__section"></div>
    <div class="tpl-layout__section"></div>
    <div class="tpl-layout__section"></div>
</div>
```

___


## Элемент container

Контейнер для контента секции. К нему можно миксовать блок  `tpl-grid` для управления внутренней сеткой.

Модификатор | Значение          | Описание
----------- | ----------------- | -------------------------------------
`size`        | `xs` `s` `m` `full` | Максимальная ширина контейнера
`align`       | `center`            | Выравнивание конейнера по горизонтали

```html
<div class="tpl-layout tpl-layout_structure_fold-70-30">
    <div class="tpl-layout__section"></div>

    <div class="tpl-layout__section">
        <div class="tpl-layout__container tpl-layout__container_size_xs">Контейнер</div>
    </div>
</div>
```
