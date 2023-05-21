# **focus**가 발생하면 커지면서 하이라이팅되는 입력창

- ocusout에서도 하이라이트이벤트가 발생.
- input에 클래스를 추가하여 모든 스타일 변화를 감지하여 발생한 일
```js
const input = document.querySelector('#input');

const highlightInput = function() {
	input.classList.add('highlight');
};

input.addEventListener('focus',  function() {
  input.classList.add('expand');
	input.addEventListener('transitionend', highlightInput);
});

input.addEventListener('focusout',  function() {
  input.classList.remove('expand');
	input.classList.remove('highlight');
});
```
- 문제의 함수를 고침
- width가 변할때만 하이라이트함수가 추가됨
```js
const highlightInput = function(event) {
	if (event.propertyName !== 'width') return;
	console.log(event);
	input.classList.add('highlight');
};
```
- width가 줄어들어도 하이라이트가 발생하지 않게 transitionend시 함수가 발생하지 않게 함
```js
const highlightInput = function() {	
	if (event.propertyName !== 'width') return;
	console.log(event);
	input.classList.add('highlight');
	return input.removeEventListener('transitionend', highlightInput)
};
```

ai구르미의 해설

위의 소스 코드는 입력 필드(input)에 포커스가 되었을 때, 입력 필드가 확장되고(expand) 그 후에 다시 축소되면서(highlight) 강조 표시하는 기능을 구현한 것입니다.

먼저, input 요소에 focus 이벤트가 발생하면 expand 클래스를 추가하여 입력 필드가 확장되도록 합니다. 그리고 transitionend 이벤트가 발생하면 highlightInput 함수가 실행됩니다. 이 함수는 propertyName이 width인 경우에만 실행되며, 이는 입력 필드가 확장되는 애니메이션이 끝나면 발생하는 이벤트입니다. highlightInput 함수에서는 입력 필드에 highlight 클래스를 추가하여 강조 표시합니다. 마지막으로, transitionend 이벤트 리스너를 제거합니다.

반대로, input 요소에서 focusout 이벤트가 발생하면 expand와 highlight 클래스를 모두 제거하여 입력 필드를 축소하고 강조 표시를 해제합니다.
