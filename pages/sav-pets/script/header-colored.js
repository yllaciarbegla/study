let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header-wrapper');
const headerImage = document.querySelector('.header__logo-image');
let menuButton = document.querySelector('.menu-btn');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('bg_colored');

window.addEventListener('scroll', () => {
	if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
		header.classList.add('bg_colored');
		headerImage.src = 'images/icon/white-logo.svg';
	} else if (scrollPosition() == 0 && containHide()) {
		header.classList.remove('bg_colored');
		headerImage.src = 'images/icon/blue-logo.svg';
	}

	lastScroll = scrollPosition();
});

menuButton.addEventListener('mousedown', () => {
	header.classList.add('bg_colored');
	headerImage.src = 'images/icon/white-logo.svg';
});
menuButton.addEventListener('keypress', (e) => {
	if (e.keyCode == 13 || e.keyCode == 32) {
		header.classList.add('bg_colored');
		headerImage.src = 'images/icon/white-logo.svg';
	}
});
