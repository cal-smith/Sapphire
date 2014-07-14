var testo = {'a':'aa','b':'bb'};
var testo2 = {'a':'aa','b':'bb','c':['a','b','c']};
var testa = ['a','b','c','d'];

Object.prototype.each = function(callback){//iterator for objects or arrays
	if (Array.isArray(this) || this.toString() === "[object HTMLCollection]") {//HTMLCollection uses the same style methods as array
		for (var i = 0; i < this.length; i++) {
			callback(this[i]);//calls the callback once for each element in the array
		}
	} else {
		for (var i = 0; i < Object.keys(this).length; i++) {
			var k = Object.keys(this)[i];//key
			var v = this[Object.keys(this)[i]];//value
			callback(k, v);//calls the callback once for each key. first argument is the key, second argument is the value
		}
	}
	return this;
};

Object.defineProperty(Object.prototype, "last", {//returns the last value of an object/last element in an array
	get: function(){
		if (this.toString() === "[object Object]") {
			var k = Object.keys(this);
			var p = k.length - 1;
			return this[k[p]];
		} else {
			var p = this.length - 1;
			return this[p];
		}
	}
});

Object.defineProperty(Object.prototype, "first", {//returns the first value of an object/first element in an array
	get: function(){
		if (this.toString() === "[object Object]") {
			var k = Object.keys(this);
			return this[k[0]];
		} else {
			return this[0];
		}
	}
});

/*Browser speficic code. Stuff that requires a window or dom*/
if (window) {
	window.c = function(e){
		return document.getElementsByClassName(e);
	};

	window.t = function(e){
		return document.getElementsByTagName(e);
	};

	window.e = window.i = function(e){
		return document.getElementById(e);
	};

	window.n = function(e){
		return document.getElementsByName(e);
	};
}

Object.defineProperty(Node.prototype, "innerText", {
	get: function(){ return this.textContent },
	set: function(t){ this.textContent = t; }
});