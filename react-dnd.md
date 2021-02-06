# React Dnd

- [source](https://react-dnd.github.io/react-dnd/docs/overview)
- keywords: #react #draganddrop #library #javascript
- React DnD uses Redux internally

## Overview

### Backends

- uses the [HTML5 drag and drop API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop)
- this API does not support touch events
- is implemented as a plugin you add to React DnD.
- it does not have any dependency on React, and you can change it to other backend APIs

### Items and Types

- is uses data, not DOM nodes
- "an _item_ with a certain _type_ is being dragged"
- Describing the dragged data as a plain object helps you keep the components decoupled and unaware of each other.
- **Types** are a string that iuniquely identifies what type of element you are dragging.
- You're probably going to have an enumeration of the type constants in your application, similar to how you may have an enumeration of the Redux action types.

### Monitors

- The monitors let you update the props of your components in response to the drag and drop state changes.
- For each component that needs to track the drag and drop state, you can define a collecting function that retrieves the relevant bits of it from the monitors. React DnD then takes care of timely calling your collecting function and merging its return value into your components' props.

### Connectors

- The connectors let you assign one of the predefined roles (a drag source, a drag preview, or a drop target) to the DOM nodes in your render function
- this is the same thing as adding a ref to your DOM node (both hooks return a ref for you to use)

### Drag Sources and Drop Targets

- this is a very old explanation of this. bc it does not talk about hooks but HOCs and wrappers that are not used now.

## Top-Level API

### useDrag

```javascript
import { useDrag } from "react-dnd"

function DraggableComponent(props) {
  const [collectedProps, drag] = useDrag({
    item: { id, type },
  })
  return <div ref={drag}>...</div>
}
```

- returns an array with:
  - item 0: collectedProps
  - item 1: ref to attach to the dragged element parent
  - item 2: ref to attach to the dragged element parent if the drag handle must be different

#### Parameters (object members)

- **item**
  - Required
  - a description of the data being dragged
  - try to keep this object as simple as possible
  - example: `{type, id}`
  - `item.type` **must be set**
- **previewOptions**
  - Optional
  - self-describing. this is for preview options (preview is the element the user is actually dragging, a clone of the actual element)
- **options**
  - Optional
  - helps improve performance if some of the props to your component are not scalar types
  - use it unless there's a performance problem
- **begin(monitor)**
  - Optional
  - function called when the grad begins
  - if you return something, it will override the `item` property of the spec
- **end(item, monitor)**
  - Optional
  - when the drag stops, `end` is called
  - for every begin call, there's an `end` call
- **canDrag(monitor)**
  - Optional
  - used to specify if drag is currently allowed
- **isDragging(monitor)**
  - Optional
  - By default, only the drag source that initiated the drag operation is considered to be dragging
- **collect(monitor, props)**
  - Optional
  - function that helps to `collect` information (props) about the element being dragged

### useDrop

```javascript
import { useDrop } from "react-dnd"

function myDropTarget(props) {
  const [collectedProps, drop] = useDrop({
    accept,
  })

  return <div ref={drop}>Drop Target</div>
}
```

- to be used inside the element's drop target
- returns an array with two items:
  - item 0: collectedProps
  - item 1: ref to be attached to the dropped target DOM element

#### Parameters (object members)

- **accept**
  - Required
  - string, ES6 Symbol, array or function that returns one of them
  - this value is the drag source type. Types let you **specify which drag sources and drop targets are compatible**
- **options**
  - Optional
  - helps improve performance if some of the props to your component are not scalar types
  - use it unless there's a performance problem
- **drop(item, monitor)**
  - Optional
  - called when a compatible object is dropped
  - you can return undefined or a plain object
  - if the return is an object, it will be the _drop_ result and will be available to the drag source in its `endDrag` method as `monitor.getDropResults()`
  - **If you have nested drop targets, you can test whether a nested target has already handled `drop` by checking `monitor.didDrop()` and `monitor.getDropResult()`**
  - here and inside the `endDrag` methods are good places to perform your app's actions
  - This method will not be called if `canDrop()` is defined and returns `false`.
- **hover(item, monitor)**
  - Optional
  - called when the item is hovered the drop target
  - This method will be called if `canDrop()` is defined and returns `false`.
- **canDrop(item, monitor)**
  - Optional
  - you can implement this method if you want to avoid dropping depending on some props or `monitor.getItem()`.
  - Don't call `monitor.canDrop()` inside this method
- **collect(monitor, props)**
  - Optional
  - function that helps to `collect` information (props) about the element being dragged
