/*
*
* Numbers
*
*/
if(!Object.prototype.even){
	Object.defineProperty(Object.prototype, "even", {//returns true if a given number is even
		get: function(){
			if (Number(this).valueOf() % 2 === 0 || -0){
				return true;
			} else {
				return false;
			}
		}
	});
}

//.odd -> returns true if odd

//.next -> returns number++

//.round -> basically Math.floor. rounds a decimal to a whole