// https://github.com/genjiXYZ/banner_winter
var domBanner = document.querySelector(".banner");

var myCanvas = document.querySelector(".snow");


var reqSign
var per = 0;
var enterX = 0

domBanner.addEventListener("mouseenter", (e) => {
	enterX = e.clientX
	domBanner.classList.add("moving");
})
domBanner.onmousemove = (e) => Move(e, enterX, domBanner);

domBanner.addEventListener("mouseleave", (e) => {
	cancleNextAnime()
	domBanner.style.setProperty("--per", 0);
	domBanner.classList.remove("moving");
	//transition time   ratio /  ( 0.3s / 1fps )
	SnowAnime.leave((Math.abs(per) / (300 / 16)).toFixed(3) * 1)
})

window.addEventListener('resize', () => {
	onResize()
})


function onResize() {
	let myLayer = document.querySelectorAll('.layer')
	myLayer.forEach(e => {
		if (e.children[0].nodeName === 'CANVAS') {
			e.children[0].style.width = `${document.querySelector('.banner').clientWidth * 1}px`
		}
		e.children[0].style.width = `${document.querySelector('.banner').clientWidth * 1.2}px`
	})
};

function Move(e, enterX, dom) {
	if (!reqSign) {
		reqSign = requestAnimationFrame(() => {
			reqSign = null
			per = (e.clientX - enterX) / dom.clientWidth;
			dom.style.setProperty("--per", per);
		});
	}
};
function cancleNextAnime() {
	cancelAnimationFrame(reqSign)
	reqSign = null
}

window.onblur = () => {
	SnowAnime.stop()
	document.title = "雪停了"
};
window.onfocus = () => {
	SnowAnime.stop();
	SnowAnime.start();
	document.title = "下雪中"
};

var SnowAnime = new Snow(myCanvas);
SnowAnime.start();