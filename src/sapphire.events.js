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