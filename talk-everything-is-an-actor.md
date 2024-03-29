# David Khourshid - Everything is an Actor

- tags: [[state-machines]] [[actor-model]] #statecharts

- [video](https://www.youtube.com/watch?v=NTfPtYJORck)

## Actor Model Rules

### 1. All computation is performed within an actor ONLY

- actors can have its own behavior and state

### 2. Actors can communicate only through MESSAGES

- messages are immutable. that way it garantees no shared state between actors
- communication between actors should be via messages, no other way

### 3. When a message is received, an Actor can:

- 3.1 **Change** its state/behavior
- 3.2 can **Send messages** to another actors
- 3.3 can **create a finite number of child actors**

- the actor system
  - there's one root actor or guardian actor
  - every actor has only one parent
  - evey actor has its own "address"
  - every actor received messages to its own "mailbox"
  - mailboxes are queues, it will be processed one by one
- actors have "location transparency"
  - it does not matter where they actually are, it will be sent to it no matter where it is.
  - this enables fault tolerance

## Resources

- [The actor model in 10 minutes](https://www.brianstorti.com/the-actor-model/)


