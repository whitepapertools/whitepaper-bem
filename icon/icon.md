# Иконки

В библиотеке иконки предусмотрены для использования, как самостоятельно в интерфейсе, так и в паре с текстовым блоком. Поэтому все иконки существуют в тех же цветах, что и текст. Визуально модификации текста можно посмотреть в разделе [Типографика](http://whitepaper.tools/icon.html).

Размеров всего два: `s` – 16х16px и `m` – 20x20px.

Чтобы вставить иконку, нужно знать название иконки, размер и необходимый цвет. Иконки вставляются в разметку шаблоном инлайново. Это позволяет перекрашивать их на лету.

```js
{
	block: 'icon',
	mods: { size: 's', view: 'primary', name: 'photo' }
}
```

| Модификаторы `icon` | Значения                                                          |
|---------------------|-------------------------------------------------------------------|
| size                | s / m                                                             |
| view                | alert / disable / ghost / primary / secondary / success / warning |
| name                | add-1 / add-2 / user / album / allert-2 / anchor / arrow-down / arrow-left-circle / arrow-left / arrow-right-circle / arrow-right / arrow-up / attention-circle / attention / back / blog / bug / cancel / canceled / check-circle / check / cheque-fail / cheque-progress / cheque-success / close-circle / close / comment / connect-circle / crop / devices / double-arrow-down / double-arrow-up / enter / export / fail / fave-1 / filter / front / globe / hamburger / help / list / lock-circle / lock / mail-1 / marker / minus / next / output / part / pause / phone-1 / photo / picture / play / playlist / previous / protect / refresh / repeat-song / repeat / save / search / shuffle / statistic / swap / target / time / track / trash / upload / user / volume / wait-2 / wait |