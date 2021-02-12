# A publishing tool that enables a new way to dialogue, based on a peer-to-peer network.

## Introduction

---

The Web has been a great success with an extraordinary impact on society, but some things have gone south. In 1995, the team building the first commercial Browser, Netscape, tried to embed a native payment system, but they failed. Marc Andreessen, the person leading the group, called it "The Original Sin of The Internet." Consequently, most Internet Companies—search engines, social media, or click-bait media companies— had to build their business models around advertising by competing for our attention through emotional manipulation. The content itself has become irrelevant. The incentive is clicking an advert.

Furthermore, the web architecture missed a linked data layer that would have allowed different websites to interact. Instead, the web has evolved into many closed web applications managing our interactions in data silos. Furthermore, only one entity, Google, owns the information of who links who. The potential of innovation and value creation if this information was open is immense.

The result is that the public sphere has shifted into a platform for advertising, and our conversations have become fragmented, divisive, and plagued with disinformation, leading us to polarization. Nevertheless, our society needs honest collaboration and thought tools to solve complex problems and platforms that can hold constructive dialogues and critical debates.

In this whitepaper, we want to demonstrate that we can build a system that enables sharing and remixing content, keeping attribution and royalties without a central point of control or server. A network of peers gossiping linked data brings the necessary properties to provide a superior hypertext authoring. A cryptographic identity system on top of the network carries the digitally signed content's attribution to the authors.

A copyright system where authors cite, reuse or remix previously published content, maintaining attribution and royalties.

Lightning Network provides the first micropayment scheme that we believe could be eventually embedded in the Web. Direct payments between reader and creator will bring a fair compensation for knowledge.

Attribution, royalties, a better citation process, and reusing can become the dialogue society needs. Share and reuse knowledge. A dialogue inspired by the academia interacts and how creative commons wants thinks of a copyright system. In Mintter reusing and remixing content keeping attribution and royalties, users will prefer to do it right than steal.

## Design Principles

---

Before going into details on Mintter, lets layout the design principles we applied to both its design and development.

- **Local-First Software**

  While it's desirable that user's data can be accessed on multiple devices, authoritative copies of this data should reside on users' local machines. The servers are used primarily to facilitate data synchronization and backup. [Software that adheres to these principles is commonly called local-first.](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701)

  With a local-first approach, the software continues working locally if the user’s computer is disconnected from the Internet, and cross-device synchronization happens in the background when a network connection is available. Even if all servers are shut down, the copy of the local disk's data remains under the user’s control and fully available for both reads and writes.

  In this scheme, there's no common or central source of truth for the most up-to-date state of the system. Each device has its own view of the "universe," or to be more precise – a subset of it. Devices exchange state changes with other devices and apply them locally to their own copy of the state.

- **Peer-to-Peer Network**

  After the Web, social media, and mobile revolutions, users are starting to feel anxious about being part of a centralized database, where Sysops can see or censor all their activities. We believe there is a new trend where users demand autonomy and individuality back again. Peer-to-Peer (P2P) systems allow us to create uncensorship systems, where users can express themselves without Gatekeepers or \*\*\*\*centralized rules.

  The creation of P2P frameworks and protocols like Dat/Hypercore, SSB, libp2p, IPFS, and others led to products and systems that implement them like BitTorrent or Bitcoin. All the testing environments from other cryptocurrency projects have hardened the technology and **lowered the development costs** by making P2P technology more accessible for tech teams to take advantage of this paradigm.

  We decided to use IPFS and its ecosystem to implement Mintter. The main reasons are:

  - Libp2p solves many hard problems for bootstrapping and maintaining a P2P network.
  - Content-addressability is a common and flexible approach for managing immutable data.
  - Main implementation is written in Go – the language we're very familiar that would be very suitable for an application like Mintter due to its performance and developer experience characteristics.

  The principles of Local-First software described earlier fit very well with P2P. Although providing a similar level of user experience as in traditional centralized systems is very challenging, especially when users have more than one device. It's hard to find one-size-fits-all solution for this, thus we decided to focus a concrete use case - Publishing, with the idea to provide the best user experience possible, while continue being a P2P system. Decentralization is not the goal in and of itself though. The good news is that adding a layer of centralization to a system that is inherently P2P is a lot easier than trying to do it the other way around.

- **CRDT**

  Not only managing decentralized identity with multiple devices is hard, but also managing any state in general. Since each device can be out-of-sync for arbitrary amount of time and there's no single source of truth, deterministic merge of divergent state is essential for such a system to work. This is where [CRDTs](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701) comes in handy.

  Although most of the available work around CRDTs is focused on the real-time collaboration, this is not the only place where they can be helpful. In Mintter we actually don't pursue the goal of real-time collaboration, at least in the beginning. We use CRDTs for two primary reasons: version control of data, and seamless multi-device experience.

  Choosing a specific CRDT algorithm is challenging as each solution comes with its own trade-offs and performance characteristics. Hence, we aren't committing to a specific algorithm for Mintter, but instead attempt to create an abstraction – a Patch data structure (described in the following section) that could support different algorithms and evolve incrementally in a backward-compatible way.

  For the use case of Publishing doing version control with delta updates rather than snapshots makes sense because it would incentivize users to keep all the changes for as long as they keep the object, thus ensuring the density of propagation and preservation of history.

- **Cryptography**

  Cryptography enables new applications with decentralised architectures. During the web era, these applications were only conceived as centralised server architectures. In the last decades, progress on PKI and Digital Signatures. Bring interesting features in Identity.

