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
