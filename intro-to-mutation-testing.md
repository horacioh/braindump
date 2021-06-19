# Intro to mutation testing

---
title: Why I should care about Mutation Testing?
published: false
description: why even if your test coverage is high, you still have bugs? let's think twice about test coverate by killing some mutants!
tags: testing, mutation testing, stryker, test, coverage, confidence
//cover_image: https://direct_url_to_image.jpg
---

Having as much confidence as possible in the code we ship to production is crucial to make sure our customers and users are happy and we can sleep well at nights.

One way we gain confidence is by testing our code. The reality is that testing is hard, and sometimes we are not sure if our tests are well written. What if I told you that you can avoid this by testing your tests? 😱🤯.
**Here comes Mutation Testing 👹**

Mutation testing is a technique that helps you test for multiple outcomes of your code. It analyses the code and make "changes" (mutates/creates a copy of your source code) to see if your tests catch all the mutations added.

It uses the "mutant" analogy. The idea is to kill all the mutants to make sure your tests are covering all (well, almost all) the possible edge cases and avoid pushing bugs to production. Let's see it with an example:

## An Example

Let me explain it with the example from the [stryker mutator](https://stryker-mutator.io/docs/#an-example) framework (we'll talk about that later).

Imagine you are building a casino app, and you rely on the above function to not sell anything to minors:

```js
function isUserOldEnough(user) {
  return user.age >= 18;
}
```

the mutation testing tool will find the return statement and decided to "change it" in several ways:

```js
/* 1 */ return user.age > 18;
/* 2 */ return user.age < 18;
/* 3 */ return false;
/* 4 */ return true;

// ☝️ this are mutants!! ☝️
```

after hte mutants are created, your tests will be executed one by one againts all your mutants. If the test at least fails once, we say the mutant is _killed_. and that's good!

If after running our tests the mutant is still alive, then that's an indication that we are not covering some cases that might endup being bugs in production. **The better your tests, the fewer mutants alive**.

isn't it cool?

## Why Mutation Testing and not Test coverage?

The difference between test coverage and mutation testing is that test coverage checks **How much** code was executed while Mutation testing check How you **Interact** with it.

## How Can you start using Mutation Testing?

there are a couple of tools you can use depending on your codebase language. the ne I'm using and learning from is [Stryker mutator](https://stryker-mutator.io) which is good for JavaScript, Typescript, Scala and C#. You can go and checkout the [Getting Started with StrykerJS](https://stryker-mutator.io/docs/stryker-js/getting-started) and give it a try!

I also have some notes about my learning process [here](https://horacioh.github.io/braindump/mutation-testing) where I have a list of resources and videos about it along with all my _cool_ findings!

I'm working on a couple of examples and videos about it so make sure you follow me on [twitter](https://hhg.link/twitter) for more updates!

## Gimme some feedback!!

Did you like Mutation testing? are you willing to implement it in your codebase? are there any doubts I can help you solve? Please **Add some comments! 👇🏼**