- **Social Proximity Networks**

  In a conventional social network users are not in control on what they see, in which order or from whom they see or consume information from. That's because the motivations and the incentives the gatekeepers have are not aligned with the users as we described before. Current Social Networks make content as the center of the system, that leads to misinformation, click-bait and fake news, to be what is most distributed instead of good quality content helping spread knowledge and motivate better conversations.

  Authors are the center of Mintter. Authors become streams of information that users can follow or subscribe. They can also follow a particular publication instead of the author itself, effectively filtering the Author's stream.

  Because users are in control on the authors they follow or subscribe to and the topology of the network puts authors as first-class citizens, spam is practically impossible. For example, in Usenet, anyone could sent messages to a topic (newsgroup), this was prone for spam. In Mintter, when a user publishes a document, a message is sent to all the users that follow this user (Subscribe to the topic in libp2p semantics) this is key because following only authors and publishers could mitigate the amount of spam a user receives.

  Another great benefit of having Authors at the center of the system is that if a malicious author wants to spread content not relevant to users, they can "cut" the stream of data and eventually isolating these bad actors from the network, very similar to how connections work in Secure Scuttlebutt.

- **Micropayment Peer-to-Peer system**

  Lightning Network is the native money scheme that the Browser and Internet were missing. It is a micropayment network build on top of Bitcoin that enables instant payments across a network of participants.

  The stream of content between Mintter Users has a perfect match with Lightning. Direct payments between reader and creator will bring a fair compensation for knowledge.

  This will allow us to exercise the property rights of our digital self. A new age of collaboration and enlightenment is coming.

## Mintter: The Distributed System

---

Mintter, as you can see in the figure below, allows authors (our users) to contribute and create content on the Mintter Network. The type of content authors can publish text, diagrams, equations, tables, raster-scan images (single frames or even **live video**), spreadsheets, recorded sound, etc. — all bundled within a common "envelope" to be stored, transmitted, read (played) and printed as a coherent entity called a "document". Although Documents are the medium in which authors can communicate and dialogue, there are other tools and technologies behind in the system that are important to describe in more detail.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ed04bc8-f67f-49e5-a378-1c2e3a062f9e/mintter-library.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ed04bc8-f67f-49e5-a378-1c2e3a062f9e/mintter-library.jpg)

Prototype of the Local Application showing the Library page listing all the publications available locally to read and reuse.

- **Decentralized Identity**

  Your Digital Identity is very important, not only for your integrity but also for others to trust that no matter what you do, the content associated to your digital identity was published by you and only you. Normally cryptographic keys are used to establish an identity of a user in a decentralized environment.

  Implementing support for a single identity with multiple devices is especially hard in a P2P setting, as there's no single source of truth about the system's state. One possible solution could be to copy the same private key on all devices so that each one can sign content with the primary identity key. While being conceptually simple, this brings some security risks like compromising the whole identity if a single device is compromised.

  We take a bit different approach by using random keys on each device (Peer) and "linking" them together under the primary Account Key.

  - **Cryptographic key pairs and Device Signature**

    To help to establish trust between users we use asymmetric cryptographic key pairs to identify each device/peer that runs a Mintter Application. Content produced by users is signed with the private key of their devices, and other users can verify the signature with the corresponding public keys.

    Devices are grouped under a single Account which is the primary identity of a Mintter User. In essence, one Account will have a list of devices/peers (at least one) associated with it. That's one key pair for the Account, and a separate key pair for each device.

    The process to link devices to an Account works along these lines:

    1. When you create your identity for the first time, we generate a random cryptographic seed using [Aezeed](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701) scheme as implemented by LND to ensure future integration with Lightning Network is possible using the same seed. The seed is then encoded into 24-word mnemonic phrase, and these 24 words is the only thing user needs to take care of to keep their identity safe. We avoid storing the seed anywhere, and it's only used to create the binding between Account and Device.
    2. We deterministically derive user's Mintter Account Key from the Seed we've created previously using the process described in [SLIP-10](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701).
       1. First we generate a master key for ed25519 elliptic curve.
       2. Then we derive user's Mintter Account Key, which also ends up being a ed25519 private key.
       3. Then we derive a public key from the private key.
    3. For the device key - we generate a separate random ed25519 key pair. The hash of the public key becomes the PeerID of the device.
    4. Then an "Invite" message is produced and signed by the Account Key that includes the PeerID of the device being added.
    5. Then the Device "wraps" and signs this invite message with its own private key. This combined message ends up being a proof of the fact that both Device and Account wanted to be linked.

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fbded70-a4b1-4455-ab32-ee559a36154b/device-invite.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fbded70-a4b1-4455-ab32-ee559a36154b/device-invite.jpg)

    Visual Representation of the process to add a Device to an Account

    We this scheme, we can avoid storing the main Account Key on the devices and only use it briefly to link Device and Account together. This helps to prevent compromising the Account Key in case of compromising a Device. We could still store the original Seed enciphered with the user's provided passphrase on the device for a more seamless user experience.

    As always with cryptography there's a tradeoff between usability and security. Users need to be aware of the fact that there's no "forgot password" functionality for their main cryptographic identity, and they need to take good care of it.

    A user could also use the Account Key to revoke a Device. This is done by creating a revocation message signed by the account specifying a device to revoke.

  - **Mintter Account**

    The state of the user's Mintter Account is composed by the following information:

    - _Profile._ \***\*It \*\***can hold arbitrary information about the Account such as: alias, email, bio, avatar URL, etc. Users can also link third-party accounts like Twitter, or other social media platforms, by publishing proofs on these other platforms signed with one of the user's device keys. All this information becomes public and available for other users to verify.
    - _List of Devices._ The list of Peer IDs with their state (active, revoked).
    - _Catalog of Publications._ Users can author Mintter Documents (described later) and information about the published document will become part of their Account.
    - _Social Graph._ Users can follow, unfollow or block other users. These actions are public, and are recorder on the user's account information.

    While the actual state of the account is mutable (e.g. you can follow someone and then unfollow them), the history of changes is immutable (append-only) and is cryptographically verifiable. This is described in more detail in the following section.

