/*
Sapphire.js
github.com/hansolo669/Sapphire
*/

"use strict";

var Sapphire = {};
/*
*
* Arrays
*
*/
if(!Array.prototype.val){
	Array.prototype.val = function(value){//returns the position of a given value, or false
		if (this.indexOf(value) !== -1){
			return this.indexOf(value);
		} else {
			return false;
		}
	};
}

if(!Array.prototype.shuffle){
	Object.defineProperty(Array.prototype, "shuffle", {//shuffles a given array
		get: function(){
			for (var i = 0; i < this.length; i++) {
				var e = this[i];
				this.splice(i, 1);
				var rnd = Math.random() * this.length | 0;
				this.splice(rnd, 0, e);
			}
			return this;
		}
	});
}

//.delete(d) -> deletes all items equal to d and returns a new array
if (!Array.prototype.delete){
	Array.prototype.delete = function(d){
		var newarray = this;
		function check(){
			if (newarray.indexOf(d) !== -1 ){
				newarray = newarray.remove(newarray.indexOf(d));
				check();
			} else {
				return newarray;
			}
		}
	};
}

if(!Array.prototype.cycle){
	Array.prototype.cycle = function(callback, times){//loops over the array either inifinitly or so many [times] calling calback each time
		if (typeof times !== "undefined") {
			for (var i = 0; i < times; i++) {
				for (var k = 0; k < this.length; k++) {
					return callback(this[k]);
				}
			}
		} else {
			while(true){
				for (var i = 0; i < this.length; i++) {
					return callback(this[i]);
				}
			}
		}
	};
}

//.compact -> removes any null/undefined values
if (!Array.prototype.compact) {
	Object.defineProperty(Array.prototype, "compact", {
		get: function(){
			for (var i = 0; i < this.length; i++) {
				if (this[i] === null || typeof this[i] === "undefined" || this[i] === "undefined"){
					this.remove(this[i])
				}
				return this;
			}
		}
	});
}

if (!Array.prototype.joins) { //returns a string of all the elements in the array, optionally seperated by [seperator]
	Object.prototype.joins = function(sep){
		if (typeof sep !== "undefined") {
			var string = "";
			for (var i = 0; i < this.length; i++) {
				i === this.length - 1 ? string += this[i] : string += this[i] + sep;
			}
			return string;
		} else {
			var string = "";
			for (var i = 0; i < this.length; i++) {
				string += this[i];
			}
			return string;
		}
	};
}

if (!Array.prototype.sample) {
	Array.prototype.sample = function(n){//returns either a random element or [number] random elements in an array
		if (typeof n !== "undefined") {
			var res = [];
			for (var i = 0; i < n; i++) {
				var rnd = Math.random() * this.length | 0;
				res.push(this[rnd]);
			}
			return res;
		} else {
			var rnd = Math.random() * this.length | 0;
			return this[rnd];
		}
	};
}
/*
*
* Arrays + Objects
*
*/
if(!Object.prototype.each){
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
}

if(!Object.prototype.last){
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
}

if(!Object.prototype.first){
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
}

if(!Object.prototype.contains){
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
}

if (!Object.prototype.empty){
	Object.defineProperty(Object.prototype, "empty", {//returns true if array/obj contains nothing
		get: function(){
			if (this.toString() === "[object Object]") {

			} else{
				if (this.length === 0) {
					return true;
				} else {
					return false;
				}
			}
		}
	});
}

if (!Object.prototype.times){
	Object.prototype.times = function(callback){//calls [callback] "num" times
		for (var i = 0; i < this; i++) {
			callback();	
		}
	};
}
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
/*
*
* Events
*
*/
	//borrowing a little from backbone.js here. .on and .off are just so succinct.
if(!Object.prototype.on){
	Object.prototype.on = function(type, callback, capture){
		this.addEventListener(type, callback, capture);
		return this;
	};
}

if(!Object.prototype.off){
	Object.prototype.off = function(type, callback, capture){
		this.removeEventListener(type, callback, capture);
		return this;
	};
}
/*
*
* Numbers
*
*/
if(!Object.prototype.even){
	Object.defineProperty(Object.prototype, "even", {//returns true if a given number is even
		get: function(){
			if (Number(this).valueOf() % 2 === 0 || -0){
				return true;
			} else {
				return false;
			}
		}
	});
}

//.odd -> returns true if odd

//.next -> returns number++

//.round -> basically Math.floor. rounds a decimal to a whole
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

if(!Object.prototype.key){
	Object.prototype.key = function(val){//returns the key for a given value
		return Sapphire.o_findkv(this, val, false);
	};
}

if(!Object.prototype.val){
	Object.prototype.val = function(val){//returns true if there exists a given value
		return Sapphire.o_findkv(this, val, true);
	};
}

if(!Object.prototype.values){
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
}

if(!Object.prototype.parse){
	Object.defineProperty(Object.prototype, "parse", { //wrapper for the standard JSON.parse
		get: function(){
			return JSON.parse(this);
		}
	});
}

//.merge([objects]) -> merges objects into the main object preffering the originals values when a conflict occurs
/*
*
* Strings 
*
*/
if(!Object.prototype.match){
	Object.prototype.match = function (str) {//flips the standard match object around, the standard match object is not overwritten as it inherets from String, not Object.
		return str.match(this);
	};
}

if (!String.prototype.lowercase) {
	Object.defineProperty(String.prototype, "lowercase", {//converts all chacters to lowercase
		get: function(){
			return this.toLowerCase();
		}
	});
}

if (!String.prototype.uppercase) {
	Object.defineProperty(String.prototype, "uppercase", {//converts all chacters to uppercase
		get: function(){
			return this.toUpperCase();
		}
	});
}

//.capitalize -> convertes the first character to upper case, and the remainder to lower case
if (!String.prototype.capitalize) {
	Object.defineProperty(String.prototype, "capitalize", {//converts all chacters to uppercase
		get: function(){
			var str = this.split("");
			str[0] = str[0].toUpperCase();
			str = str.joins();
			return str;
		}
	});
}
//.swapcase -> converts uppercase to lowercase and lowercase to uppercase
//if([A-Z]) str[i].toupper if([a-z])str[i].tolower

//.each([callback])/.each_char([callback])? -> calls callback for every chacter

//.each_line?

//.contains

