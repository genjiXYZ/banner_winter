
class Snowflake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radius = 0;
		this.alpha = 0;
		this.reset();
	}
	reset() {
		this.x = this.randBetween(0, window.innerWidth);
		this.y = this.randBetween(0, -window.innerHeight);
		this.vx = 0
		// this.vy = this.randBetween(1, 2);
		this.radius = this.randBetween(2, 4);
		if (this.radius >= 3.5) {
			this.vy = this.randBetween(1.5, 2);
			this.alpha = this.randBetween(0.5, 0.9);
		} else {
			this.vy = this.randBetween(1, 1.5);
			this.alpha = this.randBetween(0.1, 0.9);
		}

	}
	randBetween(min, max) {
		return min + Math.random() * (max - min);
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;

		if (this.y + this.radius > window.innerHeight) {
			this.reset();
		}
	}
}

class Snow {
	constructor() {
		this.canvas = document.querySelector(".snow");
		this.ctx = this.canvas.getContext("2d");

		window.addEventListener("resize", () => this.onResize());
		this.onResize();
		this.updateBound = this.update.bind(this);


		this.createSnowflakes();
	}

	onResize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width;
		this.canvas.height = this.height / 5;
	}

	createSnowflakes() {
		const flakes = window.innerWidth / 3;

		this.snowflakes = []
		for (let s = 0; s < flakes; s++) {
			this.snowflakes.push(new Snowflake());
		}
	}

	update() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		for (let flake of this.snowflakes) {
			flake.update();

			this.ctx.save();
			this.ctx.fillStyle = "#FFF";
			this.ctx.beginPath();
			if (flake.radius >= 3) {
				this.ctx.arc(flake.x + per * 160, flake.y, flake.radius, 0, Math.PI * 2);
			} else {
				this.ctx.arc(flake.x + per * 80, flake.y, flake.radius, 0, Math.PI * 2);
			}
			this.ctx.closePath();
			this.ctx.globalAlpha = flake.alpha;
			this.ctx.fill();
			this.ctx.restore();
		}
		this.reqFlag = requestAnimationFrame(this.updateBound);
	}
	start() {
		this.reqFlag = requestAnimationFrame(this.updateBound);

	}
	stop() {
		cancelAnimationFrame(this.reqFlag)
	}
}

// let banner = document.querySelector('.snow')
// banner.onmouseenter = () => {
// 	new Snow
// }
let dd = new Snow
dd.start()


window.onblur = function () {
	dd.stop()
}


window.onfocus = function () {
	dd.stop()
	dd.start()
}







var hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
	state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
	hidden = "mozHidden";
	visibilityChange = "mozvisibilitychange";
	state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
	state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
	state = "webkitVisibilityState";
}
document.addEventListener(visibilityChange, function () {
	document.title = document[hidden] ? "用户离开了" : "用户回来了";

});






let snow = document.querySelector(".snow")

let start =
	snow.addEventListener('mouseenter', (e) => {

		start = e.clientX

	})


var per
snow.addEventListener('mousemove', (e) => {
	per = (start - e.clientX) / snow.clientWidth


})

snow.addEventListener('mouseleave', (e) => {
	per = 0


})