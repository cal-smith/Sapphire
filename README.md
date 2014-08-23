Sapphire ![](http://i.imgur.com/6R9kacR.jpg)
========

Like Ruby, but blue

###Why?

Because Javascript could learn a thing or two from Ruby.

###Monkey patching?

Not really. By default everything is namespaced under `Sapphire` (aliased as `S`), and functions are patched in via the same method as polyfills. Incompatibilitys between verions of this library should never be a problem, with new versions only adding what old ones are missing, And Sapphire will simply get out of the way of third party, or pre-defined functions with the same name.

##Usage

Just drop sapphire.js or sapphire.min.js in your document  
`<script type="text/javascript" src="sapphire.js"></script>`  
`<script type="text/javascript" src="sapphire.min.js"></script>`

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

####.empty

`obj/array.empty`

Returns true if the obj/array is empty. False if not.

####.times()

`obj/array.times(callback())`

Calls callback once for each element in the obj/array. Callback recives no arguments. For iteration see `.each()`

###Object

####.key()

`obj.key(val)`

Returns the key for a given value, or false.

####.val()

`obj.val(val)`

Returns true if there exists a given value, or false.

####.values

`obj.values`

Returns an array containing the objects values.

####.parse

`JSON-obj.parse`

Wrapper around the default `JSON.parse(json)`. Returns JS obj.

###Array

####.val()

`array.val(val)`

returns the position of a given value, or false.

####.shuffle

`array.shuffle`

shuffles the array and returns the shuffled array.

####.delete(element)

`array.delete(element)`

Deletes all items equal to `element` and returns a new array.

####.cycle

`array.cycle(callback(k), times)`

Iterates the array inifinitely or `times` amount, and calls `callback(k)` each time. Callback recives the element as an argument.

####.compact

`array.compact`

Attempts to remove and null or blank values from the array. Returns a new compacted array.

####.sample

`array.sample(n)`

Returns either a random element from the array, or `n` random elements from the array in a new array.

###Strings

####.match

`/regex/.match("string")`

Flips the standard `.match()` function around.

####.lowercase

`"string".lowercase`

Wrapper for `"string".toLowerCase()`. Returns a string in lower case.

####.uppercase

Wrapper for `"string".toUpperCase()`. Returns a string in upper case.

####.capitalize

`"string".capitalize`

Returns a string with the first letter capitalized, and the rest in lower case.

####.eachs

`"string".eachs(callback(l))`

String specific variant of `.each()`. Iterates over each character calling callback. Callback recives the letter as an argument

###Numbers

####.even

`number.even`

Returns true if a number is even.

####.odd

`number.odd`

Returns true if a number is odd.

####.next

`number.next`

Returns the next number.

####.round

`number.round`

Rounds the number to a whole, Math.floor() style, not Math.max() style.

###Event

####.on()

`target.on(type, callback, [userCapture])`

Wrapper for `target.addEventListener()`

####.off()

`target.off(type, callback, [userCapture])`

Wrapper for `target.removeEventListener()`

###Window/Browser specific methods

####.e()/.i(), .c(), .t(), .n()

Various shorthand for common element selectors.

`.e("id")/.i("id")`  
Shorthand for getElementById. Returns a single element.

`.c("class")`  
Shorthand for getElementsByClassName. Returns an array of elements.

`.t("tag")`  
Shorthand for getElementsByTagName. Returns an array of elements.

`.n("name")`
Shorthand for getElementsByName. Returns an array of elements.

####sleep()

`sleep(code/function, delay)`

Very similar to window.setTimeout, however the delay value is given in seconds as opposed to miliseconds.

####.innerText

`elm.innerText`  
`elm.innerText = val`

Wrapper for elm.textContent.






