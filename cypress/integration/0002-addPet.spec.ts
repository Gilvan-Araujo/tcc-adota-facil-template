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

  it('should not allow users to register a pet without a name', () => {
    expect(cy.requiredNotExist())

    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a sex', () => {
    expect(cy.contains('Deve ser um número').should('not.exist'))

    cy.dataCy('name').type('Teste')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()

    expect(cy.contains('Deve ser um número').should('exist'))
  })

  it('should not allow users to register a pet without a breed', () => {
    expect(cy.requiredNotExist())

    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a phone number', () => {
    expect(cy.requiredNotExist())

    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('submit-button').click()

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without an image', () => {
    expect(cy.requiredNotExist())

    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=pickAnImage]').should('be.visible'))
  })

  it('should display the image upload error toast correctly', () => {
    cy.intercept('POST', 'https://api.imgbb.com/1/upload', {
      statusCode: 400
    })

    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=uploadImageError]').should('be.visible'))
  })

  it('should display the register pet error toast correctly', () => {
    cy.intercept('POST', 'http://localhost:3000/api/addPet', {
      statusCode: 400
    })

    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=registerError]').should('be.visible'))
  })

  it('should display the invalid image error toast', () => {
    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('image-dropzone').attachFile('invalidFile.pdf')

    expect(cy.get('[id=imageInvalid]').should('be.visible'))
  })

  it('should complete the whole process of adding a pet', () => {
    cy.intercept('POST', 'https://api.imgbb.com/1/upload', {
      statusCode: 200,
      body: {
        data: {
          data: {
            url: 'any-url'
          }
        }
      }
    })
    cy.intercept('POST', 'http://localhost:3000/api/addPet', {
      statusCode: 200
    })

    cy.dataCy('name').type('Teste')
    cy.dataCy('age').type('10')
    cy.dataCy('breed').type('Pastor alemão')
    cy.dataCy('sex').type('Masculino')
    cy.dataCy('phone').type('83996481242')
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=registerSuccess]').should('be.visible'))
  })
})
