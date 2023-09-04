# Data Structures and Algorithms in JavaScript

- [source](https://egghead.io/courses/data-structures-and-algorithms-in-javascript)
- #egghead #course #javascript #resource

## Lessons

### Queue Data Structure in JavaScript

- [source](https://egghead.io/lessons/javascript-queue-data-structure-in-javascript)
- A queue is a collection of items that obeys the principle of _first-in/first-out_
- a queue has:
  - add or enqueue method
  - remove or dequeue method
  - peek method: check what's the next item in the queue
  - length property
  - isEmpty method
- all the operations to our queue should be following the same order
- the length property is a `get` method, because if we set the length to our closed array length, this will always return the value of the length when we create the queue (which is `0`)

### Priority Queue JavaScript Data Structure

- [source](https://egghead.io/lessons/javascript-priority-queue-javascript-data-structure)
- to prioritize a queue, you need to create two queues instead of one.
- the API is the same, but the implementation change a little bit
- for the `enqueue` method, we need a new parameter to add to the especific queue (high priority or normal)
- for the `dequeue` we need to first dequeue from the highPriority queue by checking if its empty
- `peek` does the same check as `dequeue`
- `length` is the sum of both queues
- `isEmpty` should be a check to both queues

### Stack Data Structure in JavaScript

- [source](https://egghead.io/lessons/javascript-stack-data-structure-in-javascript)
- A stack is a collection of items that obeys the principle of last in, first out (LIFO).
- good to handle nested function calls
- methods:
  - push
  - pop
  - peek
  - length
  - isEmpty
- we need to also add/remove items on the same order, maintaining order is key.

### Linked List Data Structure in JavaScript

- [source](https://egghead.io/lessons/javascript-linked-list-data-structure-in-javascript)
- A linked list is a collection of items where each item has a connection to the next item in the list, hence, the word "linked" in the name.
- when adding a new node, we need to use the `createNode` function
- for every operation to the linked list, we need to update other properties like `head`, `tail`, and `length` manually! (check the video and the community notes. both are ✨)
-

### JavaScript Graph Data Structure

- [source](https://egghead.io/lessons/javascript-javascript-graph-data-structure)
- A graph is a collection made up of **nodes**, also known as vertices, that may or may not be connected to other nodes. These connections are called **edges**.
- Graphs does not have hierarchy
- directed graphs => points to one particular direction
- our graph will have:
  - directed: boolean (determines the direction of our graph)
  - nodes: array
  - edges: array
  - addNode method: creates a node with the passed key
  - getNode method: get a node by finding in the nodes array by key
  - addEdge method:
  - print method
- the print method will show all the nodes and edges of our graph
