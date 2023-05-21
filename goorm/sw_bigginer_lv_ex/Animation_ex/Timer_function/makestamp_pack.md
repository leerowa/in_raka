```html
html
<button id='button'>START</button>
<div id='textWrapper'></div>
```

```css
css
#textWrapper {
	font-size: 2rem;
	font-weight: bold;
}
```

```js
js
const button = document.querySelector('#button');

function printText() {
	const textWrapper = document.querySelector('#textWrapper');
	textWrapper.textContent += 'goorm \n';
}

let timerId = -1;
button.addEventListener('click', () => {
	const isActivated = button.textContent === 'STOP'
  button.textContent =  isActivated ? 'PRINT' : 'STOP';
	if (isActivated) return clearInterval(timerId); /*if문이 거짓이면 리턴과 밑의 명령이 실행된다. */
	timerId = setInterval(printText, 1000);
});
```
