# Testing

there're multiple testing strategies

# why do we test ?

- detect beugs faster
- check if it works as expected
- automate the test for futur uses
- check if it still works fine, after changes made

# what to test ?

anything in an app can be tested, but we rather prioritize what we test

- high value features
- edge cases in high value features
- thing that are easy to break
- react components testing:
  - user interactions
  - conditional rendering
  - utils / hooks

pros:
it helps during the developement process, by speeding up functionality, debugging, ...

## Unit

test individual units of code (functions, methods, components, classes, ...).

## integration

test a set (function, method, components, ...), tell us how well they work together.

## End-to-end

test all the app, simulating the end user

# Techno

- react-testing: elect dom element, trigger events, ...

- jest: uns tests, determine if a test succeed or fail

mocks:
are used in unit testing, when the unit test has external dependencies.
the purpose of a mocking is to isolate & focus on the code being tested, and not the state / behavior of the external dependencies.

// run al tests

# Getting started

```
yarn test
```

```
yarn test -- test/TestWithMockData.test.tsx --verbose
```

// run specific test file
