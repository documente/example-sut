# Documenté Example SUT

This repository contains an example of a SUT (System Under Test) that is tested using the [Documenté](https://github.com/documente) framework and Cypress.

The SUT is a simple React application that allows users to login and manage a list of tasks.

It also contains a Documenté config and an example document that can be used to generate Cypress or Playwright tests.

## How to generate the tests from the Markdown documentation

### Install the dependencies

```bash
yarn install
```

### Generate the Cypress tests

Then run Documenté with:

```bash
yarn run documente:cypress
```

This will generate a Cypress test file in the `cypress/e2e` folder.

## How to launch the tests

Start the SUT application with:

```bash
yarn start
```

You can then run Cypress with:

```bash
yarn run cypress:open
```
