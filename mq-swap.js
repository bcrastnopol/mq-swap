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
		this.to = true;
		this.reflow();
		window.onresize = function(){
			this.swap.reflow();
		};
	},
	resize: function(){
		self = this.swap.imgs;
		for(var i = 0; i < self.length; i++){
			for(var j = self[i].sources.length - 1; j >= 0; j--){
				if(matchMedia(self[i].sources[j].mq).matches){
					if (self[i].el.getAttribute('src') != self[i].sources[j]['src']) self[i].el.src = self[i].sources[j]['src'];
					break;
				}
			}
		}
	},
	reflow: function(){
		this._debounce(this.resize, 300);
	},

	_debounce: function(fn, d){ 	//debouncing from kevin chisholm blog.kevinchisholm.com
	    if (this.to) {
	    window.clearTimeout(this.to);
	    }
	    to = window.setTimeout(fn, d);
	}
}


})();