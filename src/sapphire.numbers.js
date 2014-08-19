/*
*
* Numbers
*
*/

//non-patching
Sapphire.even = function(ctx){
	if (Number(ctx).valueOf() % 2 === 0 || -0){
		return true;
	} else {
		return false;
	}
}

Sapphire.odd = function(ctx){
	if (Number(ctx).valueOf() % 2 === 0 || -0){
		return false;
	} else {
		return true;
	}
}

Sapphire.next = function(ctx){
	return Number(ctx) + 1;
}

Sapphire.round = function(ctx){
	return ctx | 0;
}

//patching functions
if(!Object.prototype.even){
	Object.defineProperty(Object.prototype, "even", {//returns true if a given number is even
		get: function(){
			return Sapphire.even(this);
		}
	});
}

if(!Object.prototype.odd){
	Object.defineProperty(Object.prototype, "odd", {//returns true if a given number is odd
		get: function(){
			return Sapphire.odd(this);
		}
	});
}

if(!Object.prototype.next){
	Object.defineProperty(Object.prototype, "next", {//returns number++
		get: function(){
			return Sapphire.next(this);
		}
	});
}

if(!Object.prototype.round){
	Object.defineProperty(Object.prototype, "round", {//basically Math.floor. rounds a decimal to a whole
		get: function(){
			return Sapphire.round(this);
		}
	});
}