

# bilibili 冬季 banner



## demo

#### github-page (科学):  [https://genjixyz.github.io/banner_winter/](https://genjixyz.github.io/banner_winter/)

#### codepen: [https://codepen.io/895939059/pen/abmPLeP](https://codepen.io/895939059/pen/abmPLeP)

#### 国内 : [https://genji.xyz/winter/](https://genji.xyz/winter/)

-----

  ### 声明 

图片和视频版权归bilibili所有,本人仅作为学习使用,如有侵权请联系895939059@qq.com 删除!

### 对比

 之前的'秋季' banner 是通过js控制 transform opacity,

'冬季'是通过js控制 `css变量` `--per`  transform calc( .... ) 来控制的.

### 小优化

1. 改变上层的 `transform` `opacity` 这样就少控制两个图片 , 相应dom 顺序要正确,或者你z-index要排好 .

2. 用mouseleave 不要用 mouseout ,(尽管当大小一致时候没有差别,万一以后上边加点东西呢).
3. 使用将mousemove 节流时候 (无论计时器 还是 requestAnimationFrame)时候. 一定 在mouseleave 时候取消最后一次节流的操作 ,否自 在mouseleave 设定的值 ,会被 最后一次节流更改.  
4. canvas 雪花的 各种值(除了opacity) 尽量用整数 或者 保留几位小数.

5. window.blur  window.onfocus  设定 canvas 播放 / 暂停 .

6. 之前 ''秋""  mouseleave 后的动画  是用 [Bezier-easing](https://github.com/gre/bezier-easing) js 来控制的  (当时蠢没想到)

   现在改为 leave 后 添加 带有transition 的class  , enter 时候在去掉class  (这么简单的玩意 当时怎么就蒙了呢)

7. 

#### canvas

官网的雪是有点规律的 ,我觉得是为了有更高的视觉效果,一共分了三层 .

我懒了!全部在一定范围内随机的 => 大小  , 位置 , 透明度 ,速度,   

因为是有视差的,所以`近大远小` ,`近快远慢`.

我通过 `雪花` 的`大小`,来让它的 `速度` `透明度` 在不同的范围内随机:

并且根据根据大小不同,使鼠标进入后 ,移动的偏移量系数不同.



```js
 this.x = this.randBetween(0, window.innerWidth);
 this.y = this.randBetween(0, -window.innerHeight);  
 this.vx = 0;
if (this.radius >= 3.5) {
      this.vy = this.randBetween(1.5, 2);
      this.alpha = this.randBetween(0.5, 1);
    } else {
      this.vy = this.randBetween(1, 1.5);
      this.alpha = this.randBetween(0.1, 8);
    }
///randBetween
 randBetween(min, max) {
    return min + Math.random() * (max - min);
  }


//class Snow => update
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
```

> 官网canvas(一看就是南方的雪❄️) 我写了两个版本 
>
> `东北的雪`(鼠标移动=>大风+视差)  太逗比了 不放出来了
>
> `南方的雪`(鼠标移动=>视差).







### 待更新:

1. ~~当鼠标离开 canvas 后应该 easing 回到原来位置~~( 已经更新)

   ```js
   //class Snow
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
   
   //index.js   mouseleave  =>  
   	SnowAnime.leave((Math.abs(per) / (300 / 16)).toFixed(3) * 1)
   
   300 => 是动画时间 要和css  transition 同步  (或者你提出来 统一控制)
   16 =>  一帧
   Math.abs(per)  => 离开时候的偏移量
   
   ```

   

   




转载请标注! [https://github.com/genjiXYZ]( https://github.com/genjiXYZ) 
