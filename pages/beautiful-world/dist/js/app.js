window.onload = function () {
	setTimeout(function () {
		document.body.classList.add("loaded");
	}, 500)
}

// 3D Scroll

let zSpacing = -2000;
let = lastPoz = zSpacing / 5;
let = $frames = document.getElementsByClassName('frame');
let = frames = Array.from($frames);
let = zVals = [];

window.onscroll = function () {

	let top = document.documentElement.scrollTop;
	let delta = lastPoz - top

	lastPoz = top;

	frames.forEach(function (currentEl, indexEl) {
		zVals.push((indexEl * zSpacing) + zSpacing);
		zVals[indexEl] += delta * -3;
		let frame = frames[indexEl];
		let transform = `translateZ(${zVals[indexEl]}px)`;
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
