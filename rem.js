(function(){
	console.log(1);
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
	var metaEl = document.querySelector('meta[name="viewport"]');
	dpr = window.devicePixelRatio || 1;
	scale = 1 / parseInt(dpr);
	rem = docEl.clientWidth * parseInt(dpr) / 10;
	// 设置viewport，进行缩放，达到高清效果
	metaEl.setAttribute('content', 'width=' + Number(parseInt(dpr) * docEl.clientWidth) + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');
	// 设置data-dpr属性，留作的css hack之用
	docEl.setAttribute('data-dpr', parseInt(dpr));
	// 设置html的字体
	var fon = 'font-size:' + rem + 'px';
	docEl.setAttribute('style',fon );
	// 动态写入样式
	// docEl.firstElementChild.appendChild(fontEl);
	// fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
	// 给js调用的，某一dpr下rem和px之间的转换函数
	window.rem2px = function(v) {
	    v = parseFloat(v);
	    return v * rem;
	};
	window.px2rem = function(v) {
	    v = parseFloat(v);
	    return v / rem;
	};
	window.dpr = dpr;
	window.rem = rem;
})()