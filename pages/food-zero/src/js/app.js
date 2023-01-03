// loader

window.onload = function () {
	setTimeout(function () {
		document.body.classList.add("loaded");
		document.querySelector('main').classList.remove('hidden');
		document.querySelector('.footer').classList.remove('hidden');
	}, 500)
}

// header

let lastScroll = 0;
const defaultOffset = 30;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
const containColored = () => header.classList.contains('colored');

window.addEventListener('scroll', () => {
	if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
		header.classList.add('hide');
	} else if (scrollPosition() == 0) {
		header.classList.remove('hide');
	}

	lastScroll = scrollPosition();
})

// header menu

const popupLinks = document.querySelectorAll('.menu__open-btn');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	popupLinks.forEach(popupLink => popupLink.addEventListener('click', function (e) {
		const popupName = popupLink.getAttribute('href').replace('#', '');
		const curentPopup = document.querySelector(`#${popupName}`);
		popupOpen(curentPopup);
		e.preventDefault();
	}));
}

const popupCloseIcon = document.querySelectorAll('.menu__close-btn');
if (popupCloseIcon.length > 0) {
	popupCloseIcon.forEach(el => el.addEventListener('click', function (e) {
		popupClose(el.closest('.menu__screen'));
		e.preventDefault();
	}))
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.menu__screen.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.menu__content')) {
				popupClose(e.target.closest('.menu__screen'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		lockPadding.forEach(el => el.style.paddingRight = lockPaddingValue);
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			lockPadding.forEach(el => el.style.paddingRight = '0px');
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.menu__screen.open');
		popupClose(popupActive);
	}
});

// arrow to top

window.addEventListener('scroll', function () {
	let arrowToTop = document.querySelector('.arrow-to-top');
	arrowToTop.addEventListener('click', () => {
		window.scrollTo(pageXOffset, 0);
		arrowToTop.classList.add('hidden');
	})
	if (pageYOffset > document.documentElement.clientHeight) {
		arrowToTop.classList.remove('hidden');
	} else {
		arrowToTop.classList.add('hidden');
	}
})

// Slider

let swiper = document.querySelector('.swiper');

if (swiper) {
	const mainSwiper = new Swiper(swiper, {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				allowTouchMove: false,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		speed: 700,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	})
}

// timer

document.addEventListener('DOMContentLoaded', () => {
	let page = document.querySelector('.coming-soon');

	if (page) {
		const someEvent = new Date('Jan 1 2024 00:00:00');

		const daysVal = document.querySelector('.timer__days .timer__value');
		const hoursVal = document.querySelector('.timer__hours .timer__value');
		const minutesVal = document.querySelector('.timer__minutes .timer__value');
		const secondsVal = document.querySelector('.timer__seconds .timer__value');

		const timeCount = () => {
			let now = new Date();
			let leftUntil = someEvent - now;

			let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
			let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
			let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
			let seconds = Math.floor(leftUntil / 1000) % 60;

			daysVal.textContent = days;
			hoursVal.textContent = hours;
			minutesVal.textContent = minutes;
			secondsVal.textContent = seconds;

		};

		timeCount();
		setInterval(timeCount, 1000);
	}
});
