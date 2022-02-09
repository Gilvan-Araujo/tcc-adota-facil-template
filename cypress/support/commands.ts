// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('dataCy', (testId) => {
  cy.get(`[data-cy=${testId}]`)
})

Cypress.Commands.add('requiredExist', () => {
  cy.contains('Campo obrigatório').should('exist')
})

Cypress.Commands.add('requiredNotExist', () => {
  cy.contains('Campo obrigatório').should('not.exist')
})

Cypress.Commands.add(
  'customFillFormFields',
  (
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
  ) => {
    dataCyIdToSkip !== 'name' && cy.dataCy('name').type('Teste')
    dataCyIdToSkip !== 'type-dog' && cy.dataCy('type-dog').click()
    dataCyIdToSkip !== 'age' && cy.dataCy('age').type('10')
    dataCyIdToSkip !== 'breed' && cy.dataCy('breed').type('Pastor alemão')
    dataCyIdToSkip !== 'sex-male' && cy.dataCy('sex-male').click()
    dataCyIdToSkip !== 'phone' && cy.dataCy('phone').type('83996481242')
    submit && cy.dataCy('submit-button').click()
  }
)

Cypress.Commands.add(
  'customFillFormFieldsMenu',
  (
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
  ) => {
    dataCyIdToSkip !== 'name' && cy.dataCy('name').type('Teste')
    if (dataCyIdToSkip !== 'type-dog') {
      cy.dataCy('type-select').click()
      cy.dataCy('type-dog').click()
    }
    dataCyIdToSkip !== 'age' && cy.dataCy('age').type('10')
    dataCyIdToSkip !== 'breed' && cy.dataCy('breed').type('Pastor alemão')
    if (dataCyIdToSkip !== 'sex-male') {
      cy.dataCy('sex-select').click()
      cy.dataCy('sex-male').click()
    }
    dataCyIdToSkip !== 'phone' && cy.dataCy('phone').type('83996481242')
    submit && cy.dataCy('submit-button').click()
  }
)

Cypress.Commands.add('interceptImageUpload', (status: number, url: string) => {
  cy.intercept('POST', 'https://api.imgbb.com/1/upload', {
    statusCode: status,
    body: {
      data: {
        data: {
          url
        }
      }
    }
  })
})

Cypress.Commands.add('interceptAddPet', (status: number) => {
  cy.intercept('POST', 'http://localhost:3000/api/addPet', {
    statusCode: status
  })
})
