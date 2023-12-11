# Documenté Example SUT

This repository contains an example of a SUT (System Under Test) that is tested using the [Documenté](https://github.com/documente) framework and Cypress.

The SUT is a simple React application that allows users to login and manage a list of tasks.

It also contains a Documenté config and an example document that can be used to generate Cypress or Playwright tests.

## How to run the tests

### With Cypress

1. Install the dependencies with `yarn install`.

2. Extract Cypress tests with `yarn documente:cypress`.

3. Start the SUT application with `yarn start`

4. Run the tests with `yarn cypress:run`

### With Playwright

1. Install the dependencies with `yarn install`.

2. Extract Cypress tests with `yarn documente:playwright`.

3. Start the SUT application with `yarn start`

4. Run the tests with `yarn playwright:run`
