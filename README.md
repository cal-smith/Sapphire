Sapphire ![](http://i.imgur.com/6R9kacR.jpg)
========

Like Ruby, but blue

###Why?

Because Javascript could learn a thing or two from Ruby.

##Usage

Just drop sapphire.js in your document  
`<script type="text/javascript" src="sapphire.js"></script>`

Planned:
- [x] Implement a build system
- [ ] Automated Github releases
- [ ] Release on NPM
- [ ] Release for other commonjs/requirejs platforms

##Building

Clone the repo, hack the files you want and run either `ruby build.rb dev` or `ruby build.rb release`

The dev options just aggregates the files, while release aggregates and minifies them.

##Docs

###Array + Object

####.each()

`obj.each(callback(k,v))`  

Executes callback() once for each key in a object. First callback argument is the key and the second is the value.

`array.each(callback(k))`

Executes callback() once for each element in an array, the callback recives the element in its argument. 

####.last 

`obj/array.last`

Gets the last element from an array or object.

####.first

`obj/array.first`

Gets the first element from an array or object.

####.contains()

`obj/array.contains("search")`

Returns true if the search value is found in the array/obj. False if not.

###Object

####.key()

`obj.key(val)`

returns the key for a given value, or false.

####.val()

`obj.val(val)`

returns true if there exists a given value, or false.

####.values

`obj.values`

returns an array containing the objects values.

###Array

####.val()

`array.val(val)`

returns the position of a given value, or false.

####.shuffle

`array.shuffle`

shuffles the array and returns the shuffled array.

###Event

####.on()

`target.on(type, callback, [userCapture])`

effectively a 1-1 mapping for addEventListener.

####.off()

`target.off(type, callback, [userCapture])`

effectively a 1-1 mapping for removeEventListener.

###Window/Browser specific methods

####.e()/.i(), .c(), .t(), .n()

Various shorthand for common element selectors.

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






