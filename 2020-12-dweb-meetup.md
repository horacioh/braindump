# DWeb meetup

- [[2020-12-04]]

- 12 lightning talks
- Mark nadal is here! 😅
- descentralise payments
- http://brewster.kahle.org/2020/11/16/dpayments-on-the-dweb-now-possible-math-breakthrough/
- http://brewster.kahle.org/2015/08/11/locking-the-web-open-a-call-for-a-distributed-web-2/

## IPFS Usage: Dietrick Ayala

- 30x increase sinde 2019 (100k+ nodes)
- IPFS HTTP Gateway
  - ~2M unique users/week
  - 100+ TB data/week
- Use Cases
  - Descentralized naming
  - COVID news
  - Identity
  - DEFI
- IPFS Users

## Yisi Liu: A Mesh Network Workshop in China

- DWeb Shangai organizer
- (screenshot of workshop)
- Project west lake
- hosted on campus
- lora-based mesh network around the west lake
  - disaster.radio
- ~100 nodes
- applications
  - a website (afro.net)
  - OpenWRT based mesh network (screenshot)
- people likes the DWeb mesh technology
- Tech and non-tech students attend to the workshop

## Karissa Mclelvey: Secentralization, off the shelf

- worked on DAT
- DWeb apps are hard to build
- Motivation: serve the next 10k devs and designers building Dapps
- Resources
  - Design patterns
  - mental models of decentralization and networking
  - case studies
  - Glossary of decentralization terms
- Pattern library (screenshot (2))
  - Agency & Identity
  - Sharing & Permissions
  - Status & Sync
  - Moderation & Curation
- Events (screenshot)
- repo: simplysecure/dots-patterns
- decentpatterns.xyz/contribute
- @simplysecureorg
- @okdistribute
- @bumblblu
- Concept of Pub
  - from SSB
  - Discovery Mechanism
  - Physical locations where data is
  - legal issues when your content is replicated in multiple places

## Mark Nadal: Learning at Scale GUN last year

- all about CRDTs
- 30M users/month
- 55k users/second
- 200M downloads
- 20x JSON.parse
- own JSON parsing
- NodeJS relay peers
- live video streaming backed by Mozilla
- writes are harder
- in order to know something happened, you need to communicate it, if you dont, you assume failure
- same-object multiplayer edits
- Games
- Studying uncertanty
  - predict correctness
    - FIGHT FAKE NEWS
    - unpleasent things in the DWeb
- easy to implement other CRDTs on top of GUN

## Adam Souzis: Open cloud Services (One Commons)

- cloud services that are open source
- cloudfunding (screenshot)
- Open Cloud through Peering
- unfurl: Gitops for Everyone
- onecommons.org/join
- we want to become the platform for OSS cloud services
- another project: handshaker??

## Paul frazee: Choosing Not to ship

> Beaker 1.0 was lauched!! 🎉

- they did not ship social features
  - twitter clone
  - comment section on _any_ page
  - RSS reader
  - Notifications
