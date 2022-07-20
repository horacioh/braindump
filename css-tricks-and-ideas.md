# CSS Tips and tricks

- https://dev.to/tlakomy/7-css-properties-you-had-no-idea-about-4e75
  - with `caret-color` you can change the color of the caret in your app!
  - `will-change` can help the browser optimize for performance, LAST RESORT!!
- https://csstriggers.com
  - useful to check how properties affect the rendering
- https://blog.logrocket.com/css-pseudo-classes-you-might-need/

  - `:is()` helps you write less css to target multiple elements

    ```css
    /* from this */
    article > h1,
    article > h2,
    article > h3 {
      color: #555;
    }

    button:focus,
    button:hover {
      border: 1px solid orangered;
    }

    /* to this */
    article > :is(h1, h2, h3) {
      color: #555;
    }

    button:is(:focus, :hover) {
      border: 1px solid orangered;
    }
    ```

  - `:focus-within`
  - `:focus-visible`
  - `:only-child` and `:only-of-type`: selects an element that is the ONLY child of a parent
  - `:not()`
  - `:empty`
  - `:placeholder-shown` targets input elements that are showing placeholders (are empty)
  - `:required`
  - `:read-only`
  - `:invalid`
  - `:valid`

- https://neumorphism.io: Generate Soft-UI CSS code
- https://uiverse.io: LOTS of elements and the CODE!
- https://ishadeed.com/article/intrinsic-sizing-in-css/
  - `min-content`: is an intrinsic value (intrinsic = based on content). equal to the width of the element’s content **longest word**
  - `max-content`: intrinsic value. equal to the width of the content
  - `fit-content`: uses `max-content`, unless `available < max-content`, then it uses available. Unless `available < min-content`, then it uses `min-content`.
- https://twitter.com/steve8708/status/1546657470604382208
  - `backdrop-filter` to create a blur effect on elements below others (apple topbar effect)
- https://parceljs.org/blog/parcel-css/
- [Lea Verou | CSS Variable Secrets | CSS Day 2022](https://www.youtube.com/watch?v=ZuZizqDF4q8&list=PLjnstNlepBvNqk-CeIgptyQFhZY0s5Ubp&index=5)
- https://twitter.com/builderio/status/1524859403404722176
  - use `clamp` to translate `min-width + width + max-width` in just one line: `width: clamp(50px, 75%, 300px)`
- https://ishadeed.com/article/css-has-parent-selector/
  - a VERY GOOD explanation about the `:has()` selector
- https://web.dev/i18n/es/accent-color/
- https://www.youtube.com/watch?v=yMEjLBKyvEg
- [Minimal CSS Solutions to (Previously) Complex Problems](https://www.youtube.com/watch?v=dz6aFfme_hg)
- https://ishadeed.com/article/button-label-alignment/
  - vertically align labels inside buttons or elements!!
- https://css-tricks.com/a-complete-guide-to-calc-in-css/
  - calc explanation!
- https://css2js.dotenv.dev
  - JS to CSS styles!
- https://ishadeed.com/article/new-facebook-css/
  - facebook css goodies
- https://ishadeed.com/article/spacing-in-css/
  - spacing techniques
- https://web.dev/min-max-clamp/
  - css logical functions
- https://web.dev/aspect-ratio/
- https://github.com/GoogleChromeLabs/container-query-polyfill
- https://blog.maximeheckel.com/posts/the-power-of-composition-with-css-variables
  - composition with CSS variables
- https://willmendesneto.com/posts/linting-web-accessibility-issues-in-your-html-using-just-css/
  - show A11y errors in HTML using CSS
- https://ishadeed.com/articles/
- https://medium.com/swlh/css-logical-properties-are-the-future-of-the-web-i18n-c7d554c6dd72
  - CSS logical propertiees gotchas
- https://www.bram.us/2021/07/23/prevent-unwanted-layout-shifts-caused-by-scrollbars-with-the-scrollbar-gutter-css-property/
  - dealing with scrollbars
- https://www.franciscobrusa.dev/blog/generated-color-palettes
  - color palletes with code!!
- https://css-tricks.com/using-performant-next-gen-images-in-css-with-image-set/
  - performance images and `image-set`
- https://www.joshwcomeau.com/css/custom-css-reset/
  - line-height hack! `line-height: calc(1em + 0.5rem);`
- https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
  - explanation of adding `[role='list']` to ul and ol
- https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/
  - more on container queries
