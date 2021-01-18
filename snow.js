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
    this.x = Math.floor(this.randBetween(0, window.innerWidth));
    this.y = -155;
    this.vx = 0;
    // this.vy = this.randBetween(1, 2);
    this.radius = this.randBetween(2, 4).toFixed(4) * 1;
    if (this.radius >= 3.5) {
      this.vy = this.randBetween(0.8, 1.5).toFixed(4) * 1;
      this.alpha = this.randBetween(0.5, 1);
    } else {
      this.vy = this.randBetween(0.5, 1).toFixed(4) * 1;
      this.alpha = this.randBetween(0.1, 1);
    }
  }
  randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  update(height) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.radius > height) {
      this.reset();
    }
  }
}

class Snow {
  constructor(el) {
    this.canvas = el;
    this.ctx = this.canvas.getContext("2d");
    this.updateBound = this.update.bind(this);
    this.flakesNumber = Math.floor(window.innerWidth / 8);
    window.addEventListener("resize", () => this.onResize());
    this.onResize();
    this.createSnowflakes();
  }

  onResize() {
    this.width =document.querySelector('.banner').clientWidth ;
    this.height = document.querySelector('.banner').clientHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createSnowflakes() {
    const flakes = this.flakesNumber;
    this.snowflakes = [];
    for (let s = 0; s < flakes; s++) {
      this.snowflakes.push(new Snowflake());
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.snowflakes.forEach((flake) => {
      flake.update(this.height);
      this.ctx.save();
      this.ctx.fillStyle = "#FFF";
      this.ctx.beginPath();

      if (flake.radius >= 3) {
        this.ctx.arc(flake.x + per * 200, flake.y, flake.radius, 0, Math.PI * 2)
      } else {
        this.ctx.arc(flake.x + per * 80, flake.y, flake.radius, 0, Math.PI * 2);
      }
      this.ctx.closePath();
      this.ctx.globalAlpha = flake.alpha;
      this.ctx.fill();
      this.ctx.restore();
    });

    this.reqFlag = requestAnimationFrame(this.updateBound);
  }
  start() {
    this.reqFlag = requestAnimationFrame(this.updateBound);
  }
  stop() {
    cancelAnimationFrame(this.reqFlag);
  }
  leave = (step) => {
    if (per > 0 && per - step > 0) {
      per -= step;
      this.perReqFlag = requestAnimationFrame(() => this.leave(step));
    } else if (per < 0 && per + step < 0) {
      per += step;
      this.perReqFlag = requestAnimationFrame(() => this.leave(step));
    } else {
      per = 0;
      cancelAnimationFrame(this.perReqFlag);
    }
  };
}
