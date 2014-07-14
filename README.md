Sapphire ![](http://i.imgur.com/6R9kacR.jpg)
========

Like Ruby, but blue

###Why?

Because Javascript could learn a thing or two from Ruby.

##Usage

Just drop sapphire.js in your document  
`<script type="text/javascript" src="sapphire.js"></script>`

Planned:
- Implement a build system
- Automated Github releases
- release on NPM
- release for other commonjs/requirejs platforms

##Docs

###Array + Object

####.each()

`obj.each(callback(k,v))`  
`array.each(callback(k))`

####.last 

`obj/array.last`

####.first

`obj/array.first`

####.contains()

`obj/array.contains("search")`

###Object

####.key()

`obj.key(val)`

returns the key for a given value

####.val()

`obj.val(val)`

returns true if there exists a given value

####.values

`obj.values`

returns an array containing the objects values

###Array

####.val()

`array.val(val)`

returns the position of a given value, or false

####.shuffle

`array.shuffle`

shuffles the array and returns the shuffled array

###Event

####.on()

`target.on(type, callback, [userCapture])`

effectively a 1-1 mapping for addEventListener

####.off()

`target.off(type, callback, [userCapture])`

effectively a 1-1 mapping for removeEventListener.

###Window/Browser specific methods

####.e()/.i(), .c(), .t(), .n()

Various shorthand for common element selectors

`.e("element")/.i("element")`  
Shorthand for getElementById. Returns a single element.

`.c("element")`  
Shorthand for getElementsByClassName. Returns an array of elements.

`.t("element")`  
Shorthand for getElementsByTagName. Returns an array of elements.

`.n("element")`
Shorthand for getElementsByName. Returns an array of elements.

####sleep()

`sleep(code/function, delay)`

Very similar to window.setTimeout, however the delay value is given in seconds as opposed to miliseconds.

####.innerText

`elm.innerText`  
`elm.innerText = val`

Wrapper for elm.textContent.






