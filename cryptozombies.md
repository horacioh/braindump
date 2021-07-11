# Cryptozombies.com

- tags: #ethereum #solidity #web3 #cryptocurrency #crypto

- A [[contract]] is the fundamental block of ethereum applications
- [[state variables]] are stored permanently in contract storage
- you have all the common [[math-operators]] that any programming language
  - there's the exponential operator: `uint x = 5 ** 2` equal to `5^2 = 25`
- `struct` are a thing in solidity too
- Arrays can be _fixed_ or _dynamic_
- you can declare `public` varaibles in your contract. you will get a `getter` for those.
- `array.push()` returns the new array length.

## Functions

```solidity
function eatHamburgers(string memory _name, uint _amount) public {

}
```

- in functions you can set instructions in where the variables will be stored (`_name`). that's required for all referece types (arrays, structs, mappings and strings)
- you can pass variables to functions by:
  - value: creates a copy of it (not the same value reference from the contract). you can do this by adding the keyword `memory` in front of the variable name
  - reference: gets the actual value in the contract (you can change it)
- using the `_` in variable names is a convention to differentiate them from global variables
- creating new structs is the same as in JavaScript, but with no `new` keyword in front
- functions in a contract are public by default. is a convention to mark all functions as `private`. also there's a name convention here with the `_` in front of the function name
- we can declare functions as `view` functions. that means that it only "views" the data and does not modify it.
- you can also declare a function as `pure`. that means that even it does not read any data from the contract. (example: multiply 2 numbers). this functions only operate solely on the parameters passed in.

## Events

- the way contracts communicate that something happened in the blockchainto your app
- you can declare events in the contract with the keyword `event`
- inside any function you can `emit` events.