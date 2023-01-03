window.addEventListener('load', windowLoad);

function windowLoad() {

	let page = document.querySelector('.page');

	setTimeout(function () {
		page.classList.add("loaded");
	}, 500);

	// Theme switch
	const html = document.documentElement;
	const saveUserTheme = localStorage.getItem('user-theme');
	const themeButton = document.querySelector('.theme-switch__button');

	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => !saveUserTheme ? changeTheme() : null);

	if (themeButton) {
		themeButton.addEventListener('click', function () {
			changeTheme(true);
		});
	}

	function setThemeClass() {
		if (saveUserTheme) {
			html.classList.add(saveUserTheme);
		} else {
			html.classList.add(userTheme);
		}
	}

	setThemeClass();

	function changeTheme(saveTheme = false) {
		let currentTheme = html.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		html.classList.remove(currentTheme);
		html.classList.add(newTheme);


		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}

	// Cursor
	let aura = document.querySelector('.aura');
	let cursor = document.querySelector('.cursor');
	let activeButtons = document.querySelectorAll('.active-button');
	document.addEventListener('mousemove', function (e) {
		let x = e.clientX;
		let y = e.clientY;
		aura.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
	});

	document.addEventListener('mousemove', function (e) {
		let x = e.clientX;
		let y = e.clientY;
		cursor.style.left = x + 'px';
		cursor.style.top = y + 'px';
	});

	document.addEventListener('mousedown', function () {
		cursor.classList.add('cursorinnerhover');
	});

	document.addEventListener('mouseup', function () {
		cursor.classList.remove('cursorinnerhover');
	});

	document.addEventListener('mousemove', function () {
		cursor.classList.remove('hidden');
		aura.classList.remove('hidden');
	});

	document.addEventListener('mouseout', function () {
		cursor.classList.add('hidden');
		aura.classList.add('hidden');
	});

	activeButtons.forEach(item => {
		item.addEventListener('mousemove', function () {
			cursor.classList.add('active');
			aura.classList.add('active');
		});
	})

	activeButtons.forEach(item => {
		item.addEventListener('mouseout', function () {
			cursor.classList.remove('active');
			aura.classList.remove('active');
		});
	})

	// Slider

	const swiper = new Swiper('.swiper', {
		speed: 700,
		keyboard: true,
		simulateTouch: false,
		mousewheel: true,
		navigation: {
			nextEl: '.swiper-button-next',
		},
		direction: 'horizontal',
		effect: 'coverflow',
		coverflowEffect: {
			slideShadows: false,
			rotate: 100,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: {
			768: {
				direction: 'vertical',
			}
		}
	});

	// Animations

	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('_element-show');
			}
		});
	}

	let options = {
		threshold: [0.5]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.element-animation');

	for (let elm of elements) {
		observer.observe(elm);
	}

	// Projects

	let firstLink = document.querySelector('#first-link');
	let firstItem = document.querySelector('#first-item');

	firstLink.addEventListener('mouseover', function () {
		firstItem.classList.add('hello');
	});

	firstLink.addEventListener('mouseout', function () {
		firstItem.classList.remove('hello');
	});

	let secondLink = document.querySelector('#second-link');
	let secondItem = document.querySelector('#second-item');

	secondLink.addEventListener('mouseover', function () {
		secondItem.classList.add('hello');
	});

	secondLink.addEventListener('mouseout', function () {
		secondItem.classList.remove('hello');
	});

	let thirdLink = document.querySelector('#third-link');
	let thirdItem = document.querySelector('#third-item');

	thirdLink.addEventListener('mouseover', function () {
		thirdItem.classList.add('hello');
	});

	thirdLink.addEventListener('mouseout', function () {
		thirdItem.classList.remove('hello');
	});

	let fourthLink = document.querySelector('#fourth-link');
	let fourthItem = document.querySelector('#fourth-item');

	fourthLink.addEventListener('mouseover', function () {
		fourthItem.classList.add('hello');
	});

	fourthLink.addEventListener('mouseout', function () {
		fourthItem.classList.remove('hello');
	});

	let fifthLink = document.querySelector('#fifth-link');
	let fifthItem = document.querySelector('#fifth-item');

	fifthLink.addEventListener('mouseover', function () {
		fifthItem.classList.add('hello');
	});

	fifthLink.addEventListener('mouseout', function () {
		fifthItem.classList.remove('hello');
	});
}