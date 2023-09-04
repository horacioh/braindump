# Accessibility-flavored React Components make your Design System Delicious

- by Kathleen McMahon: [@resouce11](https://twitter.com/resource11)
- **abstract:** Design systems are a popular way for teams to flavor their design and development workflow. However, an often-missing ingredient in many design systems is a focus on accessibility best practices — especially when component libraries are involved. In this talk, we’ll take a look at how you can mix some commonly-used components with the ingredients of accessibility. Pair this with best practices guidance in your documentation, and you’ll have the recipe for a delectably inclusive design system.

- [source](https://egghead.io/talks/react-accessibility-flavored-react-components-make-your-design-system-delicious)
- [slides](https://noti.st/resource11/lxBsam/accessibility-flavored-react-components-make-your-design-system-delicious)

---

- Design and Code skills are useful and even more if you understand the underlying layer which is the web standards
- Team and Consumer experience are combined when working on a design system
- Design system
  - Business logic out
  - Accessibility first!
- Users are diverse
- The results on the WebAIM Million report is depressing...
- #resource Web content A11y Guidelines
- "Your design system is your Cookbook"
  - Cookbooks have personality
    - Cookbooks of 1940s are "interesting"
- React is a Kitchen utencil
- **You** are the cook. the dev have to have that a11y standard.
- Empower your devs with a11y baked in into your design system
- WCAG is your reference material
- Creating a component is like following a recipe
  - Ingredientes == Semantic HTML
  - Seasonings == ARIA attributes
  - you follow Directions == Documentation
  - Helpful hints == Best practices

## Icons

- can be informative or decorative
- Informative: need a descriptive text
- Decorative: need to be hidden from screen readers
- SVGs vs Icon Fonts
- beware of bugs on SVGs sprites!
- Accessible icon pattern:

```html
<span class="root">
  <!-- "root" forces the inline-block display to easy styling-->
  <span class="icon icon-email" aria-hidden="true"></span>
  <!-- hides the icon from screen readers -->
  <span class="visuallyHidden">email</span>
  <!-- remove the visual representation from the UI but visible to screen readers-->
</span>
```

- if this Icon is _informative_, then we can leave it as it is
- if its _decorative_, then we can add a `aria-hidden="true"` attribute to the top span
- Guardrails are important. help devs use the a11y features you add to the component
- `Font-awesome` is built with Accessibility in mind!

## Buttons

- buttons have a lot of a11y features _FOR FREE_
- inside buttons:
  - no block elements
  - no interaction elements (a, other buttons, form elements...)
  - only inline elements

## inputs

- need label
- need error messages
- placeholder are not LABELS
- avoid horizontal scrolling
- max input width to 80ch
- heep labels stacked vertically
- labels above the input
- errors below the input
- `aria-describedby` (parred with the error label id)
- `aria-invalid`
- `aria-required`
- on errors: `aria-live="polite"`
- guardrails
  - if no label is passed, the whole input is not gonna render
  - also for icons!
  - on error messages

## Documentation

- Gatsby + Storybook
- Storybook with the a11y addon!
- add helpful hints to tell them how to implement your components
- Components Do's and Don'ts
- a page on a11y resources


