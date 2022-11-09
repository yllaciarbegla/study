// Accordion

document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('accordion-item_active')) {
			parent.classList.remove('accordion-item_active');
		} else {
			document
				.querySelectorAll('.accordion-item')
				.forEach((child) => child.classList.remove('accordion-item_active'))
			parent.classList.add('accordion-item_active')
		}
	})
)

// // Slider

const swiper = new Swiper('.swiper', {
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		1024: {
			allowTouchMove: false,
			slidesPerView: 3,
			spaceBetween: 20
		}
	},
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// Burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__navigation');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.parentElement.classList.toggle('_lock');
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

// Animation

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('_element-show');
		}
	});
}

let options = {
	threshold: [0.2]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elem of elements) {
	observer.observe(elem);
}