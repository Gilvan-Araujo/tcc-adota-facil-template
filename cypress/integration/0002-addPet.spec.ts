describe('Add pet page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cadastrarPet')
  })

  it('should go to the right page', () => {
    cy.title().should('include', 'Cadastrar Pet')
    expect(cy.dataCy('page-title').should('be.visible'))
  })

  it('should not allow the user to register an empty pet', () => {
    expect(cy.requiredNotExist())
    cy.dataCy('submit-button').click()
    expect(cy.requiredExist())
  })

  it('should not allow users to register pets without a name', () => {
    expect(cy.requiredNotExist())
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()
    expect(cy.requiredExist())
  })

  it('should not allow users to register pets without a sex', () => {
    expect(cy.contains('Deve ser um número').should('not.exist'))
    cy.dataCy('name').type('Teste')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()
    expect(cy.contains('Deve ser um número').should('exist'))
  })

  it('should not allow users to register pets without a breed', () => {
    expect(cy.requiredNotExist())
    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()
    expect(cy.requiredExist())
  })

  it('should not allow users to register pets without inputting a phone number', () => {
    expect(cy.requiredNotExist())
    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('submit-button').click()
    expect(cy.requiredExist())
  })

  it('dropzone test', () => {
    expect(cy.requiredNotExist())
    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()
  })
})
