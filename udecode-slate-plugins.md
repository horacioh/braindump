# slate-plugins

- [website](https://slate-plugins.udecode.io/)

## Getting Started [link](https://slate-plugins.udecode.io/docs/installation)

1. **install the library + it's dependencies:**

   ```bash
   npm install @udecode/slate-plugins
   npm install slate slate-react slate-history slate-hyperscript react react-dom
   # or
   yarn add @udecode/slate-plugins
   yarn add slate slate-react slate-history slate-hyperscript react react-dom
   ```

   (you can also install individual plugins separate (checkout the website for all the plugin names)

2. **Default editor**

   - [link](https://codesandbox.io/s/slate-plugins-01-simple-editor-9trvk)
   - `editableProps` expect multiple attributes to be passed to the whole editor
   - `initialValue` is self-explanatory right?
   - `onChange` is used to listen to editor changes, so we can save the value somewhere
   - you can pass any component as children of `SlatePlugins`, it will be rendered before the editable component (editor data)

3. **Basic Plugins**

   - [link](https://codesandbox.io/s/slate-plugins-01-basic-plugins-h9303)
   - create the `plugins`, `components` and `options` to pass it to `SlatePlugins` (default provided by the library)
   - all the props are optional (does not make any sense to not pass anything, but there's that 🤷🏼‍♂️)

4. **Custom Plugin**

   - [link](https://codesandbox.io/s/slate-plugins-03-custom-plugin-4503h)
   - you can create your own custom plugin and set all the attributes needed.
   - in [the official docs](https://slate-plugins.udecode.io/docs/creating-plugins) you have a couple of plugin examples depending on what you need.
