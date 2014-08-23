/*
*
* Strings 
*
*/

//non-patching
Sapphire.match = function(ctx, str){
	return str.match(ctx);
}

Sapphire.lowercase = function(ctx){
	return ctx.toLowerCase();
}

Sapphire.uppercase = function(ctx){
	return ctx.toUpperCase();
}

Sapphire.capitalize = function(ctx){
	var str = ctx.toLowerCase();
	str = str.split("");
	str[0] = str[0].toUpperCase();
	str = str.join("");
	return str;
}

Sapphire.eachs = function(ctx, callback){
	var letters = ctx.split("");
	for (var i = 0; i < letters.length; i++) {
		callback(letters[i]);
	}
}

//patching functions
if(!Object.prototype.match){
	Object.prototype.match = function (str) {//flips the standard match object around, the standard match object is not overwritten as it inherets from String, not Object.
		return Sapphire.match(this, str);
	};
}

if (!String.prototype.lowercase) {
	Object.defineProperty(String.prototype, "lowercase", {//converts all chacters to lowercase
		get: function(){
			return Sapphire.lowercase(this);	
		}
	});
}

if (!String.prototype.uppercase) {
	Object.defineProperty(String.prototype, "uppercase", {//converts all chacters to uppercase
		get: function(){
			return Sapphire.uppercase(this);
		}
	});
}

if (!String.prototype.capitalize) {
	Object.defineProperty(String.prototype, "capitalize", {//convertes the first character to upper case, and the remainder to lower case
		get: function(){
			return Sapphire.capitalize(this);
		}
	});
}
//.swapcase -> converts uppercase to lowercase and lowercase to uppercase
//if([A-Z]) str[i].toupper if([a-z])str[i].tolower

if (!String.prototype.eachs) {
	String.prototype.eachs = function(callback){//calls callback for every chacter and includes the character as the first argument
		return Sapphire.eachs(this, callback);
	}
}