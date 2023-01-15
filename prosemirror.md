# ProseMirror

- tags: #richtext-editor #prosemirror

- rich text editing for the web
- prioritize modularity and customizability over simplicity

## Essensial modules

- `prosemirror-model`: defines the document model
- `prosemirror-state`: provides a data structure that defines all the editor's state
- `prosemirror-view`: implements the UI
- `prosemirror-transform`: all needed to modify documents

## Transactions

- every interaction on the editor creates a _transaction_. this transactions are the ones that needs to be applied to create a **new state**, which then updates the view.

## Plugins

- extends the behavior of the editor. they can be very simple or super complex.
- plugins are registered when creating a state

## Commands

- operations that can be hooked to plugins and create transactions.
- `prosemirror-commands` have a set of basic editing commands.
- the `keymap` also helps to bound interactions to anything in the editor

## Content

- a state's document lives under the `doc` property
- if you define an initial document, then the `schema` property is optional

## Documents

## References

- https://prosemirror.net/docs/guide/#intro
- [[prosemirror-reference-manual]]
