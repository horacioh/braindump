# Mintter notes

- we need different components for each mode. ideally we should reuse as much as we can, but there's no need to load an editor component for a publication.
- every component should follow a common set of rules, that can change depending on the settings
  - font size
  - line height
  - font family
- we need to wrap the publication content into `<article />`

## Styles examples

- p
  - font-size 1rem
  - line-height 1.5rem
- heading
  - font-size 1.5rem
  - line-height 2rem
-

## ideas

- have the cleanest ui, and just keep adding styles to an **element context**, that then the underlying real element will use and apply?
- we need to change the values from the UI, how can I do it with stitches?
