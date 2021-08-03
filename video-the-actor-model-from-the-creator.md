# video-the-actor-model-from-the-creator

- [video](https://www.youtube.com/watch?v=7erJ1DV_Tlo)

## What is an Actor

- fundamental unit of computation
- embodies
  - processing
  - storage
  - communication
- **axioms**: all the possible tasks an actor can perform
  - create more actors
  - send messages to other known actors
  - designate what to do with the next message
- many-to-many relationship among actors and addressable
  - 1 address to multiple actors
  - 1 actor with multiple addresses
- actors know pretty well the actors it creates (address, identity, behavior...)
- message sending are "best effort"
- NO CHANNELS! you talk directly to actors, NO OVERHEAD!
- the actor model is indeterminent because it can only *process one message at a time* so the result of the messages depends fully in the order that they arrive (checking account example)
- cannot enforce consistency
  - we can't
  - 