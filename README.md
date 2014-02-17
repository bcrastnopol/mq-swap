mq-swap
=======

Swaps img srcs with javascript media queries

test images are from wallpaperstock.net

Usage:
	add the data-swap attribute to the image(s) you want to swap.  
	data-swap takes in a json object where the key is the image url and the value is the media query
	for example :
	<pre><pre><img src="" data-swap="{
			img/a.jpg : screen and (min-width: 1px),
			img/b.jpg : screen and (min-width: 768px),
			img/d.jpg : screen and (min-width: 1024px)
		}" alt=""></pre></pre>
	Then to run it, include <pre>swap.init();</pre> at the bottom of your page.

	media queries must be listed in ascending order like you would order them in a css file.
	mq-swap uses matchMedia to process media queries, which means you can use any valid media query.
	matchMedia is included in most modern browsers but if you want to use this on browsers <= IE8, 
	you can use Ben Schwartz's matchMedia polyfill fork which includes support for IE7 and IE8, 
	located here https://github.com/benschwarz/matchMedia.js/tree/IE7-8. 

Still to come:
	specifying images progamatically since json in an html attribute is a little messy

