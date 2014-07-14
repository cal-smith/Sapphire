var testo = {'a':'aa','b':'bb'};
var testo2 = {'a':'aa','b':'bb','c':['a','b','c']};
var testa = ['a','b','c','d'];

/*
*
* Arrays + Objects
*
*/
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

Object.prototype.contains = function(search){//checks if objects and arrays contain the search term. returns true/false.
	if (this.toString() === "[object Object]") {
		return this.hasOwnProperty(search);
	} else{
		if (this.indexOf(search) !== -1) {
			return true;
		} else {
			return false;
		}
	}
};

/*
*
* Objects
*
*/
Object.prototype.key = function(value){//returns the key for a given value
	for (var i = 0; i < Object.keys(this).length; i++) {
		var k = Object.keys(this)[i];//key
		var v = this[Object.keys(this)[i]];//value
		if (v === value){
			return k;
		}
	}
	return false;
};

Object.defineProperty(Object.prototype, "values", {
	get: function(){
		var array = [];
		for (var i = 0; i < Object.keys(this).length; i++) {
			var v = this[Object.keys(this)[i]];
			array.push(v);
		}
		return array;
	}
});

Object.prototype.value = function(value){//returns true if there exists a given value
	for (var i = 0; i < Object.keys(this).length; i++) {
		var k = Object.keys(this)[i];//key
		var v = this[Object.keys(this)[i]];//value
		if (v === value){
			return true;
		}
	}
	return false;
};

/*
*
* Arrays
*
*/
Array.prototype.value = function(value){//returns the position of a given value, or false
	if (this.indexOf(value) !== -1){
		return this.indexOf(value);
	} else {
		return false;
	}
}

//borrowing a little from backbone.js here. .on and .off are just so succinct.
Object.prototype.on = function(type, callback, capture){
	this.addEventListener(type, callback, capture);
	return this;
};

Object.prototype.off = function(type, callback, capture){
	this.removeEventListener(type, callback, capture);
	return this;
};

/*Browser speficic code. Stuff that requires a window or dom*/
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
}

window.sleep = function(callback, delay){//wraps setTimeout, and defaults to sleeping in seconds rather than miliseconds.
	delay = delay * 1000;
	return window.setTimeout(callback, delay);
}

document.on("load", function(){
	//innerHTML and innerText just go together. textContent is cool, but innerText is where it's at.
	if (typeof document.body.innerText === "undefined") {
		Object.defineProperty(Node.prototype, "innerText", {
			get: function(){ return this.textContent; },
			set: function(t){ this.textContent = t; }
		});
	}
});