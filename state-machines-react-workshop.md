# State machines react workshop

- [workshop link](https://frontendmasters.com/courses/xstate-react/)

- You can review all the core concepts explained in the first videos in a more expanded way in [[state-machines-javascript-workshop]]

## Toggle example

- maybe seems a lot of code, but it helps to have all that logic contained in one place, rather than mixed with our component
- having a machine instead of a normal reducer with all the swith/if statements makes the code a lot cleaner and easier to reason about
- you can set a target to `undefined` to run actions that does not necessarily change the actual state but context values

## Extended state

- adding values to the machine `context`
- you can modify those values using **actions**

## Parameterizing actions

- you can pass a second argument to `useMachine` with an `actions` property. the keys you use on that object are the strings you can use on the machine actions to call those functions

## Guarded transitions

- _you can't run this transition if X condition is not met_
- adding a `cond`(or `guard` in the future)

```js
// ...
{
  // ...
  cond: (context, event) => {
    return context.count >= 5;
  };
}
// ...
```

## Eventless transition

- events that occur with no transition
- also called transcient state. it's basically going somewhere else
- it always gets called
- be carefull to not get in an infinite loop
- we can use the `always` key on the state

## Shared states

- share machines in multiple components

[[content-to-share]]

s"
