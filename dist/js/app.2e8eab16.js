(function(e){function t(t){for(var i,o,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11bd":function(e,t,n){},1707:function(e,t,n){"use strict";n("d847")},"56d7":function(e,t,n){"use strict";n.r(t);n("984e"),n("a141"),n("fa3d"),n("dbb3");var i=n("8bbf");function r(e,t,n,r,a,o){var c=Object(i["resolveComponent"])("Banner");return Object(i["openBlock"])(),Object(i["createBlock"])(c,{pictures:r.pictures},null,8,["pictures"])}n("a593"),n("cdd7");var a=Object(i["withScopeId"])("data-v-3e2c2c1f");Object(i["pushScopeId"])("data-v-3e2c2c1f");var o={class:"layer canvas"};Object(i["popScopeId"])();var c=a((function(e,t,n,r,a,c){var s=Object(i["resolveComponent"])("CanvasSnow");return Object(i["openBlock"])(),Object(i["createBlock"])("div",{class:"banner",onMousemove:t[1]||(t[1]=function(){return r.move&&r.move.apply(r,arguments)}),onMouseenter:t[2]||(t[2]=function(){return r.enter&&r.enter.apply(r,arguments)}),onMouseleave:t[3]||(t[3]=function(){return r.leave&&r.leave.apply(r,arguments)}),ref:"domBanner"},[(Object(i["openBlock"])(!0),Object(i["createBlock"])(i["Fragment"],null,Object(i["renderList"])(n.pictures,(function(e){return Object(i["openBlock"])(),Object(i["createBlock"])("div",{class:["layer",e.name],key:e.name},[e.link?(Object(i["openBlock"])(),Object(i["createBlock"])("img",{key:0,src:e.link,style:{width:"".concat(r.itemWidth,"px")},alt:""},null,12,["src"])):Object(i["createCommentVNode"])("",!0),e.video?(Object(i["openBlock"])(),Object(i["createBlock"])("video",{key:1,autoplay:"",loop:"",muted:"",style:{width:"".concat(r.itemWidth,"px")},src:e.video},null,12,["src"])):Object(i["createCommentVNode"])("",!0)],2)})),128)),Object(i["createVNode"])("div",o,[Object(i["createVNode"])(s,{style:{width:"".concat(r.itemWidth,"px")},percent:r.percent},null,8,["style","percent"])])],544)})),s=Object(i["withScopeId"])("data-v-ae3e1054");Object(i["pushScopeId"])("data-v-ae3e1054");var u={class:"snow_canvas"};Object(i["popScopeId"])();var l=s((function(e,t,n,r,a,o){return Object(i["openBlock"])(),Object(i["createBlock"])("canvas",u)})),p=(n("df8c"),n("9e9d"),n("051d"),n("baba"),n("7d9d")),d=n("e172"),h={props:{percent:{type:Number}},setup:function(e){var t=function(){function e(){Object(p["a"])(this,e),this.x=0,this.y=0,this.vx=0,this.vy=0,this.radius=0,this.alpha=0,this.reset()}return Object(d["a"])(e,[{key:"reset",value:function(){this.x=this.randBetween(0,window.innerWidth),this.y=this.randBetween(0,-window.innerHeight),this.vx=0,this.radius=this.randBetween(1,4),this.radius>=2?(this.vy=this.randBetween(1,1.5),this.alpha=this.randBetween(.6,1)):(this.vy=this.randBetween(.1,1.2),this.alpha=this.randBetween(.1,.9))}},{key:"randBetween",value:function(e,t){return e+Math.random()*(t-e)}},{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy,this.y+this.radius>window.innerHeight&&this.reset()}}]),e}(),n=function(){function n(){var e=this;Object(p["a"])(this,n),this.canvas=document.querySelector(".snow_canvas"),this.ctx=this.canvas.getContext("2d"),this.updateBound=this.update.bind(this),window.addEventListener("resize",(function(){e.onResize()})),this.onResize(),this.createSnowflakes()}return Object(d["a"])(n,[{key:"onResize",value:function(){this.canvas.width=1.2*window.innerWidth,this.canvas.height=document.querySelector(".snow_canvas").clientHeight}},{key:"createSnowflakes",value:function(){var e=window.innerWidth/3;this.snowflakes=[];for(var n=0;n<e;n++)this.snowflakes.push(new t)}},{key:"update",value:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.snowflakes.forEach((function(n){n.update(),t.ctx.save(),t.ctx.fillStyle="#FFF",t.ctx.beginPath(),n.radius>=3?t.ctx.arc(n.x+150*e.percent,n.y,n.radius,0,2*Math.PI):t.ctx.arc(n.x+70*e.percent,n.y,n.radius,0,2*Math.PI),t.ctx.closePath(),t.ctx.globalAlpha=n.alpha,t.ctx.shadowColor="#FFF",t.ctx.shadowBlur=20,t.ctx.fill(),t.ctx.restore()})),this.reqFlag=requestAnimationFrame(this.updateBound)}},{key:"start",value:function(){this.reqFlag=requestAnimationFrame(this.updateBound)}},{key:"stop",value:function(){cancelAnimationFrame(this.reqFlag)}}]),n}();Object(i["onMounted"])((function(){var e=new n;e.start()}))}};n("1707");h.render=l,h.__scopeId="data-v-ae3e1054";var v=h,f={name:"banner",components:{CanvasSnow:v},props:{pictures:Object},setup:function(){var e=Object(i["ref"])(""),t=0,n=Object(i["ref"])(0),r=function(n){t=n.clientX,e.value.classList.add("moving")},a=function(){n.value=0,e.value.style.setProperty("--per",0),e.value.classList.remove("moving")},o=function(n){s(n,t,e.value)},c=!1,s=function(e,t,i){c||(c=!0,requestAnimationFrame((function(){n.value=(e.clientX-t)/i.clientWidth,i.style.setProperty("--per",n.value),c=!1})))},u=Object(i["ref"])(1.2*window.innerWidth),l=function(){u.value=1.2*window.innerWidth};return window.addEventListener("resize",l),{domBanner:e,move:o,enter:r,leave:a,itemWidth:u,percent:n}}};n("71a7"),n("6835");f.render=c,f.__scopeId="data-v-3e2c2c1f";var b=f,w={name:"App",components:{Banner:b},setup:function(){var e=Object(i["reactive"])([{name:"winter_noon",link:"https://picgo.genji.xyz/bilibili_banner_winter/winter_noon.jpg"},{name:"winter_afternoon",link:"https://picgo.genji.xyz/bilibili_banner_winter/winter_afternoon.jpg"},{name:"snowBall",link:"https://picgo.genji.xyz/bilibili_banner_winter/snowBall.png"},{name:"winter_evening",link:"",video:"https://picgo.genji.xyz/bilibili_banner_winter/winter_evening.webm"},{name:"window",link:"https://picgo.genji.xyz/bilibili_banner_winter/window.png"},{name:"tree_snow",link:"https://picgo.genji.xyz/bilibili_banner_winter/tree_snow.png"},{name:"tree_sunshine",link:"https://picgo.genji.xyz/bilibili_banner_winter/tree_sunshine.png"},{name:"tree",link:"https://picgo.genji.xyz/bilibili_banner_winter/tree.png"}]);return{pictures:e}}};n("9102");w.render=r;var y=w;Object(i["createApp"])(y).mount("#app")},6835:function(e,t,n){"use strict";n("6cee")},"6cee":function(e,t,n){},"6f2e":function(e,t,n){},"71a7":function(e,t,n){"use strict";n("6f2e")},"8bbf":function(e,t){e.exports=vue},9102:function(e,t,n){"use strict";n("11bd")},d847:function(e,t,n){}});
//# sourceMappingURL=app.2e8eab16.js.map