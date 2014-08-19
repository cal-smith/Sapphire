/*
*
* Events
*
*/

//non-patching
Sapphire.on = function(ctx, type, callback, capture){
	ctx.addEventListener(type, callback, capture);
	return ctx;
}

Sapphire.off = function(ctx, type, callback, capture){
	ctx.removeEventListener(type, callback, capture);
	return ctx;
}

//patching functions
//borrowing a little from jquery/backbone here. .on and .off are just so succinct.
if(!Object.prototype.on){
	Object.prototype.on = function(type, callback, capture){
		return Sapphire.on(this, type, callback, capture);
	};
}

if(!Object.prototype.off){
	Object.prototype.off = function(type, callback, capture){
		return Sapphire.off(this, type, callback, capture);
	};
}