# PushPin: Towards Production-Quality Peer-to-Peer Collaboration

- [source](https://martin.kleppmann.com/papers/pushpin-papoc20.pdf)
- by [[martin-kleppmann]]

## 1. Introduction

- The PushPin project, described in Section 3, is investigating if and how we can develop commercial-quality collaboration software with minimal reliance on servers. Our goal is not to create new algorithms or protocols, but rather to evaluate existing technologies by developing an example P2P application with a mindset of industrial software development best practices and realistic user requirements.
- We build upon two foundational technologies:
  - Conflict-free Replicated Data Types (CRDTs)
  - P2P replication protocols
- findings:
  - CRDTs provide a reliable, principled foundation for P2P collaboration.
  - Functional Reactive Programming (FRP) is effective for synchronising user interfaces with state managed by CRDTs (Section 4).
  - P2P protocols work in many cases, but are poorly supported by many network routers (Section 5).
  - Significant open problems remain, including around authentication and access control, indexing and search, schema evolution and compatibility, privacy, and the usability of systems where some devices are in sync while others are not.

## 2. Design principles

### 2.1 Local-first Software

- the software continues working locally if the user’s computer is disconnected from the Internet, and cross-device synchronisation happens in the background when a network connection is available. Even if all servers are shut down, the copy of the data on the local disk remains under the user’s control, and fully available for both reads and writes.

### 2.2 Minimal Dependence on Servers

- in addition to local data storage on each device, the cross-device data synchronisation mechanism should also depend on servers to the least degree possible, and servers should avoid taking unnecessary responsibilities. Where servers are used, we want them to be as simple, generic, and fungible as possible, so that one unavailable server can easily be replaced by another. Further, these servers should ideally not be centralised: any user or organisation should be able to provide servers to serve their needs.

### 2.3 Conflict-Free Data Synchronisation

- applications are _intrinsically distributed_
- We cannot rely on consensus algorithms, which must wait for communication with a quorum of replicas. Each device has its own local view onto the shared data.
- As devices exchange updates, they converge again by merging their states (using CRDTs, specifically Automerge)

### 2.4 Mainstream, as Far as Possible

- We also wanted to explore the developer experience of peer-to-peer software, to understand how writing software with this architecture could become accessible to mainstream software engineers.

## 3. PushPin: A Collaborative Corkboard

- Application to ollect media of various types to archive and organise it.
- the data in this software belongs to the user, and there are essentially no restrictions as to what the user may do with their data.
- there is no need to enforce any global rules or consensus across users, and there is no need for an authority to decide what actions are allowed.

### 3.1 Building Desktop Sowfware with Electron

- Unfortunately, web applications running in a traditional browser have constraints that make them unsuitable for local-first/P2P use:
  - **Storage**: Browsers treat data as merely cache and prone to being expired without notification
  - **Networking**: It is not possible to use arbitrary TCP or UDP networking, which would be required to implement other peer-topeer protocols.
- Electron runs a JavaScript web application in a dedicated Chromium-based browser runtime, packaged as a downloadable and locally installed executable containing all of the required code. Once installed, the user can be sure that the application is available offline.

### 3.2 Automerge Documents

- [Automerge](https://github.com/automerge/automerge) defines a format in which data updates can be written to local disk and replicated to other devices
- An Automerge document is the unit of replication and sharing in PushPin: that is, a user can access either all or none of a document.
- We represent each card and each board as a separate document.
- If another user concurrently creates a new card on another device, it is inserted into the list of cards

### 3.3 URLs and Linking

- Each document is identified by a unique hypermerge URL
- By including one document’s URL in the content of another document, we form a graph of links, similar to the web.
- The same URL can be referenced from multiple places, allowing e.g. the same card to be embedded on multiple boards.
- When a PushPin instance loads a document containing a hypermerge URL, it eagerly resolves and downloads the content belonging to that URL. Thus, any transitively reachable documents are automatically added to PushPin’s local document storage on that device, making them available offline
- Each URL also includes a contentType parameter, which indicates how that document should be rendered in the user interface. This parameter is part of the URL, not the document content.

## 4. Creating User Interfaces for CRDTs

- In contrast to a traditional server-centric web application, CRDTs provide us with a principled way of managing and reasoning about the state of multiple replicas: each replica can optimistically update its local state, and a replication protocol running in the background ensures that they eventually converge
- the convergence we have discussed so far is at the level of Automerge documents

### 4.1 Functional Reactive Programming (FRP)

- FRP works by defining a deterministic render function that takes the current state of an application and returns a description of a user interface that displays this state. Whenever the user performs an action, rather than updating the user interface directly, the state is updated to reflect that action. The updated _state_ is then passed to the render function, which computes the updated user interface. Re-computing the full user interface on every change would be expensive, so in practice, performance is improved by detecting which elements of the view rely on changed state, and updating only those parts that are necessary.
- the render function cleanly translates between application state and user interface state.

### 4.2 Document FRP (DFRP)

- we generalise this approach by making an Automerge document the input to the render function. We call this approach **Document FRP (DFRP)**
- Regardless of its origin, the document can be displayed by passing it to the deterministic render function.
- the user interface logic need make no distinction between a local user’s updates and remote updates received over the network: both can simply result in a call to the render function. (It may be desirable to differentiate writes from different sources, but PushPin does not do so in the current implementation).
- Because a DFRP project’s consistent data model doesn’t require implementing and integrating separate codebases for clients and servers, a DFRP project can actually be simpler to develop than traditional web applications, even though it is also more powerful.

### 4.3 Ephemeral Versus Persistent State

- some fast-changing data (e.g. mouse position or animation timers) could swamp the CRDT with low-value information; there is no reason to persist such updates. We therefore divide the application state into two parts: persistent state that is replicated, and ephemeral state that exists only locally.
- For ephemeral updates PushPin uses an additional messaging channel, adjacent to the CRDT, which ties arbitrary messages to a device and user context. ephemeral data is not associated with a particular CRDT state and is distributed only over direct P2P connections.
- it enables shared contextual awareness in the user experience of PushPin, providing a feeling of presence when other users are online or collaborating.

### 4.4 Supporting Multiple Documents

- PushPin’s fundamental primitive is to render one Automerge document (e.g. the contents of one card) with one FRP function. These document renderers can be nested arbitrarily to produce complex views.
- Moreover, we can provide multiple renderers that are able to render the same document in different ways. For example, in the user interface shown in Figure 1, the board is actually being rendered twice: firstly as a spatial representation containing the cards, and secondly within the toolbar as the title of the board and its authors. Some render functions can even render a wide variety of documents: for example, the toolbar can render any type of document that has a title and a list of authors.

### 4.5 High-Performance User Interfaces

- Many tasks including CRDT computations and cryptographic operations can easily exceed this time budget, and so we perform as much work as possible in a background process. Automerge is split into a frontend that runs on the user interface thread, and a backend that runs on the background thread, with an asynchronous messagepassing protocol between the two.
- Automerge transparently handles the fact that local user input in the frontend can happen concurrently with the backend processing remote operations. We have not seen any other CRDT implementation that provides this feature.

## 5. Peer-toPeer Networking for Collaboration

- In a traditional web application, discovery is provided by DNS, connection by TCP, and security by SSL/TLS. However, these technologies are designed for centralised infrastructure, and they are not a good fit with our goal of being resilient to infrastructure failures
- The peer-to-peer technologies we explored in PushPin attempt to overcome the need for centralised infrastructure.

### 5.1 Existing Peer-toPeer Technologies

- The P2P networking stack considered for PushPin where **WebRTC, BitTottent, IPFS & Dat**
- For PushPin we decided to build upon the hypercore protocol and implementation from the Dat project.

### 5.2 Peer Discovery

- We construct the URL for a document by encoding this public key. Thus, the URL is a stable identifier for the document, even as its content changes, and knowledge of the URL allows a peer to obtain a copy of the document via the peer discovery mechanism.
- When peers are on the same LAN, they attempt to discover one another using mDNS (same system as printers). If successful, the peers can connect directly via TCP and begin exchanging data. This mode of discovery is appealing since it depends only on the local network: communication between peers does not flow via the Internet, and it does not depend on any centralised infrastructure.
- When peers are not on the same LAN, the Dat protocol queries a Distributed Hash Table (DHT) for peer discovery. In PushPin’s case, the seed nodes are operated by the Dat non-profit foundation.

### 5.3 NAT Traversal

- Due to a shortage of IPv4 addresses, most personal computing devices do not have a globally reachable IP address, but rather a local address in a reserved space (e.g. 192.168.x.x or 10.x.x.x). When such a device wishes to establish a connection to another, the local router records the destination of outbound traffic and routes responses back to the originating local client. This process is called Network Address Translation (NAT).
- Relying on NAT traversal or public IP addresses for peers to communicate is not possible. The only remaining solution is to use a server with a public Ip address to proxy the communication between the peers (e.g. using the TURN protocol)
- In the case of PushPin, users in this position can take advantage of indirect replication through another mutually routable peer. any PushPin instance could provide relay services to other peers.

### 5.4 Storage Peers

- An interesting detail of the PushPin storage peer is that its user interface is an Automerge Document. The storage peer daemon monitors that document for changes and takes actions based on what it finds.

### 5.5 Data Confidentiality and Integrity

- The peer discovery protocol uses hashes of URLs, not the URLs themselves, so that anyone observing the peer discovery traffic (such as the DNS server, or other devices on the local network when using mDNS) does not gain the ability to read the document.

### 5.6 Scalability of Peer Discovery

- Since PushPin uses a separate URL for each card, a user quickly accumulates many hundreds or thousands of document URLs. In our testing we found that we could fairly reliably crash the consumer-grade WiFi routers found in short-term rentals with half a dozen researchers sharing their collections.
- when searching for peers that have a copy of a new document, it is likely that this document of interest can be found in the repository of a peer you are already connected to.
- Pushpin significantly reduce the amount of discovery network traffic by querying existing peers first, and then performing a global DHT lookup if it fails.
- Area of future work

### 5.7 Metadata Privacy

- A downside of peer-to-peer protocols is that the peer discovery mechanisms leak information about users to other nodes on the network.
- A number of defences could reduce this tracking potential but this remains an area of active concern and research.

## 6. Conclusion

- The PushPin project set out to create a novel type of software: fully-featured peer-to-peer collaboration software that is fast, reliable, and useful. Specifically, we wanted the software to:
  - respond quickly (within 16 ms) to local user input
  - permit local reads and writes at all times
  - allow collaboration over any kind of network connection (with or without internet access)
  - not rely on any centralised services.
- By storing data in the Automerge CRDT, replicating it over a peer-to-peer network based on Dat, building user interfaces using React’s FRP model, and delivering the software as an Electron application, PushPin has met these goals.

### 6.1 State Synchronisation

- Taking a principled approach to state synchronisation reduces the complexity of developing distributed software. This programming model treats all state updates equally, regardless of origin, eliminating ad-hoc calls to remote APIs. Complex application states are composed of several related documents.

### 6.2 Networking

- Connection is complicated by the widespread assumption of client-server architectures and widespread NAT routing, and connectivity in public environments like cafes and corporate offices can be particularly challenging.
- by replicating self-validating data, the system avoids many concerns
  about trusting data origin

### 6.3 Future Work

- Different versions of an application, running different data model versions, need to be able to run side-byside and interoperate. How do we enable this, while preventing documents from entering invalid states?
- Establishing direct peer-to-peer connectivity is problematic in certain common network environments.
- Distributed Hash Table side channels are a concerning source of privacy leaks.
- The PushPin implementation currently has no mechanism for determining which users’ writes to a document should be accepted.
- In a P2P system, different peers may have seen different subsets of updates for a given document. How do we communicate this to users?
- New and old networking stacks have promise to improve connectivity, including BLE, WiFiDirect, and ultrasonic modems.
- PushPin currently leaves almost all data un-encrypted, requiring trust in any peer that stores your data.
- Rotation of cryptographic keys is an important issue that we are exploring.
- Efficient document querying and indexes are needed: there is no way to load just the titles of a collection of Automerge documents.


