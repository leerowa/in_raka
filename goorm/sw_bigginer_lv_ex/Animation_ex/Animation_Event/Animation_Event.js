const message = document.querySelector('#message');
const heart = document.querySelector('.heart-wrapper');
const trigger = document.querySelector('#trigger');

let iterationCount = 0;

heart.addEventListener('animationstart', () => {
  message.textContent = 'animationstart';
});

heart.addEventListener('animationiteration', () => {
  ++iterationCount;
  message.textContent = `animationiteration ${iterationCount}`;
});

heart.addEventListener('animationend', () => {
  message.textContent = 'animationend';
  trigger.textContent = 'Start';
	heart.classList.remove('active');
});

heart.addEventListener('animationcancel', () => {
  message.textContent = 'animationcancel';
});

trigger.addEventListener('click', () => {
  heart.classList.toggle('active');
  message.textContent = '';
  iterationCount = 0;
  const isActive = heart.classList.contains('active');
  trigger.textContent = isActive ? 'Stop' : 'Start';
});
