# Component testing

- Why do we test our code?
- the amount of work we need to do in order to test our applications is massive no matter which tool you use
  - mocking your API
  - setting your test component for wrappers (contexts)
- what are the downsides of not having Tests
- different testing strategies
  - test behavior, not implementations
    - this is important because this will enable you to decouple DOM/UI changes from what you are trying to test which is user interactions

## Playwright

- the API seems to be really nice!

## Differences between Cypress and Playwright

- Element interaction
  - Cypress: you have the `cy` object available you can call methods on
  - Playwright: you have the `page` object you can call methods too, also you need to explicitly async stuff, no magic behind the curtains
- Inline frames
  - Cypress: you have an `iframe` plugin that enables `cy.iframe`
  - Playwright: first get the iframe (`page.frameLocator`), then use `iframe.locator` to find elements
- Waiting: is baked-in in both tools (4s in Cypress and 5s in Playwright by default)
- Alerts

  - Cypress: you need to do some workarounds to get correct results from different alert dialogs
  - Playwright: you need to handle the dialog "policy" before the test runs (using `page.on('dialog', () => {})`). The API is much better looking and more consistent

- Navigation to new windows
  - Cypress: not a way to load multiple pages, you need to hack your app to not open a new windows
  - Playwright: you can create a new playwright page and create assertions on it with both pages in memory
- API Requests
  - Cypress: `cy.request`
  - Playwright: you can create requestContexts and override anything: responses, cookies...
- Page Objects
  - Cypress: just create an object with some functions attached to it. anti-pattern. never heard of it
  - Playwright: create a class with all the variables and methods (it's typescript).
- Language Support
  - Cypress: JS or TS
  - Playwright: TS/JS, Python, java, .NET (C#)
- Browsers: both run on real browsers
  - Cypress: can only run one browser at a time (you can parallelize in CI)
  - Playwright: can test multiple browsers in parallel
- Speed
  - Cypress:
  - Playwright:

## References

- [Gaining Confidence with Cypress Tests - Rob Richardson - NDC London 2021](https://www.youtube.com/watch?v=nHxnDOTmROY)
- [Playwright 1.22: Component Tests (preview) Overview](https://www.youtube.com/watch?v=y3YxX4sFJbM)
- [Cypress vs. Playwright: Let the Code Speak](https://www.youtube.com/watch?v=fncL63KRA-0)
- [Text Automation University by Applitools](https://testautomationu.applitools.com)
- [Cypress Tips and Tricks - videos](https://www.youtube.com/playlist?list=PLP9o9QNnQuAYYRpJzDNWpeuOVTwxmIxcI)
- [Cypress Tips](https://cypress.tips)
