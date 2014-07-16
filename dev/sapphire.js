var testo = {'a':'aa','b':'bb'};
var testo2 = {'a':'aa','b':'bb','c':['a','b','c']};
var testa = ['a','b','c','d'];
var Sapphire = {};//config object, and object for internal functions

"use strict";
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
* Arrays
*
*/
Array.prototype.val = function(value){//returns the position of a given value, or false
	if (this.indexOf(value) !== -1){
		return this.indexOf(value);
	} else {
		return false;
	}
};

Object.defineProperty(Array.prototype, "shuffle", {//shuffles a given array
	get: function(){
		for (var i = 0; i < this.length; i++) {
			var e = this[i];
			this.splice(i, 1);
			var rnd = Math.floor(Math.random() * this.length);
			this.splice(rnd, 0, e);
		}
		return this;
	}
});
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
}


window.sleep = function(callback, delay){//wraps setTimeout, and defaults to sleeping in seconds rather than miliseconds.
	delay = delay * 1000;
	return window.setTimeout(callback, delay);
};

document.addEventListener("load", function(){
	//innerHTML and innerText just go together. textContent is cool, but innerText is where it's at.
	if (typeof document.body.innerText === "undefined") {
		Object.defineProperty(Node.prototype, "innerText", {
			get: function(){ return this.textContent; },
			set: function(t){ this.textContent = t; }
		});
	}
});
/*
*
* Events
*
*/
//borrowing a little from backbone.js here. .on and .off are just so succinct.
Object.prototype.on = function(type, callback, capture){
	this.addEventListener(type, callback, capture);
	return this;
};

Object.prototype.off = function(type, callback, capture){
	this.removeEventListener(type, callback, capture);
	return this;
};
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
}


window.sleep = function(callback, delay){//wraps setTimeout, and defaults to sleeping in seconds rather than miliseconds.
	delay = delay * 1000;
	return window.setTimeout(callback, delay);
};

document.addEventListener("load", function(){
	//innerHTML and innerText just go together. textContent is cool, but innerText is where it's at.
	if (typeof document.body.innerText === "undefined") {
		Object.defineProperty(Node.prototype, "innerText", {
			get: function(){ return this.textContent; },
			set: function(t){ this.textContent = t; }
		});
	}
});
/*
*
* Events
*
*/
//borrowing a little from backbone.js here. .on and .off are just so succinct.
Object.prototype.on = function(type, callback, capture){
	this.addEventListener(type, callback, capture);
	return this;
};

Object.prototype.off = function(type, callback, capture){
	this.removeEventListener(type, callback, capture);
	return this;
};
/*
*
* Numbers
*
*/

Object.defineProperty(Object.prototype, "even", {//returns true if a given number is even
	get: function(){
		if (Number(this).valueOf() % 2 === 0 || -0){
			return true;
		} else {
			return false;
		}
	}
});
/*
*
* Numbers
*
*/

Object.defineProperty(Object.prototype, "even", {//returns true if a given number is even
	get: function(){
		if (Number(this).valueOf() % 2 === 0 || -0){
			return true;
		} else {
			return false;
		}
	}
});
/*
*
* Objects
*
*/
Sapphire.o_findkv = function(ctx, value, ret_true){//reduce duplication. takes a ctx(this) the value, and weather to return true or simply the value
	for (var i = 0; i < Object.keys(ctx).length; i++) {
		var k = Object.keys(ctx)[i];//key
		var v = ctx[Object.keys(ctx)[i]];//value
		if (v === value){
			if (ret_true) {
				return true;
			} else{
				return k;
			}
		}
	}
	return false;
};

Object.prototype.key = function(val){//returns the key for a given value
	return Sapphire.o_findkv(this, val, false);
};

Object.prototype.val = function(val){//returns true if there exists a given value
	return Sapphire.o_findkv(this, val, true);
};

Object.defineProperty(Object.prototype, "values", {//returns an array of the objects values
	get: function(){
		var array = [];
		for (var i = 0; i < Object.keys(this).length; i++) {
			var v = this[Object.keys(this)[i]];
			array.push(v);
		}
		return array;
	}
});

Object.defineProperty(Object.prototype, "parse", { //wrapper for the standard JSON.parse
	get: function(){
		return JSON.parse(this);
	}
});
/*
*
* Strings 
*
*/

Object.prototype.match = function (str) {//flips the standard match object around, the standard match object is not overwritten as it inherets from String, not Object.
	return str.match(this);
};
/*
*
* Objects
*
*/
Sapphire.o_findkv = function(ctx, value, ret_true){//reduce duplication. takes a ctx(this) the value, and weather to return true or simply the value
	for (var i = 0; i < Object.keys(ctx).length; i++) {
		var k = Object.keys(ctx)[i];//key
		var v = ctx[Object.keys(ctx)[i]];//value
		if (v === value){
			if (ret_true) {
				return true;
			} else{
				return k;
			}
		}
	}
	return false;
};

Object.prototype.key = function(val){//returns the key for a given value
	return Sapphire.o_findkv(this, val, false);
};

Object.prototype.val = function(val){//returns true if there exists a given value
	return Sapphire.o_findkv(this, val, true);
};

Object.defineProperty(Object.prototype, "values", {//returns an array of the objects values
	get: function(){
		var array = [];
		for (var i = 0; i < Object.keys(this).length; i++) {
			var v = this[Object.keys(this)[i]];
			array.push(v);
		}
		return array;
	}
});

Object.defineProperty(Object.prototype, "parse", { //wrapper for the standard JSON.parse
	get: function(){
		return JSON.parse(this);
	}
});
/*
*
* Strings 
*
*/

Object.prototype.match = function (str) {//flips the standard match object around, the standard match object is not overwritten as it inherets from String, not Object.
	return str.match(this);
};