- **Objects And Patches**

  As described earlier in the [CRDT section](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701) we generalize on the idea that every piece of state in our system is expressed as a set of patches. Patches are applied to Objects by specifying an ObjectID. Technically ObjectID can be an arbitrary string, but in our use case we define two types:

  - The main user's account for which the ObjectID would be the hash of the Account Public Key.
  - Random ObjectID that is created by publishing an "empty" patch that doesn't refer to any object, such that the hash of this patch would become a new ObjectID that other patches can refer to. This idea is inspired by [Perkeep's permanode](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701), and it gives us the benefit of being able to trace back to the identity of the original creator of the object.

  Every new patch must explicitly specify other patches that it depends on, meaning any other patch that came before which is required in order to apply this new patch.

  Peers exchange patches between each other and apply them to their local copy of the state. Patches are signed cryptographically by the Device Key, stored as IPFS blobs (these are actually IPLD DAG-CBOR Blocks, but we call them blobs to avoid confusion with Mintter Document Blocks discussed later), and are content-addressable.

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d479f8b-89b3-4c53-9e7a-73622676966a/patches.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d479f8b-89b3-4c53-9e7a-73622676966a/patches.jpg)

  How Patches are applied to a Mintter Document

  Technically, any peer can produce a Patch for any object, but each client is willing to decide how and when to apply the Patch to their local state.

  Conceptually one could think of patches coming from the same peer that are related to the same object as an append-only log, and the actual state of the object is a union of these append-only logs from multiple peers (as a patch can depend on other patches from other peers). This union of Patches can naturally form a graph (DAG) based on the dependencies expressed between patches.

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36b56bcc-4534-467a-ae97-9a3af844ab16/concurrent-patches.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36b56bcc-4534-467a-ae97-9a3af844ab16/concurrent-patches.jpg)

  The actual body of the patch is an opaque byte sequence that is interpretable by the application. It could be a list of discrete operations, or some kind of CRDT data structure. This is what allows us to choose different CRDT algorithms without modifying the actual Patch "envelope".

  A Patch is a struct with the following fields (pseudo-code):

  ```go
  type Patch struct {
    // CID-encoded ID of the author of the patch.
    Author CID

  	// CID-encoded object ID.
    ObjectID CID

  	// A list of CIDs of patches that are required to apply this patch.
    // The dependent patches must refer to the same Object IDs.
    // Only direct dependencies must be specified, and only one
    // for each peer, e.g. for a sequence of patches A ← B ← C,
    // patch C must only specify B as its dependency.
    Deps []CID

  	// A monotonically increasing counter that must have no gaps
    // within the same device and ObjectID.
    Seq uint64

    // A Lamport timestamp. Each peer keeps a logical clock
    // per object, and when creating a new patch the
    // author must assign a timestamp which is an increment of
    // the maximal timestamp among all other peers' timestamps
    // the author knows about.
    LamportTime uint64

    // An arbitrary string that lets the client know
    // about what's inside the body of the patch.
    // This is important to make the system evolvable and future-proof.
    Kind string

    // An arbitrary byte buffer.
    // Could be serialized list of discrete operations,
    // or anything else that is relevant to the application.
    Body []byte

    // An optional human-readable message.
    Message string

    // A physical timestamp of creation of this patch, for convenience.
    CreateTime Time

    // A public key that signs the patch.
    PublicKey []byte

    // A cryptographic signature of all the previous
    // fields that can be verified with the public key.
    Signature []byte
  }
  ```

  This kind of structure helps to define the arbitrary total order of patches produced by multiple peers that refer to the same ObjectID. This property is helpful and very important for deterministic merges of divergent states. For any two patches A and B there can exist one of these relationships between them:

  - A depends on B.
  - B depends on A.
  - A and B are concurrent.

  Notice that even though A and B can be concurrent, it doesn't necessarily mean they conflict with one another. The conflict resolution algorithm is highly-dependent on the actual body of the patch, and the way to interpret it is up to the application.

