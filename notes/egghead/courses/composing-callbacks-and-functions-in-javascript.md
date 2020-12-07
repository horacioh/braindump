# Composing Callbacks and Functions in JavaScript

[📹 Video](https://egghead.io/courses/composing-closures-and-callbacks-in-javascript)

## 1. What Is a Closure in JavaScript

> "Closure is when a function **remembers** (captures) the variables around it even when that function is executed elsewhere."
>
> [Kyle Simpson](https://twitter.com/getify)

## 2. What Is a Callback in JavaScript

- is when you pass a function as a parameter
- you can define a behavior and pass it to another function to keep control of what happens when you call the callback

## 3. Can a Function Be a Closure and a Callback?

- YES.
- a callback is a function, so it will remembers the variables outside of it even you execute it in another scope

## 4. Compose Closures and Callbacks to Create New Functions

- think of compose as using a function call that returns a value as a parameter of another function that expects the same type of value as the firct function returns (hope that make sense!)

```javascript
let i = 0
let callback = (event) => {
  return i++
}

let multiply = (value) => {
  console.log(value * 2)
}

document.addEventListener("click", (event) => {
  multiply(callback(event))

  /*
  - callback is executed first
  - the result of the `callback` function call, is the input of the `multiply` function
  - finally `multiply` is executed
  */
})
```

- using `pipe` from `lodash`, helps to make the composed functions more readable, because you read in the order the functions will be executed.
- using `compose` works the same as `pipe` but with the oposite functions order
- the result of `pipe` and `compose` is another function

## 5. Defining the Broadcaster and Listener Relationship

[source code](https://github.com/johnlindquist/crafting-functions/blob/broadcaster-listener-relationship/src/index.js)

- `listener` is just a callback (a function you pass to something else)
- `broadcaster` is a function that takes a `listener` and calls it in different ways

```javascript
let listener = (value) => {
  console.log(value)
}

let broadcaster = (listener) => {
  listener(1)
  listener(2)
  listener(3)
}

broadcaster(listener)
```

## 6. Time is a Hidden Variable in JavaScript

- operators help us to capture better behaviors and "control the future" in a more predictable way.
- when accepting listeners, you don't exactly know when those functions will be executed, maybe they have setTimeouts or setIntervals in them, so eventhough you execute them inmediately in the broadcaster, they may delay the whole exxecution using timeouts.

## 7. Create a Function to Configure setTimeout

[source code](https://github.com/johnlindquist/crafting-functions/blob/wrap-settimeout/src/index.js)

- when using `setTimeout`, you can control when and with what is being called, by wrapping it in a function and accept all the parameters you can/need to control

```javascript
let createTimeout = (time) => (callback) => {
  setTimeout(callback, time)
}

let oneSecond = createTimeout(1000)
let twoSeconds = createTimeout(2000)
let threeSeconds = createTimeout(3000)

oneSecond(() => {
  console.log("one")
})
twoSeconds(() => {
  console.log("two")
})
threeSeconds(() => {
  console.log("three")
})
```

- `createTimeout` is a function that accepts a time variable, that returns another function that accepts a callback (closing over time), that calls `setTimeout`

## 8. Return a Function to Cancel an Async Behavior

```javascript
let createTimeout = (time) => (callback) => {
  const id = setTimeout(callback, time)

  return () => {
    clearTimeout(id)
  }
}

let cancelOne = createTimeout(1000)

cancelOne() // cancel the timeout
```

- again, you are wrapping a piece of behaviour with a function, that way, you can **control** when and where that new function will be called (the cancel function)

## 9. Wrap addEventListener in a Function for More Control

[source code](https://github.com/johnlindquist/crafting-functions/blob/add-listener/src/index.js)

```javascript
let createTimeout = (time) => (callback) => {
  let id = setTimeout(callback, time)

  return () => {
    clearTimeout(id)
  }
}

let addListener = (selector) => (eventType) => (listener) => {
  let element = document.querySelector(selector)
  element.addEventListener(eventType, listener)

  return () => {
    element.removeEventListener(eventType, listener)
  }
}

let addButtonListener = addListener("#button")
let addButtonClickListener = addButtonListener("click")
let removeButtonClickListener = addButtonClickListener(() => {
  console.log("Button clicked")
})

removeButtonClickListener()
```

- You see how `addListener` is chaining functions and getting all the values it needs to create the actual listener? this for me is beautiful!!

## 10. Create a Utility Function to Control setInterval

[source code](https://github.com/johnlindquist/crafting-functions/blob/create-interval/src/index.js)

```javascript
let createTimeout = (time) => (listener) => {
  let id = setTimeout(listener, time)

  return () => {
    clearTimeout(id)
  }
}

let addListener = (selector) => (eventType) => (listener) => {
  let element = document.querySelector(selector)
  element.addEventListener(eventType, listener)

  return () => {
    element.removeEventListener(eventType, listener)
  }
}

let createInterval = (time) => (listener) => {
  let id = setInterval(listener, time)
  return () => {
    clearInterval(id)
  }
}

let oneSecond = createInterval(1000)
let cancelOneSecond = oneSecond(() => {
  console.log("one")
})

cancelOneSecond()

let twoSeconds = createInterval(2000)
twoSeconds(() => {
  console.log("two")
})
```

- this is very similar to the previous two lessons
- the pattern we are following here is:
  - find the pieces you can strip out to control (listener, eventType, time...)
  - return a function that can cancel the behavior you just create (clearTimeout or clearInterval)

## 16. Pass a Done Symbol when an Async Function is Done

- we can take advantage of the iterator protocol and return a "done" value when we reach the last item of our iterables
- you can check if the value passed to the broadcaster is "done" and you can prevent the listeners to continue executing after finish

## 17. Create an Operator Function to Modify Behaviors

- here you can see the power of functions wrapping other functions!
- we create a new listener that wraps the original and _modify_ the behavior of the original listener by applying some changes before passing the value to it

## 18. Transform Values with a Map Operator

- operators are functions that accepts a modifier function and change the behavior of our broadcasters and listeners

## 19. Prevent Certain Values with a Filter Operator

- as you transform before, you can also filter values by passing a `predicate` function that executes a condition that returns a boolean value

## 20. Use Pipe to Clean Up Functions Wrapping Functions

- REFACTOR, REFACTOR, REFACTOR!
- compose works here because all the functions inside have the same signature (accept a broadcaster)
- remember that `pipe` is the same as `compose` but with a readable order of functions

## 21. Start With the API You Want Then Implement

- start with the API you want and then implement it to meet that API
- you can express what you prefer with your API, either what is really happening with the functions or what is happening in the browser (or in your particular environment)

## 22. Define a Function to Set Common Behaviors in Operators

- again, the magic of functions wrapping other functions!

## 28.

- TODO: ASK QUESTION ABOUT APPLYOPERATOR!!!

## 29. Create a Win Condition with a mapDone Operator

- show how we can add additional logic yo our previous play functions, by wrapping it and capturing all the cancel values to cancel when a condition is met (by filtering the results)

## 30. Repeat a Broadcaster that Is Done

-
