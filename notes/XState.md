# XState

- enumerate only the possible states to remove impossible states on your app [video](https://egghead.io/lessons/javascript-eliminate-boolean-explosion-by-enumerating-states)

## Graph Theory

different type of nodes:

1. **Source nodes**: nodes with no incoming edges
2. **Transfer nodes**: nodes that have both incoming and outgoing edges
3. **Sync mode**: nodes with no outgoing edges

## Finite states

- "you can be awake or sleep, but you CAN'T be sleep and awake at the same time"
- Transitions are the edges
- Events are the labels that needs to happen in order to transition from one state to another (from node to node)
- There's only one initial state and ONLY one initial state
- Final states: states where no more events can happen. is "Accepted"

## Modeling state machines

1. first add the states
2. then we can start filling events

example of a simple machine:

```js title=state-machine.js
const machine = {
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: "active",
      },
    },
    active: {
      on: {
        CLICK: "inactive",
      },
    },
  },
};
```

you can also write state transitions in two ways:

```js
const machine = {
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: "active", // shorthand of `target`
      },
    },
    active: {
      on: {
        CLICK: {
          target: "inactive",
        },
      },
    },
  },
};
```

here's is how it looks a state machine

```js
// let's use a lightbulb example...

// states are objects
const lit = {};
const unlit = {};
const broken = {};

// then we can combine our states in one object
const states = { lit, unlit, broken };

// we need an initial state
const initial = "unlit";

// then we can also combine states and initial state (config) and this is what we can pass to our state machine
const config = {
  id: "lightBulbMachine", // the config should have an ID
  initial,
  states,
};
```

Now we need to enumerate all the possible events that our machine can handle. In order to do that, we need to define on every state the possible events that can be triggered to change the state, we do it with the `on` property on our state objects

```js
const lit = {
  on: {
    BREAK: "BROKEN",
    TOGGLE: "unlit",
  },
};
const unlit = {
  on: {
    BREAK: "BROKEN",
    TOGGLE: "lit",
  },
};
const broken = {};
// because broken is the final state, we can leave the state object empty, but we can also add a `type: 'final'` on it to make it more explicit
```

by convention, the name of the event is capitalize, and the value of the event is the target state name we want to transition to.

Now we are ready to import the [XState library](https://github.com/davidkpiano/xstate) to test it.

## Actions

- is a side-effect. this effects are considered the outputs of the state machine

Three types of actions:

1. Transition actions: when transitions from one state to another
2. Entry actions: when you enter a particular state
3. Exit actions: when leaving a particular state

the order of the actions will be executed are:

1. Exit actions
2. Transition actions
3. Entry actions

- In general, don;t want to depend on action order too much. if you find yourself depending on the order too much, that's a sign that you need to model it different and maybe add an extra state

this is how actions looks like in XState:

```js
const machine = createMachine(
  {
    initial: "inactive",
    states: {
      inactive: {
        entry: () => {}, // this could be an array of functions too
        on: {
          CLICK: {
            target: "active",
            actions: ["someAction", () => {}],
          },
        },
      },
      active: {
        // ...
      },
    },
  },
  {
    actions: {
      someAction: () => {},
    },
  }
);
```

- the second parameter (the actions object) will override any actions inside the ones defined in the machine
- finite states represents Qualitative data, it describes the behaviour

## Extended state

- describes Quantitative data. The combination of both (Finite + Extended state) describes your state machine
- in XState is called `context`

## Assignments

- are actions
- are pure fucntions. you need to get the prev state
-

## Resources

- [Wikipedia](https://en.wikipedia.org/wiki/Finite-state_machine)
- [FrontendMasters Workshop by DavidKPiano](https://frontendmasters.com/workshops/state-machines-xstate/)

```

```
