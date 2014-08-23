/*
*
* Arrays
*
*/

//non-patching
Sapphire.val = function(ctx){
	if (ctx.indexOf(value) !== -1){
		return ctx.indexOf(value);
	} else {
		return false;
	}
}

Sapphire.shuffle = function(ctx){
	for (var i = 0; i < ctx.length; i++) {
		var e = ctx[i];
		ctx.splice(i, 1);
		var rnd = Math.random() * ctx.length | 0;
		ctx.splice(rnd, 0, e);
	}
	return ctx;
}

Sapphire.delete = function(ctx, d){
	function check(newarray){
		if (newarray.indexOf(d) !== -1 ){
			newarray.splice(newarray.indexOf(d), 1)
			check(newarray);
		} else {
			return newarray;
		}
	}
	check(ctx);
}

Sapphire.cycle = function(ctx, times, callback){
	if (typeof times !== "undefined") {
		for (var i = 0; i < times; i++) {
			for (var k = 0; k < ctx.length; k++) {
				return callback(ctx[k]);
			}
		}
	} else {
		while(true){
			for (var i = 0; i < ctx.length; i++) {
				return callback(ctx[i]);
			}
		}
	}
}

Sapphire.compact = function(ctx){
	for (var i = 0; i < ctx.length; i++) {
		if (ctx[i] === null || ctx[i] === ""){
			ctx.splice(i, 1)
		}
	}
	return ctx;
}

Sapphire.sample = function(ctx, n){
	if (typeof n !== "undefined") {
		var res = [];
		for (var i = 0; i < n; i++) {
			var rnd = Math.random() * ctx.length | 0;
			res.push(ctx[rnd]);
		}
		return res;
	} else {
		var rnd = Math.random() * ctx.length | 0;
		return ctx[rnd];
	}
}

//patching functions
if(!Array.prototype.val){
	Array.prototype.val = function(value){//returns the position of a given value, or false
		return Sapphire.val(this);
	};
}

if(!Array.prototype.shuffle){
	Object.defineProperty(Array.prototype, "shuffle", {//shuffles a given array
		get: function(){
			return Sapphire.shuffle(this);
		}
	});
}

if (!Array.prototype.delete){//.delete(d) -> deletes all items equal to d and returns a new array
	Array.prototype.delete = function(d){
		return Sapphire.delete(this, d);
	};
}

if(!Array.prototype.cycle){
	Array.prototype.cycle = function(callback, times){//loops over the array either inifinitly or so many [times] calling calback each time
		return Sapphire.cycle(this, times, callback);
	};
}


if (!Array.prototype.compact) {//.compact -> removes any null/undefined values
	Object.defineProperty(Array.prototype, "compact", {
		get: function(){
			return Sapphire.compact(this);
		}
	});
}

if (!Array.prototype.sample) {
	Array.prototype.sample = function(n){//returns either a random element or [number] random elements in an array
		return Sapphire.sample(this, n);
	};
}