# Testing SlateJS (0.50+) code

## test utlities

- packages you need to install: `slate slate-hyperscript slate-react jest @testing-library/react` (testingLib is optional)

```ts
// /test/jsx.ts
import { createHyperscript } from "slate-hyperscript"
import { options } from "../src/options"
import { createText } from "./hyperscript/creators"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any
      editor: any
      inline: any
      htext: any
    }
  }
}

export const jsx = createHyperscript({
  elements: {
    hp: { type: "paragraph" },
    // hmention: {type: options.mention.type},
    hblockquote: { type: "block_quote" },
    hcode: { type: "code" },
    ha: { type: "link" },
    himg: { type: "img" },
    hul: { type: "ul_list" },
    hol: { type: "ol_list" },
    hli: { type: "list_item" },
    hh1: { type: "heading_1" },
    hh2: { type: "heading_2" },
    hh3: { type: "heading_3" },
    hh4: { type: "heading_4" },
    hh5: { type: "heading_5" },
    hh6: { type: "heading_6" },
    inline: { inline: true },
  },
  creators: {
    htext: createText,
  },
})
```

- you can also create an `options` attribute to pass all the types to the createHyperscript elements (checkout [this](https://github.com/udecode/slate-plugins/blob/next/packages/slate-plugins/src/__test-utils__/jsx.ts) example)

```jsx
// /test/hyperscript/creators.ts
```

## Testing plugins

WIP

## Testing keaboard actions

WIP