- **Open Hypertext Document**

  A Document is a Map with keys and values. It consists of blocks, which are also maps with keys and values. Blocks can be nested within each other. The position of the block within the document is defined by the parent block and its left sibling. Blocks form a nested linked list.

  A Document is created by this primary building blocks: Blocks, links, and embedded objects (images, video, audio, web embeds, or any other media that can be rendered by a browser). These embedded objects can be stored either on a conventional web server or as files on IPFS. Furthermore, to promote dialogue and different perspectives, the reader have access to backlinks, content links and visible connections, which makes the Hypertext document system possible.

  An arbitrary mix of text, diagrams, equations, tables, raster-scan images (single frames or even **live video**), spreadsheets, recorded sound, etc. — all bundled within a common "envelope" to be stored, transmitted, read (played) and printed as a coherent entity called a "document."

  Explicitly structured documents where the objects comprising a document are arranged in an explicit hierarchical structure and compound-object substructures may be explicitly addressed for access or manipulation of the structural relationships.

  - **Links and addressability**

    Each part of the document is addressable and can become a URL. Every entity in a document is addressable. Links to documents or parts of documents are represented in slight different ways depending on the source its pointing to: if Document A have a link to Document B, Document A will show a link to Bocument B, and Document B will show a Backlink to Document A.

    Links can point to a whole document, to a block or even to a subset of a block. Links to a block can be represented as transclusions or quotes, that are represented as portions of read-only content that brings all the meta-data associated with the source document. This itself is a good enhancer and motivator of content distribution.

    Links are Bidirectional and most likely permanent\*. Every publication is content-addressable and distributed throughout the network, that makes it close to impossible to loose linked content if the linked content is at least present in one or a couple of devices. This is a key difference to what we are used to with web links, which are location based and are prone to dissappear.

    **_The Basic "Hyperdocument"_** -- where embedded objects called "links" can point to any arbitrary object within the document, or within another document in a specified domain of documents -- and the link can be actuated by a user or an automatic process to "go see what is at the other end," or "bring the other-end object to this location," or "execute the process identified at the other end." (These executable processes may control peripheral devices such as CD ROM, video-disk players, etc.)

    **_Hyperdocument "Back-Link" Capability_** -- when reading a hyperdocument online, a worker can can utilize information about links from other objects within this or other hyperdocuments that point to this hyperdocument -- or to designated objects or passages of interest in this hyperdocument.

    **_Link Addresses That Are Readable and Interpretable By Humans_** -- one of the "viewing options" for displaying/printing a link object should provide a human-readable description of the "address path" leading to the cited object; AND, that the human must be able to read the path description, interpret it, and follow it (find the destination "by hand" so to speak).

    **_Every Object Addressable_** -- in principle, every object that someone might validly want/need to cite should have an unambiguous address (capable of being portrayed in a manner as to be human readable and interpretable). (E.g., not acceptable to be unable to link to an object within a "frame" or "card.")

  - **Access control, Signature, Encryption**

    Mintter documents don't have access control or group privacy like Usenet or other applications. The idea is to be as open as a Web page following the success of the web. We will work through access restrictions down to the object level through encryption to enable micropayments. Authors that want to enable encryption and micropayments shall need to spin up their own publishing server.

    As defined in section 3, Mintter uses a **_Personal Signature Encryption_** -- where a user can affix his personal signature to a document, or a block within the document, using a private signature key. Readers can verify that the signature is authentic and no bit of the signed document or block has been altered. Every reused piece of content comes with all this information about the author.

  - **Versioning and document changes**

    Authors must be able to add changes to the document. We use new versions to add changes to a document. A distributed system this complicated propagate changes, immutable structures.

    Permascroll

    Append-only log.

    - Per Device
    - Patches are append-only.
    - Probably not actually a linear log, but more like a graph or semi lattice where
    - CID is the version id of a document.
    - Patches? what type of patches would we have at Object Document level? add a block?

    As we explain in section 2, we use patches to

    Changes to the title, subtitle or any metadata are atomic (it changes the whole text of the value), changes to the text in a block are not atomic but as a list of characters

    As we said before everything shall be a URL, and every version of an object should be represented as a URL.

    Changes to the title, subtitle or any metadata are atomic (it changes the whole text of the value)

  - **Document Object**

    ```go
    type Document struct {
    	canonicalURL
    	CID
    	title
    	subtitle
    	keywords // string[]
    	author
    	blockList //
    	links // Map of objects with URI and Content-Type
    	embeds // Map
    	createdAt
    	updatedAt
    }
    ```

    reference: [https://github.com/mintterteam/mintter/blob/master/proto/documents/v1alpha/documents.proto](https://github.com/mintterteam/mintter/blob/master/proto/documents/v1alpha/documents.proto)

  - **Other Media Objetcts**

- **Networking**

  The Mintter network consists of multiple peers grouped under their Accounts that talk to each other directly or via relay services.

  As mentioned previously, we have selected the technology stack of IPFS and Libp2p which allows us to not reinvent solutions for the common hard problems of peer-to-peer networks like NAT transversals, peer discovery and so on.

  We use the following components of the IPFS and Libp2p ecosystem:

  - GossipSub.
  - BitSwap.
  - IPLD
  - DHT
  - Peer Discovery

  - Mintter Protocol.
  - Handshake
  - ObjectSyncing
  - Feed

  For example we'll use the GossipSub protocol for propagating real-time updates, BitSwap protocol for actually exchanging the information about immutable content-addressable blobs of data. We will participate in the libp2p and ipfs network. IPFS protocol works as a content addressable hash representation of our binary payload. We could skip using IPFS protocol as it doesn't give us much value, but we are trying to use the most open protocols as possible for compatibility, interoperability and transparency. In case IPFS brings to much overhead we would consider removing it.

  Libp2p is our networking stack. The library is still maturing. We agree with Juan Benet initial vision that we need to hardened p2p technologies in order to compete with the incumbents. Our goal is to help this happen, by using existing libraries instead of trying to build one more p2p library. Also we believe people underestimate the amount of work needed to develop a networking library and we want to dedicate our limited resources to the application layer.

  which gossip protocol layer we are using? pull and push gossip protocol. Libp2p pubsub.

  how much we rely on libp2p for peer connections (peerId-IP data)

  The protocol creates a global gossip network. This means that information is able to be distributed across multiple machines, without requiring direct connections between them.

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7c883fa-a542-4193-8f99-98e587813a75/networking-1.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7c883fa-a542-4193-8f99-98e587813a75/networking-1.jpg)

  Even though Alice and Dan lack a direct connection, they can still exchange feeds:

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0753fc9-daf0-4804-a045-6534fe1bfadb/networking-2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0753fc9-daf0-4804-a045-6534fe1bfadb/networking-2.jpg)

  This is because [gossip](https://handbook.scuttlebutt.nz/glossary#gossip) creates "transitive" connections between computers. Dan's messages travel through Carla and the Pub to reach Alice, and visa-versa.

  > You don't need all the data on your computer, just the data that is for your network, people you know, and maybe people they know. The idea is not to have the entire network, just a subset of it.

  - **P2P replication protocol and policies**

    Our P2P replication protocols allow updates from one device to be propagated to other devices that have a copy of the data, without relying on cloud services [9, 28, 36].
    We discuss these protocols in Section 5.

    pubsub libp2p protocol, our policy is that a peer replicates all your peers articles you follow.

    recursively following any hypermerge URLs.,

    Our peers are very close to the concept of authors, a document is not a movie. The are small amount number of movies and many people having the same movie. Thus you can rely in a set of anonymous peers to search and pull, some will be active some not. Whereas in documents works the other way around, there a massive number of documents and sometimes only in one peer or 2. You need to sync when 2 peers are going to be active to transact!

    All the peers subscribe to a topic are participants and distributors of that topic in the Network

  - **Peer Discovery**

    For peer discovery Mintter relies on the already established bootstrapping process implemented by Libp2p.

    1. Peer A connects to a well-known list of bootstrap peers. Our peers are going to start with a list of publishers. Users can configure their own list of bootstrap peers.
    2. After connection established, bootstrap peers share the list of their known peers with peer A which attempts to connect to a subset of them until the configured low and high watermarks for the connection manager is reached.

    - When peers are connected they negotiate the protocols they support and connection is multiplexed across these different protocol.
      - For example peers can support Kademlia DHT protocol, so a peer can become a participant on the DHT, etc.
    - Discover a peer
      - Peer discovery Methods:
        - Distributed hash table.
        - Local network broadcasts.
        - List of Bootstrap peers.
        - Exchanging peer lists with existing peers or stablished connections. Either is a Social Connections (Follow) or not.
        - Centralized trackers or rendezvous points, aka our Publisher-Club.
    - Resolve the IP from a peerid
      - Peers DHT.
    - Discovered peers are asked if they support the pub/sub protocol, and if so, are added to the pub/sub network.
    - The c**onnection** is a TCP/IP connection, we are not referring to a social connection.
      - A connection Must be between Mintter Peers.
      - TCP/IP connections could be between other `libp2p` nodes, but those are transparent to a Mintter user
      - Connections are constantly being discovered through the libp2p system. Every time libp2p finds another peer, it will try to upgrade to a Mintter connection.
      - Once a Mintter Connection is established, independently, if it is a following or follower peer, the 2 nodes will start exchange data.
        - a Mintter Connection is the action of exchanging information between two nodes. Nodes will exchange a blob that links \*\*the accountID and the PeerID of that node
      - Given a PeerId, we assume that finding its machine is highly plausible in the libp2p network thanks to its DHT peers' discovery protocol and bootstrap nodes. However, Mintter's architecture will hold **Publisher-Clubs-Community-Pubs** which will facilitate the idea of finding peers.
    - A social connection will be represented by the actions Follow and Block

      - The list of authors you follow are called Following.
      - The list of authors that follow you are called Followers.
      - Every new Mintter Peer discovered is shown in a list of Suggested Follows.
      - Follows will become Full-message peerings.

    - DNSLink for users with web domains.
    - Peer interactions
    - (IP, PORT, PEERID)
    - Libp2p, NAT traversal and circuit relay protocol of libp2p.

    I think it should be a configuration option for all peers, and by
    default set to auto-relay which would attempt to see if the node is
    reachable from the outside, and if so announce it as a public relay for
    any peer.

    Relays are just regular libp2p peers that happen to speak circuit-relay
    protocol.
    So all the rules for peer discovery and connection management apply to
    them as well.

    - Other peer discovery mechanisms supported by libp2p are also applicable in Mintter.
      - mDNS, DNSLink, etc.

    There are Network Connections and Social Connections,

  - **Identity Object Broadcast**

    What happens when a user creates an account for the first time, Announce on pubsub and the DHT.

  - **Document Exchange**
    - Peer interactions
      - Resolve the final document from a patch
        - Follow ancestor pointers until the root is reached, then apply patches.
      - Notify interested peers about new document being published.
        - we use LibP2P
        - Gossip: social connection to prevent spam
        - FLOOD
        - Epidemic constant: the constant number of peers you send a message that will also be propagated?
      - Notify a newly connected peer about all the documents of another peer.
      - Get the newest head of a publication
      - Get the newest head of a profile
      - Get the newest head of the devices log.
      - Follow all author activity
      - Follow updates of a specific article, (follow a topic)
      - Follow a keyword?
      - Going from block to a version and from that to the Head
      - Publish new document
      - Update published document
    - Multimedia content
    - On top of Libp2p we use IPFS because ...
    - topics in Mintter are AccountIDs
    - only the accountID owner is allowed to publish messages on that topic
    - users can filter by document ID, but that does not mean it will not receive every message from that particular topic (accountID)
    - if your peers does not have a particular document you want, it will fallback to a DHT to find the particular document
    - The user's social connections are essential to avoid spam and undesired messages ([Gitverse - P2P GitHub alternative from André Staltz in SSB](https://www.notion.so/Gitverse-P2P-GitHub-alternative-from-Andr-Staltz-in-SSB-6ecb07c1ed764b21b046e64b35ea8c78))
    - How can we assk to all our connected peers for all the documents published by an accountID:
      - if the published documents are a list of hashes on each peer, this measn that on every published document, a peer needs to create two patches and @Alexandr Burdiyan does not like that.
        - @Horacio Herrera thinks this can be the state generated for each accountID on every peer, and can be shared to other peers if they want it. (maybe a "haves" list of all documents of a particular accounID)

- **Local Application**

  We chose the Web as a base layer for our desktop application because of the massive adoption and the intrinsic benefits and advantages brought by adopting it. The web gives us the freedom and flexibility to render our application in places in which our users feel more comfortable working, without the need of rewriting it for a different target. Another reason is that we want to enhance what the web has done as a technology to humanity, and building on top of it was the obvious path to follow.

  Currently our SPA is a NextJS application using React and Typescript, but we are exploring using other and simple building blocks (Snowpack or similar). Some of the most important JavaScript Libraries we are using are SlateJS (pluggable rich text editor), React Query (network layer) and TailwindCSS (Design system and styling).

  In the future, we want that these building blocks we are using to create the web application to be open-sourced and other developers can use them on their own needs.

  - **Electron Application**

    Every user can connect to the P2P network using a desktop application (Electron or similar), a JavaScript Single-Page Application (SPA) and a local-running daemon in Go embeds functionality of IPFS and Lightning Network.

    This desktop application will consist of a web application (running in localhost on a specific port) and a daemon that helps with Networking and act as a backend. This web application communicates with the daemon via a gRPC framework in which acts as a server.

  - **Storage management**

    - metadata or full-content?
    - Pin content to NOT be deleted?
    - storage algorithm?
    - expiration date?
    - History log?

    The Challenge is who is going to store the content without a central database storing everything.

    An already old example for distributed content is Kindle. When you buy a book in Amazon, the book gets downloaded to your device.

  - **keywords**
    - **keywords** could work as filters only in your local graph

- **Super Peers: Web Gateways and Storage**

  If a User uses Mintter.com, MIntter is the Publisher. If the user runs its own instance, the user is the Publisher. Mintter can run an instance on behalf of a user. Dedicated servers run their own lightning node.

  Flexible deployment options

  1. Author - Web Gateway and content mirroring (personal storage server) in mintter.com, basic theming.
  2. Publisher - Dedicated Server, web Gateway, storage server, templating, LN node.
  3. Hackers - an independent developer run their own instance in their premises.

  Extend the web capabilities. Solve p2p issues with super peers. **What is the topology of the network?** There are devices, mirroring servers, publisher servers. These entities create a mesh of machines to adapt to the technical needs of store, bandwidth, availability, and processing power. And to the user needs Authors, Readers, and Publishers, content creation, distribution, availability. based on the principles of a better copyright system of creative commons, keeping attribution and royalties.

  You can search only within your retained or sync content, ask your network of peers (your peers a different from your follows, or ask the DHT.)

  In [Usenet](https://en.wikipedia.org/wiki/Alt.*_hierarchy#/media/File:Usenet-total-storage.jpg), conversations are followed through topics and threads (reply to). Instead, Mintter follows an academic and hypertext inspired type of dialogue. Where every new addition to the dialogue is a new article with citations to previous additions.

  - **Propagation**

    Messages will propagate, relays,

    The more mentions, links, and embeds, the more propagation of an article through the network. The more popular something is, the more peers replicate it. As such more bandwidth and redundant fetch locations become available that could get the content to you (the reader) at lower latencies.

    Propagation won't have retweets, or likes, only textual mentions. The article's flooding will be limited by the gossip protocol and the power that the user will have to follow its desired topics. Topics can be an author, a document, or a publisher.

  - **Mirroring Servers**

    Mintter or any other provider (like hashbase) can mirror the Authors content. Authors can make their content available even when their main device (laptop or computer) is offline. mintter web viewer or HTTP gateway.

    Also the Mirror Server can host User Identity Profiles.

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56b30c88-3744-4904-9518-7dd0640834b6/image0.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56b30c88-3744-4904-9518-7dd0640834b6/image0.jpg)

    SN → Server node
    LN → Local Node
    MS → Mirror Server
    <—> Direct Connection
    ← - → "Indirect" (not explicit) connection

    - A Mirror server can and will store any topic. This is important to make user's content available even if their local node is offline.
    - A user needs a mechanism to "send" a publication to a Mirror server, to help users share the url to a particular Document Version.
    - Another idea about Mirror server could be that they work as a CDN node, in which is connected to every node it can and makes content available to anyone

    _Unlike a traditional server, a storage peer can be reached through NAT traversal, so it does not need a public IP address: for example, it could be a device on the user’s home internet connection. Since it only stores the data for a small number of users, it does not need to be a powerful machine. We have experimented with using a Raspberry Pi as storage peer, writing data to an SD card, and also running storage peers on virtual server instances in public cloud providers._

  - **Mintter And Relation With The Web**

    - how content from the web is stored
    - Web links break

      - Mintter could snapshot a web site and store it in IPFS and link to the precise CID of the web page.
        - Does this even make sense?
        - Licenses and other policies
      - We could just store the link in the Mintter document and that's it.

      Canonical weblinks? Philosophically speaking, are we using the web for location addresses and google's global search? Also, are we relying on domain authority brought by the web? Do we need this value that the web creates? Probably most readers are going to be web readers. Furthermore, every web site is a library or repository of content. We should find a way to interact with those repositories, making them part of the network.

    - At the beginning, Mintter will have a bootstrap node, in which every user will be automatically connected to. This will give users a public URL to every document they publish on their local nodes, making it easier to share their content online
    - Similar to Newsgroups in Usenet, we can treat domains as the primary key of a newsgroup (topic), and give domain admins control over what happens on that specific "topic". In Usenet there where some problems and limitations around centralizing a decentralize hierarchy (categories and subcategories)

  - **Publisher Servers**

    Publishers

    Run a lightning network instance

    Regular paywalls?

    Node Servers can pin all the articles they want and become part of the

    Curation of content

    **_The Hyperdocuments "Library System"_** -- where hyperdocuments can be submitted to a library-like service that catalogs them and guarantees access when referenced by its catalog number, or "jumped to" with an appropriate link. Links within newly submitted hyperdocuments can cite any passages within any of the prior documents, and the back-link service lets the online reader of a document detect and "go examine" any passage of a subsequent document that has a link citing that passage.

    **_Hyperdocument Mail_** -- where an integrated, general-purpose mail service enables a hyperdocument of any size to be mailed. Any embedded links are also faithfully transmitted -- and any recipient can then follow those links to their designated targets in other mail items, in common-access files, or in "library" items. We are building a centralized smtp gateway where a peer can send an article with an email attach we will send an email, also we can used this for notifications.

- **Vulnerabilities**

  There's no cryptographic system that is 100% secure, and because of our design decisions described earlier there are some limitations in out system:

  - Patches referring to different objects published by the same peer don't have verifiable total order. They are only ordered by their physical timestamp now.
  - Lost device or any malicious peer can publish things in the past by rewinding its physical clock. Messages published by a single peer are only ordered by their physical timestamp at the moment. Due to this limitation there's no order between the revocation message from the account and messages published by the device besides the physical timestamp.

## Constellation Services and The Value of Content

---

There are two business models around Mintter. The first one is Constellation Services. We offer a decentralized set of services as storage, notifications, etc. These services are pay-per-use with Lightning Micropayments. These `Micro-Services` can be consumed by Mintter Nodes or by any other client, mostly other decentralized applications. We could transform and decentralized the Cloud Services Industry as it is today.

The second business model is Content Monetization. We offer our users a new way to monetize their content and knowledge. Lightning Network brings a new horizon of opportunities with micro and direct payments between reader and author. Micropayments per click are unlikely because the mental transaction costs are higher than micropayment itself [[\*](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701)]. An Author that wants to monetize its content has to become a Publisher and set their own Lightning Node by spinning up a Mintter's Publisher Node. The Publisher or Author someone follows its feed or a document. In order to follow its feed of content needs to subscribe to the author's feed or to a document feed. The Author can reuse content from other authors, but the payment is distributed between the publisher and included authors. Even though you subscribe to an author feed, the payment will be per document.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d14e6376-ffb4-4df9-a4da-85e81dc28773/transclusion_4_shrink.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d14e6376-ffb4-4df9-a4da-85e81dc28773/transclusion_4_shrink.png)

