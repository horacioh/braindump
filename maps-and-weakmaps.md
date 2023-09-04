# Maps and WeakMaps in Javascript

## Map

### Description

- JS object that contains `key-value` pairs
- it remembers the insertion order
- accepts any vlue type for both `key` and `value`

### API

```js
// create a map
const myMap = new Map()

// add an element
myMap.set("foo", { foo: "bar" })

// get an element
myMap.get("foo") // returns { foo: "bar" }

// check if map contains element
myMap.has("bar") // false
myMap.has("foo") // true

// delete element
// returns true if the element was removed
myMap.delete("foo") // true

// delete all values
myMap.clear()
```

### Instance props and methods

- `myMap.size`: returns the current Map size
- `myMap.keys`: returns all keys in an iterator
- `myMap.values`: returns all values in an iterator
- `myMap.entries`: returns `[ke, value]` in an iterator
- `myMap.forEach`: iterate over the map

### Important differences between Map and Object

- map's keys can contain any value, object keys are limited
- the `size` property is very handy in Maps
- Maps are optimized to perform better with editing its values (adding/removing elements) frequently
-

## WeakMap

- similar to a Map, but with some important differenes:
  - a value can only be accessed with the key and the weakMap itself
  - keys must be objects
  - keys are "weakly held" (can be garbage-collected)
  - you cannot iterate over a weakMap
  - you cannot ask for the siz

```js
const users = new WeakMap()
const john = { id: 1, name: "John" }
const andrew = { id: 2, name: "Andrew" }

users.set(john, { address: "John's Address" }) // OK
users.set(andrew, { address: "Andrew's Address" }) // OK

// TypeError: Invalid value used as weak map key
users.set("text", "Hello, World!")
```

- if an object used as a key in a weakMap have no other references to itself, the weakMap key-value is automatically garbage-collected.

```js
const users = new WeakMap()

let john = { id: 1, name: "John" }

users.set(john, { address: "John's Address" }) // OK

// "John" is removed both, from the memory and the WeakMap
john = null
```

## Thoughts

- `WeakMap` and `WeakSet` are used generally to store "secondary" data. this is handy because we can store this data and be sure that it will be garbage-collected when the primary data is being removed or unavailable.

---

## Resources

- [Map \- JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Everything About Map And WeakMap In JavaScript \| Become Front\-End Expert](https://www.vhudyma-blog.eu/everything-about-map-and-weakmap-in-javascript/)
- [WeakMap and WeakSet](https://javascript.info/weakmap-weakset)
- [WeakMap \- JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [Data Structures and Algorithms in JavaScript \| egghead\.io](https://egghead.io/courses/data-structures-and-algorithms-in-javascript)
