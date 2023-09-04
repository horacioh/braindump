# JavaScript State Machines and XState v2 workshop

tags: [[XState]] #workshop #javascript

## Software Modeling

- is planning ahead
- event-driven architecture
- make a list of all possible events that can occur in the app

## Actions

- `raise` is to send an event to itself (same machine)
- `send` is to send an event to itself AND other actors

## Compound States

- we can add tags to states so we can check with `matches` easier (state.hasTag('foo'))

## Parallel states

- need to create regions in parent states
- it helps to reduce the number of states in our machine

## Actor Model

- everything is an actor
- an actor has a behavior
  - this behavior is represented as a state machine
- an actor can also call other actors
  - it needs to have a reference to the other actor
- an actor can "Spawn" new actors (create them)
- actors can also send back events to parent actors
- every actor has its own local state
- an actor cannot read the local state of another actor
- you can add data to final states and that will be attach to the 'onDone' event
- service vs actor
  - there's no differencs
  - both can send events, pawn actors, change behavior...
  - service is before the actor model came to XState
- invoke vs spawn
    - invoke is only alive in the context of the state
    - spawn will stay alive up until the whole machine stops
- you can get a reference to an actor within a machine by checking the children property of the state

## Questions

- [x] `createModel` example (`withConfig`)
- [ ] react context example
- [ ] how to do a main machine that spawns other machines
- [ ] practical example of orchestrating messages synced with routing
- [ ] how can I create a machine from a stream of events (slate)
- [x] testing setup
