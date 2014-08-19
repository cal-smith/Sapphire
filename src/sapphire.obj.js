/*
*
* Objects
*
*/

//non patching functions
Sapphire.key = function(ctx, value, ret_true){//returns the key for a given value
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

Sapphire.val = function(ctx, value){//returns true if there exists a given value
	return Sapphire.key(ctx, value, true);
}

Sapphire.values = function(ctx){
	var array = [];
	for (var i = 0; i < Object.keys(ctx).length; i++) {//returns an array of the objects values
		var v = ctx[Object.keys(ctx)[i]];
		array.push(v);
	}
	return array;
}

Sapphire.parse = function(ctx){//wrapper for the standard JSON.parse
	return JSON.parse(ctx);
}

Sapphire.merge = function(ctx, objs){
	
}

//patching functions
if(!Object.prototype.key){
	Object.prototype.key = function(val){//returns the key for a given value
		return Sapphire.key(this, val);
	};
}

if(!Object.prototype.val){
	Object.prototype.val = function(val){//returns true if there exists a given value
		return Sapphire.val(this, val);
	};
}

if(!Object.prototype.values){
	Object.defineProperty(Object.prototype, "values", {//returns an array of the objects values
		get: function(){
			return Sapphire.values(this);
		}
	});
}

if(!Object.prototype.parse){
	Object.defineProperty(Object.prototype, "parse", { //wrapper for the standard JSON.parse
		get: function(){
			return Sapphire.parse(this);
		}
	});
}

//.merge([objects]) -> merges objects into the main object preffering the originals values when a conflict occurs
if(!Object.prototype.merge){
	Object.prototype.merge = function(objs){
		return Sapphire.merge(this, objs)
	}
}