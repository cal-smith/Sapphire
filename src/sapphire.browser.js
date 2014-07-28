/*
*
* Browser speficic code. Stuff that requires a window or dom
*
*/
if (window) {
	window.c = function(e){//gets an element array by class
		return document.getElementsByClassName(e);
	};

	window.t = function(e){//gets element array by tag
		return document.getElementsByTagName(e);
	};

	window.e = window.i = function(e){//gets element by id
		return document.getElementById(e);
	};

	window.n = function(e){//gets element array by name attribute
		return document.getElementsByName(e);
	};

if(!Object.prototype.sleep){
	window.sleep = function(callback, delay){//wraps setTimeout, and defaults to sleeping in seconds rather than miliseconds.
		delay = delay * 1000;
		return window.setTimeout(callback, delay);
	};
}

	document.addEventListener("load", function(){
		//innerHTML and innerText just go together. textContent is cool, but innerText is where it's at.
		if (typeof document.body.innerText === "undefined") {
			Object.defineProperty(Node.prototype, "innerText", {
				get: function(){ return this.textContent; },
				set: function(t){ this.textContent = t; }
			});
		}
	});
}