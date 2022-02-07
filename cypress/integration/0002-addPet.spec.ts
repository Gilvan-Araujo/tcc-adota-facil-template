describe('Add pet page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pet/novo')
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

    cy.customFillFormFields('name', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a type', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFields('type', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without an age', () => {
    expect(cy.contains('Deve ser um número').should('not.exist'))

    cy.customFillFormFields('age', true)

    expect(cy.contains('Deve ser um número').should('exist'))
  })

  it('should not allow users to register a pet without a breed', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFields('breed', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a sex', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFields('sex', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a phone number', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFields('phone', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without an image', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFields('', true)

    expect(cy.get('[id=pickAnImage]').should('be.visible'))
  })

  it('should display the image upload error toast correctly', () => {
    cy.interceptImageUpload(400, '')

    cy.customFillFormFields('', false)
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=uploadImageError]').should('be.visible'))
  })

  it('should display the register pet error toast correctly', () => {
    cy.interceptImageUpload(200, '')
    cy.interceptAddPet(400)

    cy.customFillFormFields('', false)
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=registerError]').should('be.visible'))
  })

  it('should display the invalid image error toast', () => {
    cy.customFillFormFields('', false)
    cy.dataCy('image-dropzone').attachFile('invalidFile.pdf')

    expect(cy.get('[id=imageInvalid]').should('be.visible'))
  })

  it('should complete the whole process of adding a pet', () => {
    cy.interceptImageUpload(200, 'image.jpg')
    cy.interceptAddPet(200)

    cy.customFillFormFields('', false)
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=registerSuccess]').should('be.visible'))
  })
})
