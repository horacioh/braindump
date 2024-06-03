# ProseMirror

- tags: #richtext-editor #prosemirror

## Tutorials

- (guide for writing ProseMirror plugins)[https://emergence-engineering.com/blog/prosemirror-plugin-system]. got it from (here)[https://discuss.prosemirror.net/t/guide-for-writing-prosemirror-plugins/5939]
- 

## libraries

### Transactions
- Prosemirror flat list plugins: https://discuss.prosemirror.net/t/prosemirror-flat-list-alpha/5191
  - https://github.com/ocavue/prosemirror-flat-list
  - https://github.com/ocavue/prosemirror-flat-list/blob/af74ba83e32a8ad1b6d40e346054b078fc02d539/packages/remirror-playground/src/editor.tsx

## Forums/posts

### Plugins

- extends the behavior of the editor. they can be very simple or super complex.
- plugins are registered when creating a state

### Commands

- operations that can be hooked to plugins and create transactions.
- `prosemirror-commands` have a set of basic editing commands.
- the `keymap` also helps to bound interactions to anything in the editor

### Content

- a state's document lives under the `doc` property
- if you define an initial document, then the `schema` property is optional

## Documents

### Structure

- the structure is like the DOM tree, but differs in how inline content info is stored
- This also means each document has one valid representationc
- Node objects come with a number of properties that reflect the role they play in the document:
  - isBlock and isInline tell you whether a given node is a block or inline node.
  - inlineContent is true for nodes that expect inline nodes as content.
  - isTextblock is true for block nodes with inline content.
  - isLeaf tells you that a node doesn't allow any content.
 
### Identity & persistence

- every time you update a document, you get a new document value. That document value will share all sub-nodes that didn't change with the original document value, making it relatively cheap to create.

### Data structures

- Each node is represented by an instance of the Node class
- The content of a node is stored in an instance of Fragment, which holds a sequence of nodes.
- nodes can hold attributes (like images can have alt and url)
- inline elements have marks, this are the attributes they can hold
- theres no limit on how you want to set your schema. you can have a document that only holds inline elements or a document that ojly can have textblocks or just block elements. you decide.
- you can create nodes using the schema object



## References

- https://prosemirror.net/docs/guide/#intro
- [[prosemirror-reference-manual]]
- [Offline, Peer\-to\-Peer, Collaborative Editing using Yjs \- Show \- discuss\.ProseMirror](https://discuss.prosemirror.net/t/offline-peer-to-peer-collaborative-editing-using-yjs/2488)
