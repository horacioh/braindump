# Distributed Systems Lectures

by [[Martin Kleppmann]]

- [Source](https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB)
- [Lecture notes](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/dist-sys-notes.pdf)
- [Slides](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/dist-sys-slides.pdf)

## 1.1 Introduction

- [video](https://www.youtube.com/watch?v=UEAMfLPZZhE&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB)
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

## 1.2 Computer Networking

- [video](https://www.youtube.com/watch?v=1F3DEq8ML1U&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB&index=2)
- Any computer device is called a `Node`
- one Node can send a message to another node.
- in reality it depends on many things and network infra
- Latency: time to communicate from one node to another
- Bandwidth: data volume per unit time
- the web is an example of a Distributed System
  - the nodes are the client and the server
  - the type of messages are the request from the client to the server and the response message from the server to the client
  - bandwidth in the web is limited to the amount of size the messages
- Messages are not individual TCP packets.

## 1.3 Remote Procedure Call

- [video](https://www.youtube.com/watch?v=S2osKiqQG9s&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB&index=3)
- Client-server example: Online Payments
  - the implementation of the payment function is underneath translated to some sort of a network communication (implemented in the other service/node)
- how RPC is implemented
  - a function is called outside the service
  - that function is a stub that forwards all the paramenters to the system (marshal args)
  - the response of that function will be returned (marshaled)
  - ideally RPC makes a call to a remote function look the same as a local function call
- Location Transparency: System hides where a resource is located
- REST is an implementation of RPC

### Service-oriented Architecture (SOA) / "microservices"

- split a large software application into multiple services (on multiple nodes) that communicate via RPC
  - Interoperability: Datatype conversions
  - Interface Definition Language (IDL): Language-independent API specification
- RPC is hte way that different services implemented in different technologies can talk to each other

## Models of Distributed systems

- descriptions of the assumption that we make when we design an algorythm

### 1.4 The two general problems:

- [video](https://www.youtube.com/watch?v=MDuWnzVnfpI&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB&index=4)

![The two General's problem 1](assets/the-two-generals-problem-1.png)
![The two General's problem 2](assets/the-two-generals-problem-2.png)
![The two General's problem 3](assets/the-two-generals-problem-3.png)

- this problem illustrates the issue of uncertainty that exists in a distributed system when we are not sure if the message got through or not

### 1.5 The Byzantine Generals Problem

- [video](https://www.youtube.com/watch?v=LoGx_ldRBU0&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB&index=5)
- Some of the generals might be traitors

![The Byzantine Problem 1](assets/the-byzantine-generals-problem-1.png)
![The Byzantine Problem 2](assets/the-byzantine-generals-problem-2.png)

- Up to f generals might behave maliciously
- Honest generals don't know who the malicious ones are
- the malicious generals may collude
- Honest generals must agree on a plan
- we need 3f + 1 generals in total to tolerate f malicious generals (more than 1/3 of the total)
- Cryptography can help (with digital signatures) but problem remains hard
- this problem illustrates the issues you can have when participants don't fully trust each other

## References

- "Distributed Systems": van Steen & Tanenbaum
- "introduction to Reliable and Secure Distributed Programming": Cachin, Guerraoui & Rodrigues
- "Designing Data-Intense Applications": Martin Kleppmann
- "Operating Systems: Concurrent and Distributed Software Design": Bacon & Harris
- [Course Materials](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/materials.html)
- [Supervision 0: Get Started Questions (DJ Greaves)](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/djg-materials/s0.pdf)
- [Supervision 1: Semaphores, generalised producer-consumer, and priorities](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/djg-materials/s1.pdf)
- [Supervision 2 (Rev B): Transactions](https://www.cl.cam.ac.uk/teaching/2021/ConcDisSys/djg-materials/s2.pdf)
-

[//begin]: # "Autogenerated link references for markdown compatibility"
[Martin Kleppmann]: martin-kleppmann "Martin Kleppmann"
[//end]: # "Autogenerated link references"
