# unified handbook

https://github.com/unifiedjs/handbook

- [glossary](https://github.com/unifiedjs/handbook#glossary)

## How does it work?

- unified uses _unist_, (Universal Syntax Tree) which is an AST specification so that utilities can be shared amongst all different formats
- supported syntaxes: remarkjs, HTML, retext, MDX.

## Abstract syntax trees

- integral structure on unified
- most plugins operate solely on ASTs.
- almost all plugins receive ast as input, transforms it and return another ast.

## Constructing an AST

- Parsers: takes a string and tokenizes depend on its syntax. it return nodes
- unified takes an input string and with a tokenizer and a lever, transforms it to a structured ast.

```
[INPUT] => [TOKENIZER/LEXER] => [PARSER] => [AST]
```

- Compiler: turns AST into output (usually string)
- a compiler does the opposite, turns an ast into an string output.

```
[AST] => [COMPILER] => [OUTPUT]
```

## unist

- all ASTs in unified conform to the unist spec!!
- this is the way unified makes it simpler to developer use their tools, and ensure there’s no extra overhead when working with multiple plugins/utilities

## Visitors

- “visiting” a node is a common task when working with ASTs. You “traverse the tree” by visiting the nodes you are interested in
- unified comes with visitor utilities so you don’t have to reinvent the wheel
- the cool thing about utilities like `unist-útil-visits is that it can work on subtrees, meaning that you can pass small chunks of the red to traverse into

## remark

- plugin-based markdown **processor**.
- highly configurable.

You can use the remark library directly in your scripts:

```
remark().processSync('# Hello, world!')
```

Though, it's really a shortcut for:

```
unified()
  .use(remarkParse)
  .use(remarkStringify)
  .processSync('# Hello, world!')
```

- you can use also [remark-cli](https://github.com/unifiedjs/handbook#remark-cli) to automate tasks

## rehype

- the same as remark, but for HTML

## MDX

- uses remark and rehype internally

### The flow of MDX

1. Parse: MDX text => MDAST
1. Transpile: MDAST => MDXAST (remark-mdx)
1. Transform: remark plugins applied to AST
1. Transpile: MDXAST => MDXHAST
1. Transform: rehype plugins applied to AST
1. Generate: MDXHAST => JSX text

The final result is JSX that can be used in React/Preact/Vue/etc.

MDX allows you to hook into this flow at step 3 and 5, where you can use remark and rehype plugins (respectively) to benefit from their ecosystems.

## Tree traversal

Working with a tree to search into it.

- Breadth-first traversal: traverse all siblings by level (all level-1 children, then all level-2 children...)
- Depth-first traversal: traverse by branches. this is the most common one

Depth-first traversal performs 3 steps:

1. N: visit ~N~ itself
1. L: traverse head
1. R: traverse tail

This steps can be done in any order.
