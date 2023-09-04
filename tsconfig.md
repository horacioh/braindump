# Understanding TSConfig files

## TSConfig Properties

- [`files`](https://www.typescriptlang.org/tsconfig#files)
    - use it when you have a small amount of files to add to the project.
    - not really used in normal frontend apps as I can see?
- [`extends`](https://www.typescriptlang.org/tsconfig#extends)
    - contains the path of any other tsconfig file you want to extend from
    - it wil load that one first, and then override it with any other config you have in the current config
- [`exclude`](https://www.typescriptlang.org/tsconfig#exclude)
    - it changes what the `include` settings can "find"
    - it does not prevent files to by explicitly excluded. if you are importing it it will be included regardless of neing added to this array.
- [`references`](https://www.typescriptlang.org/tsconfig#references)
    - helps you structure your project into smaller pieces

## references
- TSConfig reference: https://www.typescriptlang.org/tsconfig
- TSConfig recommended files
  https://github.com/tsconfig/bases/
  https://twitter.com/hhg2288/status/1692484539480781279?s=20
- 