A Visual metaphor by Maggie Appleton about how content distribution and curation help distribute value throughout multiple publications

- **Encryption and Payments**

  Paid Documents will travel encrypted through the network. The Publisher must have a Publisher Node active with a stable IP. Readers will connect to the Publisher Node to decrypt and route the payment for the Paid Document. Lightning Network has some mechanisms to manage offline payments for certain scenarios.

  The key to decrypt the content is the same for everyone. How can we ensure a user gets paied by multiple readers without compromising the secret key? Atomic swap

  If a Reader looses its copy, he will have to pay again for it.

  A Reader that decrypts a copy can try to distribute a free version of the copy. We believe that if we build a very smooth copyright system, people will prefer the Paid Copy:

  Express the gratitute to the creator.

  Making sure that it has the original copy without being tempered.

  Being able to reuse the content keeping the attribution.

  Reputation with their peers.

  Paid Content distribution is done through the network and the payment and decryption from a Publisher Server.

  In the future, through smartcontracts the network will help with the job of publishing.

## Privacy And Censorship

---

Mintter documents are public by default. We are oriented to the world of publishing. Everyone can access your documents, no one can modify the documents excepts you. Others can send pull request for changes.

We review some ways for monetizing the original content further in this document.

The IPs are pretty public.

_A downside of peer-to-peer protocols is that the peer discovery mechanisms leak information about users to other nodes on the network. Although the content of documents is only available to peers who know their URLs, the discovery keys (hashes of URLs) are widely broadcast, allowing a user’s device to be identified by the pattern of discovery keys it shares. With this information, an attacker can monitor a user’s IP addresses over time, and thus track their approximate physical location._

