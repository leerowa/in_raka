/*
first ex , use add() and remove()
*/
const sideBar = document.querySelector('#sideBar');
const menuBtn = document.querySelector('#menuBtn');

function showMenu() {
	sideBar.classList.add('active');
};
function hideMenu() {
	sideBar.classList.remove('active');
};
menuBtn.addEventListener('click', showMenu);
sideBar.addEventListener('click', hideMenu);


/*
second ex , use contains()
*/
const sideBar = document.querySelector('#sideBar');
const menuBtn = document.querySelector('#menuBtn');

function toggleMenu() {
	const isActive = sideBar.classList.contains('active');
	if (isActive)
		return sideBar.classList.remove('active');
	else {
		return sideBar.classList.add('active');
	}
};

menuBtn.addEventListener('click', toggleMenu);
sideBar.addEventListener('click', toggleMenu);



/*
thirs ex , use toggle()
*/
const sideBar = document.querySelector('#sideBar');
const menuBtn = document.querySelector('#menuBtn');

function toggleMenu() {
	return sideBar.classList.toggle('active');
};

menuBtn.addEventListener('click', toggleMenu);
sideBar.addEventListener('click', toggleMenu);
