# bilibili 冬季 banner



#### 完整demo:  [https://genjixyz.github.io/banner_winter/](https://genjixyz.github.io/banner_winter/)

#### canvas demo: [https://codepen.io/895939059/pen/abmPLeP](https://codepen.io/895939059/pen/abmPLeP)

-----

  

### 对比

 之前的'秋季' banner 是通过js控制 transform opacity,

'冬季'是通过js控制 `css变量` `--per`  transform calc( .... ) 来控制的.

### 小细节

#### 写 html 时候要注意图片的顺序 

方便opacity 变化  和懒得写z-index



#### 鼠标离开

1. 用leave 别用 out 

2. 鼠标离开后,图片缓动复原 官网没有改变`class `也没有动态改变 `tansition` 是用 [Bezier-easing](https://github.com/gre/bezier-easing) js.   (也挺好用 "秋"我是用的这个感觉有点麻烦)

   我是用 通过 绑定`class`  离开时候有`transition `,进入时候没有`transition`(我感觉更好用,主要是方便)

3. `canvas` 离开 时候也要添加个leave方法 将视差的offsetX  还原

   ```js
   //我封装class 里的方法  所以用的箭头函数  看不习惯可以  在 construction bind(this)下
   //per 是当前鼠标移动的百分比  -1 ~ 1  让per => 0
   leave = () => {
       let step = 0.07;
       if (per > 0 && per - step > 0) {
         per -= step;
         this.perReqFlag = requestAnimationFrame(this.leave);
       } else if (per < 0 && per + step < 0) {
         per += step;
         this.perReqFlag = requestAnimationFrame(this.leave);
       } else {
         per = 0;
         cancelAnimationFrame(this.perReqFlag);
       }
     };
   ```

   



#### canvas

官网的雪是有点规律的 ,我觉得是为了有更高的视觉效果,一共分了三层 .

我懒了!全部在一定范围内随机的 => 大小  , 位置 , 透明度 ,速度,   

因为是有视差的,所以`近大远小` ,`近快远慢`.

我通过 `雪花` 的`大小`来让它的 `速度` `透明度` 在一定范围内随机:

```js
 this.x = this.randBetween(0, window.innerWidth);
 this.y = this.randBetween(0, -window.innerHeight);  
 this.vx = 0;
if (this.radius >= 3.5) {
      this.vy = this.randBetween(1.5, 2);
      this.alpha = this.randBetween(0.5, 0.9);
    } else {
      this.vy = this.randBetween(1, 1.5);
      this.alpha = this.randBetween(0.1, 0.9);
    }
///
 randBetween(min, max) {
    return min + Math.random() * (max - min);
  }
```

> 官网canvas(一看就是南方的雪❄️) 我写了两个版本 
>
> `东北的雪`(鼠标移动=>大风+视差) 
>
> `南方的雪`(鼠标移动=>视差).







### 待更新: ~~当鼠标离开 canvas 后应该 easing 回到原来位置~~( 已经更新)

### 小优化:

1. 之前秋季 是控制了全部图片的 `transform` `opacity`
   "冬季"没有改变最下面图片的透明度 , 是通过改变上层达到类似效果.
   同理blur 也是没有变 ,通过控制上层opacity 达到类似效果.

2. `mousemove` 使用 `requestAnimationFrame` 来节流,我的破电脑不知道怎么回事,节流了反而卡顿了.(换个带显卡的,就不卡了). 感觉是负优化


3. canvas  封装成class  以便大家,和我以后使用.  


转载请标注! [https://github.com/genjiXYZ](