## Conclusion

---

Our purpose is to empower authors to share their knowledge with individuality and autonomy, enabling a new dialogue and learning framework. We believe that we truly enable a new way to dialogue with this publishing tool based on a peer-to-peer network. We allow advanced document authoring and interaction without a single point of control.

## Future Work

---

- Monitor the performance and overhead of different libp2p protocols (DHT, PubSub, Relay).
- Real time collaboration between 2 authors or 2 devices.
- Multi-signature of a document.
- [Math Formula](https://www.notion.so/Math-Formula-facdd4a09ea44cd6b987c8a5e416daa3)
- Other projects are building Link Data Layers. Our documents are multi-object documents. How could be interoperable with these other networks?

## References

---

- Aezeed: [https://github.com/lightningnetwork/lnd/tree/master/aezeed](https://github.com/lightningnetwork/lnd/tree/master/aezeed).
- SLIP-10: [https://github.com/satoshilabs/slips/blob/master/slip-0010.md](https://github.com/satoshilabs/slips/blob/master/slip-0010.md).
- PushPin: Towards Production-Quality Peer-to-Peer.
  Collaboration. [https://martin.kleppmann.com/papers/pushpin-papoc20.pdf](https://martin.kleppmann.com/papers/pushpin-papoc20.pdf).
- Local First: [https://www.inkandswitch.com/local-first.html](https://www.inkandswitch.com/local-first.html).
- Make the Right Thing the Easy Thing: Better Choices by Default · Jason Lengstorf: [https://lengstorf.com/right-thing-easy-thing/](https://lengstorf.com/right-thing-easy-thing/).
- CRDT Tech: [https://crdt.tech](https://crdt.tech/).
- Permanode: [https://perkeep.org/doc/schema/permanode](https://perkeep.org/doc/schema/permanode).
- Usenet
- Xanadu, Ted Nelson
- Augment, Doug Engelbart
  - [Essential Elements of an OHS](https://www.notion.so/Essential-Elements-of-an-OHS-97d3a8cad41d4789ba232d45ad922283)
- creative commons
- TiddlyWiki - [https://tiddlywiki.com/](https://tiddlywiki.com/)
- Connectivism: A Learning Theory for the Digital Age - George Siemens, Jan 2005

  [https://jotamac.typepad.com/jotamacs_weblog/files/Connectivism.pdf](https://jotamac.typepad.com/jotamacs_weblog/files/Connectivism.pdf)

- Micropayments and Mental Transaction Costs, Nick Szabo [https://nakamotoinstitute.org/static/docs/micropayments-and-mental-transaction-costs.pdf](https://nakamotoinstitute.org/static/docs/micropayments-and-mental-transaction-costs.pdf)

[complementary content](https://www.notion.so/complementary-content-2c2ecc01595c437ab424d0e384473ba7)

- **A New Way to Dialogue**

  Addressability, parallel pages, and visible connections are key for, connectivism reading different experts talking about the same topic from different perspectives is considered the best way to learn. [\*](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701)

  a better citation process in a peer-to-peer network. These published documents must maintain key hypertext features as linking, reuse of content, or content graphs.

  Users can quickly refer to or reuse other users' statements, read different perspectives or retrieve origin contexts. We achieve this with better hypertext authoring tools like a hierarchical multimedia editor, visible connections and parallel pages, and trails.

  The act of publishing. When you're done writing a document you publish it to the general public. Xanadu and Augment. Backlinks, everything is a document. Visible connections and parallel pages.

  Mintter focused on publishing requires immutable objects by essence. Once you publish content to the public sphere, that content becomes immutable, allowing others to reuse your content. **Immutability** is a key property of successful distributed systems. This immutability plus the identity properties offered by cryptography let us keep the **trace** of a statement through the maze of devices of a peer to peer network.

  When everything is addressable you can point to different statements from different people and very fast create a powerful new statement. Thus advance the dialogue.

        The web makes isolated pages, social feeds creates noise. For example, *we don’t want ‘retweets’ or ‘reboost’ mechanisms in SSB, because these are ways of propagating viral content, which turns out to boost attention-seeking behaviors, which in turn boosts controversial and toxic content. Social networks are good at propagating things by gossip, and retweets are essentially a gossip mechanism.*

  Share and reuse knowledge with an outstanding citation process, through a peer-to-peer network where your knowledge becomes part of a dialogue with other authors.
  Compose content in a beautiful editor reusing and linking other authors' knowledge through an easy citation process. Connect to the authors you admire in a peer-to-peer network with a distributed data layer. A better copyright system that maintains your attribution and royalties across the network. Start publishing and sharing your articles with your own server in the web.

- **The Right Copyright System**

  Current systems based on advertisement are not incentivise on the the value of content itself but in the incentise of a third-party normaly the advertiser. This brings interfances on the attention with doom scroll feeds, clickbait, **fake news**, etc instead of better conversations.

  Experts do not have a medium in which their knowledge is well attributed. We can arguably say that the best place to share your ideas is the web. there's no other medium that can reach a bigger or wider audience no matter where they live or who they are.

  While the web is the medium we as a society adopted to connect and reach others, we also adopted patterns and practices that do not guarantees we respect Copyright the way it should be. for example, Copy-paste is one clear example of practices we use in order to create and reuse content. by copying and pasting content there's no technical way of keeping the connection to the origin of that content, therefore authors rely on the good intentions of people to manually create this connection.

  —> add reference to creative commons.

  The fact that people does this is not intentional, we tend to make choices depending on the amount of cognitive energy we need to use, we default to convenience over doing the right thing. _[So if we’re aiming to change behavior — whether it’s our own behavior or the behavior of other people — we don’t need to convince them that something is The Right Thing To Do. Instead, **we just need to make it easier to do the thing we want done than to do anything else.**](https://www.notion.so/Mintter-Design-Document-bed174849106466cbec2a12dabddd701)_

  The right citing system and direct payments between reader and creator will bring a fair compensation for knowledge. Therefore, Experts will see the value of sharing more and as a result our collective intelligence will evolve in ways we have not seen before.

  —> the system aims for public uncensorshed publishing, thus privacy is not in the core of the tool. We cover this later in the document.

- **Example: Usenet, Xanadu**

  The uncensored and efficient distribution of messages through a distributed network made Usenet (yet) the most successful tool for conversation among experts. Untrusted experts.

  Most p2p systems have failed. We believe that if we focus on a very defined use case, and to a very specific data structure, we can be successful. As BitTorrent has done with big media files and Bitcoin with money transactions.
