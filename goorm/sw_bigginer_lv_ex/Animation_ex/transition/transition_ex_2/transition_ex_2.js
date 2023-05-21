const input = document.querySelector('#input');

const highlightInput = function() {	
	if (event.propertyName !== 'width') return;
	console.log(event);
	input.classList.add('highlight');
	return input.removeEventListener('transitionend', highlightInput)
};
input.addEventListener('focus',  function() {
  input.classList.add('expand');
	input.addEventListener('transitionend', highlightInput);
});

input.addEventListener('focusout',  function() {
  input.classList.remove('expand');
	input.classList.remove('highlight');
});
