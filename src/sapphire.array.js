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