/*
*
* Numbers
*
*/

Object.defineProperty(Object.prototype, "even", {//returns true if a given number is even
	get: function(){
		if (Number(this).valueOf() % 2 === 0 || -0){
			return true;
		} else {
			return false;
		}
	}
});
