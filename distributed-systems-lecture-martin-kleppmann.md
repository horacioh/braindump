# Distributed Systems Lectures

by Martin Kleppmann

- [source](https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB)
- [letrure notes](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/dist-sys-notes.pdf)

## Intro [video](https://www.youtube.com/watch?v=UEAMfLPZZhE&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB)

- [Leslie Lamport](http://www.lamport.org/): legend in this area
- Why make a system distributed?
  - inheritance
  - better reliability (fault tolerance)
  - better performance
  - solve bigger problems
    - some roblems or operations cannot be solved on one computer
- Disadvantages
  - Communication may fail: no Internet or problems with the network
  - Processes may crash
  - Non-deterministic events or all can happen nondeterministically
  - **Fault Tolerance**: we want the system as a whole to continue working, even when some parts are faulty.
  - is Hard!

## Computer Networking [video](https://www.youtube.com/watch?v=1F3DEq8ML1U&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB&index=2)

- Any computer device is called a `Node`
- one Node can send a message to another node.
- in reality it depends on many things and network infra
- Latency: time to communicate from one node to another
- Bandwidth: data volume per unit time
- the web is an example of a Distributed System
  - the nodes are the client and the server
  - the type of messages are the request from the client to the server and the response message from the server to the client
  - bandwidth in the web is limited to the amount of size the messages
  - Remote Procedure Call (RPC) example
    - the implementation of the payment function is underneath translated to some sort of a network communication (implemented in the other service/node)
  - how RPC is implemented
    - a function is called outside the service
    - that function is a stub that forwards all the paramenters to the system (marshal args)
    - the response of that function will be returned (marshaled)
    - ideally RPC makes a call to a remote function look the same as a local function call
    - Location Transparency: System hides where a resource is located

## References

- "Distributed Systems": van Steen & Tanenbaum
- "introduction to Reliable and Secure Distributed Programming": Cachin, Guerraoui & Rodrigues
- "Designing Data-Intense Applications": Martin Kleppmann
- "Operating Systems: Concurrent and Distributed Software Design": Bacon & Harris
