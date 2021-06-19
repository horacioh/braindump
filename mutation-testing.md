# Mutation Testing

- kill _mutants_ instead of counting code coverage

## Posts

- [[Intro to mutation testing]]

## Intro

Mutation testing is a technique that helps you test for multiple outcomes of a function. It analyses the code and make multiple assumptions to see if your code responds properly to the different outcomes.

It uses the "mutant" analogy. so your code should be able to "kill" all the mutants. if after running all the scenarios theres still mutants left, that means your code did not "pass".

The difference between [[test coverage]] and mutation testing is that the metrics to measure test coverage are not checking thet the code should do what it supposed to do but if the code was executed or not. Which may or may not be useful depending on what code confidence means to you.

## references

- [Stryker Mutator](https://stryker-mutator.io/)
- [example](https://stryker-mutator.io/docs/General/example)
- [Google Testing Blog: Mutation Testing](https://testing.googleblog.com/2021/04/mutation-testing.html)
- [An intro to Mutation Testing \- or why coverage sucks \- DEV Community 👩‍💻👨‍💻](https://dev.to/pedrorijo91/an-intro-to-mutation-testing-or-why-coverage-sucks-3anp)
- [Who watches the watchmen? Mutation testing in action \- DEV Community 👩‍💻👨‍💻](https://dev.to/noriste/who-watches-the-watchmen-mutation-testing-in-action-3889)
- [Mutation Testing: Getting Started And Tools To Use \- Questions \- The Club](https://club.ministryoftesting.com/t/mutation-testing-getting-started-and-tools-to-use/12042/2)
- [Kill the Mutants\! \- Nico Jansen & Simon de Lang \| MoT](https://www.ministryoftesting.com/dojo/lessons/kill-the-mutants-nico-jansen-simon-de-lang)
- [Hugo van Rijswijk \- Who is testing your tests? \- YouTube](https://www.youtube.com/watch?v=Vq9eqZzblfg)
