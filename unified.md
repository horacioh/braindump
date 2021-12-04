# Unified

- [[unified-handbook]]
- [[unified-intro]]
- [[unified-parsers]]
- [[unified-plugins]]

### Resources and links

- [Unified Official description](https://github.com/unifiedjs/unified/blob/main/readme.md#description)
- [Github Flavored Markdown Spec](https://github.github.com/gfm)
- [Unified Handbook](./handbook.md)

- [fast-author: electron app to create/edit markdown files directly to the filesystem](https://dev.to/exampro/i-had-to-build-my-own-markdown-editor-because-no-tool-was-fast-enough-for-me-3b3o) [blog post](https://dev.to/exampro/i-had-to-build-my-own-markdown-editor-because-no-tool-was-fast-enough-for-me-3b3o) - [code](https://github.com/ExamProCo/fast-author#How-to-run-the-application-in-development)
- [Intro to AST](https://egghead.io/lessons/javascript-introduction-to-abstract-syntax-trees)
- [Transform Content With Abstract Syntax Trees — Learn With Jason](https://www.youtube.com/watch?v=acb2osL1VPE)

  links from video:

  - https://unifiedjs.com/
  - https://github.com/remarkjs/remark
  - https://github.com/rehypejs/rehype
  - https://github.com/syntax-tree/unist-util-map
  - [Netlify Build Plugins Beta](https://www.netlify.com/build/plugins...)
  - https://github.com/syntax-tree/unist
  - https://github.com/mdx-js/mdx/blob/master/packages/mdx/index.js#L65-L74
  - https://github.com/leonardodino/gatsby-remark-figure-caption/blob/master/src/index.js
  - https://dev.to/mlennox/abstract-syntax-trees-for-fun-and-profit-4mej

* https://twitter.com/hhg2288/status/1254775731285983232
* https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/

- [Sharing my unified journey in building unified-doc](https://spectrum.chat/unified/general/sharing-my-unified-journey-in-building-unified-doc~77f7e2d8-6496-4764-b040-a4250199ce69)
- [rehype-react](https://github.com/rehypejs/rehype-react) - [example](https://codesandbox.io/s/rehype-react-example-rc7bg)
- [egghead lessons](https://egghead.io/lessons/javascript-remove-markdown-nodes-from-a-document-with-unist-util-remove)
- [How to build a compiler](https://www.youtube.com/watch?v=ZYFOWesCm_0)

### Plugins

- [remark-bookmarks](https://github.com/remarkjs/remark-bookmarks): plugin to manage links on Markdown files

## Sketch notes

- all metadata of a processor is stores in a vfile
- processors have two modes:
  - bridge mode
    - transform a AST from one format (_origin_) to another format (_destination_)
    - another processor runs on the destination tree
    - the original processor continues transformind the original tree
    - example: `remark-retext`
  - mutate mode
    - transform a AST from one format (_origin_) to another format (_destination_)
    - the original processor continues transforming the destination tree
    - example: `remark-rehype`
- there's no default export in unified
- all the options to pass processors to the `use()` function to a original processor:

  ```js
  import { unified } from "unified"

  unified()
    // Plugin with options:
    .use(pluginA, { x: true, y: true })
    // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
    .use(pluginA, { y: false, z: true })
    // Plugins:
    .use([pluginB, pluginC])
    // Two plugins, the second with options:
    .use([pluginD, [pluginE, {}]])
    // Preset with plugins and settings:
    .use({ plugins: [pluginF, [pluginG, {}]], settings: { position: false } })
    // Settings only:
    .use({ settings: { position: false } })
  ```

- `processor.parse()` does only parse text to syntax-tree. it does not do any other operation in the processor process.
- `processor.run()` does only transform a syntax-tree to another syntax-tree. it does not parse neither compile
- `processor.stringify()` compiles a syntax-tree to text. it does not parse neither transform a syntax-tree
- `processor.data()` is used to set config data to all the processors available in the whole process.
- Processors freeze implicitly when `.parse(), .run(), .runSync(), .stringify(), .process(), or .processSync()` are called.
- plugins is a concept name of an `attacher`
- `presets` are shareable configurations, good when you want multiple processors or custom settigns to be passed to other processors in a controlled way.



```

```
