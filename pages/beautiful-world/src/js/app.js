// 3D Scroll

let zSpacing = -2000;
let =	lastPoz = zSpacing / 5;
let =	$frames = document.getElementsByClassName('frame');
let =	frames = Array.from($frames);
let =	zVals = [];

window.onscroll = function () {

	let top = document.documentElement.scrollTop;
	let	delta = lastPoz - top

	lastPoz = top;

	frames.forEach(function (currentEl, indexEl) {
		zVals.push((indexEl * zSpacing) + zSpacing);
		zVals[indexEl] += delta * -3;
		let frame = frames[indexEl];
		let	transform = `translateZ(${zVals[indexEl]}px)`;
		let opacity = zVals[indexEl] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector('.soundbutton');
let audio = document.querySelector('.audio');

soundButton.addEventListener('click', () => {
	soundButton.classList.toggle('paused');
	audio.paused ? audio.play() : audio.pause();
})

window.onfocus = () => {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play();
}

window.onblur = () => {
	audio.pause();
}

// Cursor

let aura = document.querySelector('.aura');
let cursor = document.querySelector('.cursor');

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

soundButton.addEventListener('mousemove', function () {
	cursor.classList.add('active');
	aura.classList.add('active');
});

soundButton.addEventListener('mouseout', function () {
	cursor.classList.remove('active');
	aura.classList.remove('active');
});