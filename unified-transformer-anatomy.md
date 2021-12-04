# Unified transformer Anatomy

- related: [[unified]]

let's review how `remark-rehype` works:

- https://github.com/remarkjs/remark-rehype/blob/main/lib/index.js#L39
  - this function defines if you are running the processor in `bridge` or `mutate` mode
  - if is in bridge mode, it runs the passed processor (`destination`) and call the `next` function if any error
  - if is in mutate, it returns the call to `toHast`, which returns a `Node` tree
