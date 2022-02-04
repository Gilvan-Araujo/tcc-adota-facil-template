/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
import 'cypress-file-upload'

import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>

      /**
       * Custom command to see if the required validation is visible.
       * @example cy.requiredExist()
       */
      requiredExist(): Chainable<Element>

      /**
       * Custom command to see if the required validation is NOT visible.
       * @example cy.requiredNotExist()
       */
      requiredNotExist(): Chainable<Element>

      /**
       * Custom command to drop an image file into a file input.
       * @example cy.dropFile()
       */
      dropFile(fileName: any): Chainable<Element>
    }
  }
}

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')
