# Nextjs Templates overview

## Environment Variables Example

[link](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)

- it shows how you have access to public env variables prefixing your variables with `NEXT_PUBLIC_`
- https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser

## Fast Refresh Demo

[link](https://github.com/vercel/next.js/tree/canary/examples/fast-refresh-demo)

- Flexing about [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh)

## Next page-transition Example

[link](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions)

- it uses [`react-transition-group`](https://github.com/reactjs/react-transition-group)
- the key is to wrap the whole app with a `PageTransition` component in the [`_app.js` file](https://github.com/vercel/next.js/blob/canary/examples/with-next-page-transitions/pages/_app.js)
- there's also [this other example](https://reacttricks.com/animating-next-page-transitions-with-framer-motion/) using framer-motion, which seems more up to date

## Example app implementing progressive server-side render

[link](https://github.com/vercel/next.js/tree/canary/examples/progressive-render)

- features
  - A custom hook called useMounted, implementing this behavior
  - An app with a component that must only be rendered in the client
  - A loading component that will be displayed before rendering the client-only component
- is creates a `useMounted` custom hook, that just runs `useEffect` with no deps

## Redirects

[link](https://github.com/vercel/next.js/tree/canary/examples/redirects)

- you can setup redirects in the `next.config.js` file

```js
module.exports = {
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',

  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about",
        permanent: false,
      },
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      {
        source: "/old-blog/:slug",
        destination: "/news/:slug",
        permanent: false,
      },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      {
        source: "/blog/:slug*",
        destination: "/news/:slug*",
        permanent: false,
      },
      // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
      {
        source: "/post/:slug*",
        destination: "/news/:slug*",
        permanent: false,
      },
    ]
  },
}
```

- [source](https://github.com/vercel/next.js/blob/canary/examples/redirects/next.config.js)
- [Official docs](https://nextjs.org/docs/api-reference/next.config.js/redirects)

## Using Preact

[link](https://github.com/vercel/next.js/tree/canary/examples/using-preact)

- no react installed

```js
// package.json
{
  "name": "using-preact",
  "version": "1.0.0",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  "devDependencies": {
    "react-refresh": "^0.8.3"
  },
  "dependencies": {
    "@prefresh/next": "^0.3.0",
    "next": "^9.4.0",
    "preact": "^10.4.4",
    "preact-render-to-string": "^5.1.9",
    "react": "github:preact-compat/react#1.0.0",
    "react-dom": "github:preact-compat/react-dom#1.0.0",
    "react-ssr-prepass": "npm:preact-ssr-prepass@^1.0.1"
  },
  "license": "MIT"
}
```

- very important the [`next.config.js`](https://github.com/vercel/next.js/blob/canary/examples/using-preact/next.config.js) config.

## Next SEO

[link](https://github.com/vercel/next.js/tree/canary/examples/with-next-seo)

- `NextSeo` is a component
- https://github.com/garmeeh/next-seo

## Prefetching

[link](https://github.com/vercel/next.js/blob/canary/examples/with-prefetching)

```js
<Link prefetch={false} href="/about">
  <a
    onMouseEnter={() => {
      router.prefetch("/about")
      console.log("prefetching /about!")
    }}
  >
    About
  </a>
</Link>
```

## With route as modal

[link](https://github.com/vercel/next.js/tree/canary/examples/with-route-as-modal)

- uses [`react-modal`](https://github.com/reactjs/react-modal)
- it renders the modal in the home page, and it has a conditional if the route is different to show/hide

```js
// pages/index.js

import { useRouter } from "next/router"
import Modal from "react-modal"
import Post from "../components/Post"
import Grid from "../components/Grid"

Modal.setAppElement("#__next")

const Index = () => {
  const router = useRouter()

  return (
    <>
      <Modal
        isOpen={!!router.query.postId} // <==
        onRequestClose={() => router.push("/")}
        contentLabel="Post modal"
      >
        <Post id={router.query.postId} pathname={router.pathname} />
      </Modal>
      <Grid />
    </>
  )
}
```

## with why-did-you-render

[link](https://github.com/vercel/next.js/blob/canary/examples/with-why-did-you-render)

- https://github.com/welldone-software/why-did-you-render
- the setup seems to be a lot simplet than what I see in the package repo:

```js
import React from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React)
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
```

## Analyze bundle

[link](https://github.com/vercel/next.js/blob/canary/examples/analyze-bundles)

- this is a must to see wtf is happening with the bundles
- it has a new `analyze` script

```js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  // any configs you need
}

module.exports = withBundleAnalyzer(nextConfig)
```

## Custom Routes proxying Example

[link](https://github.com/vercel/next.js/tree/canary/examples/custom-routes-proxying)

- this is great to incrementally migrate from whatever other server to nextjs
- the magic relies in the `next.config.js`

```js
// next.config.js
module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/:path*",
        destination: `https://custom-routes-proxying-endpoint.vercel.app/:path*`,
      },
    ]
  },
}
```
