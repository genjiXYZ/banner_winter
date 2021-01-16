# bilibili 冬季 banner
完整demo: [https://genjixyz.github.io/banner_winter/](https://genjixyz.github.io/banner_winter/)
canvas demo: [https://codepen.io/895939059/pen/abmPLeP](https://codepen.io/895939059/pen/abmPLeP)

 

#### 之前的'秋季' banner 是通过js控制 transform opacity,

#### '冬季'是通过js控制 `css变量` `--per`  transform calc( .... ) 来控制的.

#### 细心点能看到 `canvas` 也是有视差的(一看就是南方的雪❄️) 我写了两个版本 一个`东北的雪`(鼠标移动=>大风+视差) `南方的雪`(鼠标移动=>视差).

#### 用`vue3`写得 , 主要是为了熟练下 `vue3`  文件夹 `pure` 是用js写得.



待更新: 当鼠标离开 canvas 后应该 easing 回到原来位置
小优化:

1. 之前秋季 是控制了全部图片的 `transform` `opacity`
"冬季"没有改变最下面图片的透明度 , 是通过改变上层达到类似效果.
同理blur 也是没有变 ,通过控制上层opacity 达到类似效果.

2. `mousemove` 使用 `requestAnimationFrame` 来节流,我的破电脑不知道怎么回事,节流了反而卡顿了.(换个带显卡的,就不卡了). 感觉是负优化


3. canvas  封装成class  以便大家,和我以后使用.  
