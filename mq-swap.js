(function(){
swap = {
	img : function(el){
		this.el = el;
		var data = el.getAttribute('data-swap');
		this.sources = new Array();
		var json = JSON.parse(data);
		var i = 0;
		for (var k in json){
			if(json.hasOwnProperty(k)){
				console.log(json);
				this.sources[i] = {
					'src': k,
					'mq': json[k]
				}
			}
			i++;
		}
	},
	getImgs: function(){
		var imgs = document.querySelectorAll('[data-swap]');
		var imgObjs = new Array();
		for(var i = 0; i < imgs.length; i++){
			imgObjs[i] = new this.img(imgs[i]);
		}
		return imgObjs;
	},
	init: function(){
		this.imgs = this.getImgs();
		this.reflow();
		window.onresize = function(){
			this.swap.reflow();
		};
	},
	resize: function(){
		for(var i = 0; i < this.imgs.length; i++){
			for(var j = this.imgs[i].sources.length - 1; j >= 0; j--){
				if(matchMedia(this.imgs[i].sources[j].mq).matches){
					if (this.imgs[i].el.getAttribute('src') != this.imgs[i].sources[j]['src']) this.imgs[i].el.src = this.imgs[i].sources[j]['src'];
					break;
				}
			}
		}
	},
	reflow: function(){
		debounce(this.resize(), 500);
	}
}

//debouncing from kevin chisholm
//blog.kevinchisholm.com
 var to = true,
debounce = function(fn, d){
    if (to) {
    window.clearTimeout(to);
    }
    to = window.setTimeout(fn, d);
};
})();