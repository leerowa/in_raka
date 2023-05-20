const message = document.querySelector('#message');
const trigger = document.querySelector('#trigger');

trigger.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun';
});

trigger.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart';
});

trigger.addEventListener('transitioncancel', function() {
  message.textContent = 'transitioncancel';
});

trigger.addEventListener('transitionend', function() {
  message.textContent = 'transitionend';
});
