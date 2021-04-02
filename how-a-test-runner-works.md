# How a test runner works

- [video](https://www.youtube.com/watch?v=3oBrDZi43R8)

- test: a process that help us make sure something works as expected (assert)
- a simple test runner
  - we need:
    - test function
    - assertion lib
    - run the function
- jest: a modern test runner
- some features
  - it does not need too much config to start using it
  - frist run takes time since is collecting data on the current tests
  - subsequent runs changes the order (from fails to succeded and from slower to faster)
  - you can run tests that depends on files changed (uses git to fetch and reverse lookup deps)
  - it's a monorepo
- what happens when you run `jest packages`
  - it all starts to `jest-cli`
  - the first argument is a regex pattern to look for files
  - we pass the data to `jest-haste-map`: it's a static analyzer that reads your project
    - extract metadata
    - save a serialized cache
    - check the cache on other runs
  - passes info to `jest-worker` calls all files in parallel
  - **...and a lot of other stuff that I dunno if its important to note about!**
- making jest modular makes it flexible
- fish shell design manifesto
- it's open source!!

## Other jest related videos:

- [How to make Jest run anything - Kent C. Dodds](https://www.youtube.com/watch?v=U_IYuAXtJZ0)
-
