# Rollup plugins

- a function that returns an object

```js
function myRollupPlugin() {
  return {
    // this name is used for logging and error handling
    name: "my-plugin",
  };
}
```

- plugin is a set of `hooks` that rollup will call on each plugin

## Hooks

### `resolveId(id, importer)`

- is called for each import
- it should transform any relative/alias paths into absolute paths.

### load(id)

- it's how we should load a file Id
- you can use the `this.emitFile` rollup function to **add somethign to the build**

```js
const fileId = this.emitFile({
  type: "chunk", // 'chunks tells Rollup to treat this file as an entrypoint (a JS file). if could be `asset` too, for files and non-JS files'
  id: "FILE_ID", // absolute path of the file (processed in the `resolveId` hook)
  fileName: "foo.js", // not usually used, but this overrides the output's filename
});
```
