# Migrating Mintter from Cypress to Storybook

- in Mintter we are using Vite & pnpm. so we are forced to use Storybook 7.
- install
  - `pnpx storybook@next init`
  - got this warning from pnpm:
    ```bash
 WARN  Issues with peer dependencies found                                                                                                                        
../../../../../Library/pnpm/store/v3/tmp/dlx-31094                                                                                                                
└─┬ storybook                                                                                                                                                     
  └─┬ @storybook/cli                                                                                                                                              
    ├─┬ @storybook/core-common
    │ ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
    │ └── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
    └─┬ @storybook/core-server
      ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
      ├── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
      └─┬ @storybook/core-client
        ├─┬ @storybook/addons
        │ ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │ ├── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │ └─┬ @storybook/api
        │   ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │   ├── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │   ├─┬ @storybook/router
        │   │ ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │   │ └── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │   └─┬ @storybook/theming
        │     ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │     ├── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
        │     └─┬ @emotion/use-insertion-effect-with-fallbacks
        │       └── ✕ missing peer react@>=16.8.0
        └─┬ @storybook/client-api
          ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
          ├── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
          └─┬ @storybook/store
            ├── ✕ missing peer react@"^16.8.0 || ^17.0.0 || ^18.0.0"
            └── ✕ missing peer react-dom@"^16.8.0 || ^17.0.0 || ^18.0.0"
Peer dependencies that should be installed:
  react-dom@">=16.8.0 <17.0.0 || >=17.0.0 <18.0.0 || >=18.0.0 <19.0.0"  react@">=16.8.0 <17.0.0 || >=17.0.0 <18.0.0 || >=18.0.0 <19.0.0" 

 WARN  Issues with peer dependencies found
frontend/app
└─┬ @storybook/addon-essentials
  ├── ✕ missing peer @babel/core@^7.9.6
  └─┬ @storybook/addon-docs
    └─┬ @babel/plugin-transform-react-jsx
      ├── ✕ missing peer @babel/core@^7.0.0-0
      └─┬ @babel/plugin-syntax-jsx
        └── ✕ missing peer @babel/core@^7.0.0-0
Peer dependencies that should be installed:
  @babel/core@">=7.9.6 <8.0.0"  
. ✓
🔎 checking possible migrations..
🔎 found a 'mdx1to2' migration:

╭───────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                           │
│   We've found 1 '.stories.mdx' files in your project.                                                     │
│                                                                                                           │
│   Storybook has upgraded to MDX2 (https://mdxjs.com/blog/v2/), which contains breaking changes from V1.   │
│                                                                                                           │
│   We can try to automatically upgrade your MDX files to MDX2 format using some common patterns.           │
│                                                                                                           │
│   For a full guide for how to manually upgrade your files, see the MDX2 migration guide:                  │
│                                                                                                           │
│   https://mdxjs.com/migrating/v2/#update-mdx-files                                                        │
│                                                                                                           │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────╯
✔ Do you want to run the 'mdx1to2' migration on your project? … no
Skipping the mdx1to2 migration.

If you change your mind, run 'npx storybook@next automigrate'

✅ migration check successfully ran


To run your Storybook, type:

   pnpm run storybook 

For more information visit: https://storybook.js.org
```
- This are the packages I needed to install manually:
  - `@mdx-js/react`
  - `@storybook/addon-docs`
```

- I have a monorepo setup, and sometimes if I run `pnpm install` inside the package it does fail when building, so make sure to install deps at the repo root.
- There are a couple of things I can do the same as in Cypress:
  - in Cypress, I set the queryCache before I render the app, this is something I can do on a particular decorator on each storybook:
    - create a client
    - set all the data
    - render the decorator
  - Need to check how to fake selections in playwright

## Resources

- [UI Testing Handbook](https://storybook.js.org/tutorials/ui-testing-handbook/)