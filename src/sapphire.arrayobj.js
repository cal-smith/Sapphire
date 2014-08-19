/*
*
* Arrays + Objects
*
*/

//non-patching functions
Sapphire.each = function(ctx, callback){
	if (Array.isArray(ctx) || ctx.toString() === "[object HTMLCollection]") {//HTMLCollection uses the same style methods as array
		for (var i = 0; i < ctx.length; i++) {
			callback(ctx[i], i);//calls the callback once for each element in the array
		}
	} else {
		for (var i = 0; i < Object.keys(ctx).length; i++) {
			var k = Object.keys(ctx)[i];//key
			var v = ctx[Object.keys(ctx)[i]];//value
			callback(k, v);//calls the callback once for each key. first argument is the key, second argument is the value
		}
	}
	return ctx;
}

Sapphire.last = function(ctx){
	if (ctx.toString() === "[object Object]") {
		var k = Object.keys(ctx);
		var p = k.length - 1;
		return ctx[k[p]];
	} else {
		var p = ctx.length - 1;
		return ctx[p];
	}
}

Sapphire.first = function(ctx){
	if (ctx.toString() === "[object Object]") {
		var k = Object.keys(ctx);
		return ctx[k[0]];
	} else {
		return ctx[0];
	}
}

Sapphire.contains = function(ctx){
	if (ctx.toString() === "[object Object]") {
		return ctx.hasOwnProperty(search);
	} else{
		if (ctx.indexOf(search) !== -1) {
			return true;
		} else {
			return false;
		}
	}
}

Sapphire.empty = function(ctx){
	if (ctx.toString() === "[object Object]") {

	} else{
		if (ctx.length === 0) {
			return true;
		} else {
			return false;
		}
	}
}

Sapphire.times = function(ctx, callback){
	for (var i = 0; i < Object.keys(ctx).length; i++) {
		callback();	
	}
}

//patching functions
if(!Object.prototype.each){
	Object.prototype.each = function(callback){//iterator for objects or arrays
		return Sapphire.each(this, callback);
	};
}

if(!Object.prototype.last){
	Object.defineProperty(Object.prototype, "last", {//returns the last value of an object/last element in an array
		get: function(){
			return Sapphire.last(this);
		}
	});
}

if(!Object.prototype.first){
	Object.defineProperty(Object.prototype, "first", {//returns the first value of an object/first element in an array
		get: function(){
			return Sapphire.first(this);
		}
	});
}

if(!Object.prototype.contains){
	Object.prototype.contains = function(search){//checks if objects and arrays contain the search term. returns true/false.
		return Sapphire.contains(this);
	};
}

if (!Object.prototype.empty){
	Object.defineProperty(Object.prototype, "empty", {//returns true if array/obj contains nothing
		get: function(){
			return Sapphire.empty(this);
		}
	});
}

if (!Object.prototype.times){
	Object.prototype.times = function(callback){//calls [callback] "num" times
		return Sapphire.times(this, callback);
	};
}