- trying to do both browser and social network and it was not either of them
- making the whole experience more cohesive takes freedom to the user to choose and do whatever they want
- focus on what Beaker really is: **P2P websites**
- **choose a title and then change to the editor** #mintter
- https://twitter.com/BeakerBrowser/status/1334213292978548739
- [Beaker Browser 1\.0](https://beakerbrowser.com/2020/12/02/beaker-1-0.html)

> Don't ship code if you don't love it!

- Just use it!

## Maria Bustillos: WRITER!

- thebrick.house Brick House: a new cooperative of free and independent press
- Civil publishng platform
- commenting system!
- micro payments!!
- blockchain to secure speech
- Marshall mcluhan reference about ideas
- https://www.coindesk.com/maria-bustillos-on-tokenizing-journalism-the-death-of-civil-and-rise-of-brick-house
- Ownership
  - make permanent copies
  - publications that can be owned forever
  - create a sustainable reality for publications and writers
  - thebrickhousecooperative@gmail.com
  - maria@popula.com
  - @mariabustillos
- VERY INTERESTING FOR [[mintter]]
- [Maria Bustillos on Tokenizing Journalism, the Death of Civil and Rise of Brick House \- CoinDesk](https://www.coindesk.com/maria-bustillos-on-tokenizing-journalism-the-death-of-civil-and-rise-of-brick-house)

## Agregore!

- P2P and local-first software
- mix protocols
- extendable and fun to work with
- goals (screenshot)
- [code](https://github.com/AgregoreWeb/agregore-browser)
- Electron + P2P + Extensions = 🧡
- supports
  - ipfs
  - hyper
  - gemini
- uses `fetch` underneath (agregore://)
- Next
  - earthstar://
  - bt://
  - eth://

```
From Dietrich Ayala to Everyone: (3:22 AM)
new extension apis is a rough road - hard lesson we learned with libdweb.good choice to not do that :)
```

## Fluence: Open Application Platform: Tom Trowbridge

- build aps on top of other apps and hsare info + users
- where do we stand? (screenshot)
- https://fluence.network
- https://github.com/fluencelabs/
- Global dev community is stronger
- Cathedral vs Bazaar model
- what it is (screenshot)
  - Bazaar model on building apps
  - Distributed compute protocol
  - Aquamarine Programming language
  - Blockchain economic layer
- only scale when economics are involved
- composable apps (screenshot)
- use features from other apps to your apps
- users are shared
- all OSS code

## Travis Vachon: Self Determination for our digital bodies with solid

- [travis \(Travis Vachon\)](https://github.com/travis)
- coop data union
- itme.company
- quote (screenshot)
- (screenshot)
- https://github.com/travis
- https://itme.company/
- worlds first personal online datastore hosting
- collective bargaining with data consumers
- accountable expect advice for data monetization
- hello@itme.email
- https://inrupt.com/
- every resource has an ACL file that determines who can access to it
- SOLID (tim bernes lee stuff)
- SOLID data browser

## Brandon Wallace: PLAN Systems

- Privacy, Logistics, Accessibility, Network
- veteran Intel analyst
- https://www.plan-systems.org/
- for communities, teams and orgs
- Drew O'Meara
- [PLAN Systems](https://github.com/plan-systems)

## Mike Toomim + Seph Gentle (Braid)

- Seph worked on Wave!!
- [I was wrong\. CRDTs are the future](https://josephg.com/blog/crdts-are-the-future/)
- (diagram screenshot)
- [invisible\-college/braidjs: Synchronization for the Web](https://github.com/invisible-college/braidjs)
- [LATEST REPO: braid\-work/braidjs: Implementation of Braid protocol in Javascript](https://github.com/braid-work/braidjs)
- is possible to work with the normal web too!
- [P2P CRDT demo! 🤯](https://bloop.monster/braidvis)
- [homepage](https://braid.news/)

## Closing notes

- celebrating the Public Domain Day 2021 [[2020-12-17]]

## Meetup reference shared

- [Fluence Project](https://github.com/fluencelabs/)
- [Solid](https://solidproject.org/)
- [Inrupt](https://inrupt.com/)
- [SPIFFE – Secure Production Identity Framework for Everyone](https://spiffe.io/)
- [internetarchive/dweb\-transports](https://github.com/internetarchive/dweb-transports)
- [Publishers Are Taking the Internet to Court \| The Nation](https://www.thenation.com/article/society/publishers-are-taking-the-internet-to-court/)
- [Unfurl \| Free Link Preview](https://www.unfurl.io/)
- [RSocket](https://rsocket.io/)
- [Locking the Web Open: A Call for a Decentralized Web \| Brewster Kahle's Blog](http://brewster.kahle.org/2015/08/11/locking-the-web-open-a-call-for-a-distributed-web-2/)
- [DPayments on the DWeb now possible? Math breakthrough \| Brewster Kahle's Blog](http://brewster.kahle.org/2020/11/16/dpayments-on-the-dweb-now-possible-math-breakthrough/)
- [DIF \- Secure Data Storage Working Group](https://identity.foundation/working-groups/secure-data-storage.html)
- [Amy S\. Chen. Accessibility Expert we can ask for suggestions on a11y](https://www.linkedin.com/in/amychenx/)

[//begin]: # "Autogenerated link references for markdown compatibility"
[2020-12-04]: journal/2020-12-04 "2020-12-04"
[mintter]: mintter "Mintter"
[//end]: # "Autogenerated link references"s"s"s"s"s"s"s"

```

```
