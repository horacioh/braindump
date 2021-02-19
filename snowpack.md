# Snowpack

- [website](https://www.snowpack.dev/)

- `yarn add --dev snowpack`
- `snowpack dev`
  - server project locally
  - it does not build anything in development, sends plain js files to the browser
- `snowpack build`
  - build project to the `/build` folder
  - you can [customize](https://www.snowpack.dev/reference/configuration) the build
  - run the build command to generate a static production build of your site
  - you don't have to bundle your code, but you can do it if you need it.
  - snowpack builds the app before sends it to the desired bundler.
  - checkout the [bundling guides](https://www.snowpack.dev/guides/optimize-and-bundle)
  - converts each file into a separate module.
  - you can use multiple bundlers with its different strategies
- `snowpack --help`
  - help and commands
- comparison with [[esbuild]]??
- comparison with [[vitejs]]
  - tide to rollup for bundling
  - enable a [Universal plugin API](https://vitejs.dev/guide/api-plugin.html) that works for both envs (dev & build)
  - Faster Dependency Pre-Bundling
    - uses esbuild for deps pre-bundling.
  - monorepo support
  - css pre-processor support
  - first class vue support
