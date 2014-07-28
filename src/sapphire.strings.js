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

if (!String.prototype.lowercase) {
	Object.defineProperty(String.prototype, "lowercase", {//converts all chacters to lowercase
		get: function(){
			return this.toLowerCase();
		}
	});
}

if (!String.prototype.uppercase) {
	Object.defineProperty(String.prototype, "uppercase", {//converts all chacters to uppercase
		get: function(){
			return this.toUpperCase();
		}
	});
}

//.capitalize -> convertes the first character to upper case, and the remainder to lower case
if (!String.prototype.capitalize) {
	Object.defineProperty(String.prototype, "capitalize", {//converts all chacters to uppercase
		get: function(){
			var str = this.split("");
			str[0] = str[0].toUpperCase();
			str = str.joins();
			return str;
		}
	});
}
//.swapcase -> converts uppercase to lowercase and lowercase to uppercase
//if([A-Z]) str[i].toupper if([a-z])str[i].tolower

//.each([callback])/.each_char([callback])? -> calls callback for every chacter

//.each_line?

//.contains

