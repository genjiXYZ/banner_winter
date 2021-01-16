
var domBanner = document.querySelector(".banner");

var myCanvas = document.querySelector(".snow");

var locked = false
var reqSign
var per = 0;
var enterX = 0

domBanner.addEventListener("mouseenter", (e) => {
	enterX = e.clientX
	domBanner.classList.add("moving");
})

domBanner.addEventListener("mousemove", (e) => {
	Move(e, enterX, domBanner);
});

domBanner.addEventListener("mouseleave", (e) => {
	cancleNextAnime()
	domBanner.style.setProperty("--per", 0);
	domBanner.classList.remove("moving");
	let step =   (Math.abs(per) / (300 / 16)).toFixed(3) * 1
	console.log('step: ', step);
	SnowAnime.leave(step)
})

window.addEventListener('resize',()=>{
	onResize()
})


function onResize() {
	let myLayer = document.querySelectorAll('.layer')
	console.log('myLayer: ', myLayer);
	myLayer.forEach(e => {
		e.children[0].style.width = `${window.innerWidth * 1.2}px`
	
	})
};

function Move(e, enterX, dom) {
	if (!locked) {
		locked = true;
		reqSign = requestAnimationFrame(() => {
			per = (e.clientX - enterX) / dom.clientWidth;

			dom.style.setProperty("--per", per);
			locked = false;
		});
	}
};
function cancleNextAnime() {
	cancelAnimationFrame(reqSign)
	locked = false
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