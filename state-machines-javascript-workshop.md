# State Machines workshop

- Bottom-up approach
  - application logic lives inside where the code is run.
  - difficult to test
  - will contain bugs
  - difficult to enhance
  - features make it worse: more features, more caos
- program defensively to avoid bugs
- State machines
  - old concept, but not easy to grasp
- Finite State machine
  - our applications are graphs (graph theory)
  - Directed Graphs have a _direction_ on the edges
    - source node: no incoming edges
    - sink node: no outgoing edge
    - transfer nodes: nodes with both incoming and outgoing edges
  - states: mode or status. you can only be in one state are a time (sleep and awake example)
  - transitions: the edges
  - events: labels on edges
  - initial state: the first state of your machine
- Interpreting state machines
  - piece of code that keep track of the current state and internally update it

## XState

- `createMachine` creates your machine. stateless pure object with all the info about it. its the _blueprint_
- `interpret` creates a **Service**. services is what it can store and keep track of the current state of your application. Services don't start inmediately, so we need to `start()` them
- Actions
  - something that happens
  - side-effects. Fire and forget
  - outputs of a state machine
  - [reference](https://en.wikipedia.org/wiki/Finite-state_machine)
  - there's **entry actions** and **Exit actions** and **transition actions**
  - should not depend too much on actions, maybe we need to model our machine differently
- finite state: qualitative data
- extended state: quantitative data

## Extended states

- combination of how it behaves (finite state) and any data related to that finite state
- context: contextual state that represents the potential infinite states or anythign that occurs in your app
- assignments: side-effects. assignments are actions and are pure
- recommended to use the oject syntax to make your actions as explicit as possible
- recommended to mutate the context only inside actions because of the normal probles mutation an object with multiple references..

## Transitions

- transitions are synchronous
- you can add delays to transitions with teh `after` property on each state

## Hierarchical states

- every state can be also a new state machin on itself
- you can represent inner states on a string with the dot notation
- the state value will be represented as an object, insted of a string

## History states

- the ability to go back to the inner state on which it was the machine after it changes (visible/hidden/light-dark example)

## Parallel states

- states that can happen at the same time
- not exactly related to each other, but applicale independently from each other
- example: light/dark + bright/dim
