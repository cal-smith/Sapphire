/*
*
* Strings 
*
*/
if(!Object.prototype.match){
	Object.prototype.match = function (str) {//flips the standard match object around, the standard match object is not overwritten as it inherets from String, not Object.
		return str.match(this);
	};
}