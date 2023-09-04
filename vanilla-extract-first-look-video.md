# Vanilla Extract First Look video

- [video](https://www.youtube.com/watch?v=NY5uVr0tWEI)

> I chat with colleagues Mark Dalgleish (https://twitter.com/markdalgleish) and Matt Jones (https://twitter.com/mattcompiles) about their latest OSS library Vanilla Extract. It's the latest stop on their 6 year journey building themable CSS libraries and design systems starting with CSS Modules, than Treat, and finally Vanilla Extract, a zero-runtime Stylesheets-in-Typescript library.

- the recommended way to import styles is by using `* as X`, wonder how they can do tree-shaking or if they care about it?
- you can use your static styles as the source of truth for your TS types in your JS code (🤯)
- when you create a theme, it does create css variables of any token you define, at any level
- not production-safe yet as of October 2021
- interesting the `createPattern` API