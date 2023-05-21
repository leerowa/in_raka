```html
<div class='wrapper'>
	<div id='progressBar'>0%</div>
</div>
html
```
```css
css
.wrapper {
	border: 1px solid rgba(0, 0, 0, 0.4);
	border-radius: 8px;
	overflow: hidden;
}
#progressBar {
	width: 0;
	height: 36px;
	background-color: #F9E200;
}
```
```js
js use requestAnimationFrame

const progressBar = document.querySelector("#progressBar");

let progress = 0;
let start;

function step(timestamp) {  
	if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;
	progress = elapsed / 16 / 10
	progressBar.style.width = progress + "%";
	progressBar.innerHTML = progress + "%";
	if (progress < 100) {
		return requestAnimationFrame(step);
	}
}
requestAnimationFrame(step);
```
```js
js use setTimeout

const progressBar = document.querySelector("#progressBar");

let progress = 0;
let timerID = 0;

function step(timestamp) {
	progress += 1;
	progressBar.style.width = progress + "%";
	progressBar.innerHTML = progress + "%";
	if (progress < 100) {
		timerID = setTimeout(step, 100);
	}
}
setTimeout(step, 100);
```
```
```
