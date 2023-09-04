# Parallel States vs Invoked Actors

- tags: [[XState]]

- comment from Fraser at the Stately Discord:
  > I think there's a conceptual element to this as well, which may be helpful when designing the statechart:
  >
  > Parallel states are like different faces of the same gem. Each parallel region is a valid description of the state that exists and gets updated at the same time as the other regions (that's where the sync part comes in technically), and which share the same context. They are all the same level in the state hierarchy because they are slices of the same state.
  >
  > Invoked actors are helpers that you hand off work to. They do not share context with you, if you want them to know something you have to tell them (by sending async messages), and if you want to know something from them they have to send you messages. They are a a child to the parent machine in the actor hierarchy.
