# Unified

## Introduction

https://unifiedjs.com/learn/guide/introduction-to-unified/

- is a friendly interface backed by an ecosystem of plugins built for creating and manipulating content.
- takes data in different formats, and translate them into structured data[^1]
- usified is a chain of processes, with many plugins you can connect with
- no manual parsing or syntax handling

### Three part act

- **Parse:** any input needs to be parsed to a workable format (mdast, hast...)[^2]
- **Transform:** all the magic happens here. here's where all the plugins transform the input depending on the order too.
- **Stringify:** take the formatted content and stringify it to Markdown, HTML or prose.

## Using unified

- check repo for the example: https://github.com/horacioh/unified-intro
- in this example we will learn how to turn Markdown into HTML.
- for that we need a Markdown parser (`remark-parse`) and an HTML stringifier (`rehype-stringify`)
- to transform between Markdown and HTML we need `remark-rehype`
- to glue all and stream it, we are going to use `unified`.
- you have a bunch of plugins available to work with content (that's COOL)
- Note that remark plugins work on a Markdown tree, and rehype plugins work on an HTML tree. It’s important that you place your .use calls in the correct places.
- I use [the `remark-heading-id` plugin](https://github.com/imcuttle/remark-heading-id/blob/master/package.json) to enable custom heading links on the HTML result (❤️)

---

### Questions and comments

[^1]: are all transformation following the same structure? (HTML -> structure1 ; MD -> structure2 ; structure1 === structure 2 ?)
[^2]: (https://github.com/syntax-tree)
