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
