# Prosemirror Reference manual

source: https://prosemirror.net/docs/ref/

## [class EditorState](https://prosemirror.net/docs/ref/#state.Editor_State)

- this is the class of the whole editor state
- this object cannot be changed but by calling `apply`
- Q: when is useful to use `applyTransaction` over `apply`?
- Q: why `reconfigure` is useful?

## [class Transaction](https://prosemirror.net/docs/ref/#state.Transaction)

- `tr` is to create new `Transaction` instances from a current state
- `Transaction` is a subclass of [`Transform`](#class-transform)
- It can hold extra properties. for example:
	- [EditorView](class-editorview) attach a property `pointer` with the value `true` when the transaction is based on the cursor actions (mouse or touch)
	- [EditorView](class-editorview) also attach a property `uiEvent` with the possible value `paste`, `cut` or `drop` to distinguish the user's actions.
- the properties are interesting. it let you handle many things regarding what will change on this particular transaction: marks, metadata, time...

## [Selection](https://prosemirror.net/docs/ref/#state.Selection)

- there are multiple Selection types. you can have text selections, block selections or even custom selections.
- every selection type should extend from the superclass `Selection`
- you can have positions and [resolve positions](https://prosemirror.net/docs/ref/#model.ResolvedPos)

## Resolved Positions

- the way we deal with positions in Prosemirror is by index. but sometimes you want more indormation about a position. that's how we can use the class `ResolvedPos`
- you can extract information like `depth`, `marks()`, `nodeAfter`, `blockRange()`...

