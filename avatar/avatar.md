# Аватар

Блок, отображающий аватарку пользователя. [Пример](https://codepen.io/whitepapertools/pen/22222a8a7ecf82d941fe57a170619ac8/)

```js
{
	block: 'avatar',
	content: [
	// здесь может быть блок счетчика или уведомлений, 
	// которые располагаются поверх аватарки
	{
		elem: 'photo',
		elemMods: { size: 'm' },
		content: [
		{
			block: 'image',
			url: 'http://image'
		}]
	}]
}
```

Модификатор элемента 'photo'   | Значение
------------------------------ | --------------
size                           | xs / s / m / l
