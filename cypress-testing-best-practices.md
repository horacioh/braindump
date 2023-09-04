# Brian Mann – I see your point, but… (Part 1)

- [video](https://www.youtube.com/watch?v=5XQOK0v_YRE&t=34s)

## outline

- organizing tests
- writing tests
- logging in
- controlling state

- all using [[cypress]]

## Organize tests

- logged / not logged
  - topbar information for each state
- login page
  - title
  - inputs
  - placeholders
  - form submitions
  - redirection
- register
  - content
  - error
  - success state
- settings
  - form prefill values
  - render info
  - change data
- articles spec
  - data display compared with the backend data
  - no results page
  - server errors
  - button clicks
  - changing page by clicking tabs
- article
  - data rendered
  - meaningful actions
- profile page
  - ...

## strategies when need a persisting layer

- stub requests

  - mock your server calls
  - static user
  - dynamic user

- use commands to encapsulate reusable pieces for your tests (like the login flow)
- you can also create requests with `cy.request()`
- **do not** use UI to built up state
- set state directly/programmatically
- **do not** use page objects to share UI knowledge
- write specs in isolation
- **dont limit** yourself trying to act like a user
- you have native access to everything


