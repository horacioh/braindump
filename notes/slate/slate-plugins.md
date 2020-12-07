# Stale Plugins Notes

- the new version (0.60+) has a common transforms methods that are super neat!
- each element has a `defaults` object, where all the default config is set. also it provides a function where you can override those defaults (for now only the type I guess) on each component plugin (search for `setDefaults`)
- use `editor.selection?.focus` to check the end part of the selection

## Instructions to implement a plugin

- TODO

## Helper methods

- `Editor.parent(editor, path)`: returns [node, path] of the parent node. this is how in the list `onKeyDown` function gets the list node to perform operations on it (moveUp, moveDown)
- `isBlockAboveEmpty`: check if block above is empty. is uses `getBlockAbove` and `isAncestorEmpty`
- `getBlockAbove`: `Editor.above` wrapper. it uses `Editor.isBlock` internally
- `isAncestorEmpty`: Check it `Node.string` is empty and if there's no inline children (using `Element.isInline`)
- `isSelectionAtBlockStart`: uses `getBlockAbove` and `isStart` to check it
- `isStart`: compare a point with a path using `Editor.isStart`

## Lists

### onKeyDownList

- its used only to handle the tab key
- store `moved` as variable to check ??
- check it the key pressed is the `Tab`
- if selection is inside a list item (using `isSelectionInListItem`)
- check if the shift key was pressed too. if so, it calls `moveListItemUp`
- check if the list item is not the first one, and then call `moveListItemDown`
- it does not let the first item to move dowm, because... what's the point of having a nested list without parent??

### isSelectionInListItem

- it traverse up all the node parents and return `listNode`, `listPath`, `listItemNode` & `listItemPath`
- it can return undefined if the selection is not inside a listItem

### moveListItemUp

- return if parent is a listItem
- set the nextListItemPath
- move ListItemPath to the newListItemPath
- Move the siblings below to a new list
  - this will iterate over all the list item siblings below the current one
  - and move then to the new listPath

### withList

- it overrides `insertBreak` and `deleteBackward`
- both use `moveListItemUp` to transform whatever it needs to...

#### insertBreak

- creates a new item in the list if the current selection is in a non-empty list item
- if the current selection is in an empty list item

  - it will unwrap it
  - it will create a new list below and add all the list item siblings if any (actually, it creates the list anyway, but check later if there was no list items below)
  - very interesting way of the `onKeyDownResetBlockType` inside of it :) (it handles all the list item deletion)

#### deleteBackward

-
