/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
import 'cypress-file-upload'

import './commands'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
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
       * Custom command to fill out form fields and skip a specified field. Leave empty to fill all form fields. Second parameter is used to submit the form.
       * @example cy.customFillFormFields('name', true)
       */
      customFillFormFields(
        dataCyIdToSkip:
          | 'name'
          | 'type-dog'
          | 'type-cat'
          | 'age'
          | 'breed'
          | 'sex-male'
          | 'sex-female'
          | 'phone'
          | '',
        submit: boolean
      ): Chainable<Element>

      /**
       * Custom command to intercept the api call to add a pet. Takes the status to be returned.
       * @example cy.interceptAddPet(200)
       */
      interceptAddPet(status: number): Chainable<Element>

      /**
       * Custom command to intercept the api call to upload an image to imgBB. Takes the status to be returned and a possible url.
       * @example cy.interceptImageUpload(200, 'image.jpg')
       */
      interceptImageUpload(status: number, imageUrl: string): Chainable<Element>
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
