# Documenté Example SUT

This repository contains an example of a SUT (System Under Test) that is tested using the [Documenté](https://github.com/documente) framework and Cypress.

The SUT is a simple React application that allows users to connect and manage a list of tasks.

The example specifications are located in the `cypress/e2e` folder.

## How to launch the tests

First, install the dependencies with:

```bash
yarn install
```

Then start the SUT application with:

```bash
yarn start
```

You can then run Cypress with:

```bash
yarn run cypress:open
```
