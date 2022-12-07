// loader

window.onload = function () {
	setTimeout(function () {
		document.body.classList.add("loaded");
	}, 500)
}

// alider

document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i + 1}`] = new Swiper(n, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125,
	})
});

bindSwipers(slider1, slider2, slider3, slider4);

// popup

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');

if (popupLinks.length > 0) {
	popupLinks.forEach(popupLink => popupLink.addEventListener('click', function (e) {
		const popupName = popupLink.getAttribute('href').replace('#', '');
		const curentPopup = document.querySelector(`#${popupName}`);
		popupOpen(curentPopup);
		e.preventDefault();
	}));
}

function popupOpen(curentPopup) {
	if (curentPopup) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive);
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			popupClose(e.target.closest('.popup'));
		});
	}
}

function popupClose(popupActive) {
	popupActive.classList.remove('open');
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
})
