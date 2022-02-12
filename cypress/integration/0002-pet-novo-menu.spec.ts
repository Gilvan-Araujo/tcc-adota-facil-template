describe('Add pet page (menu)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pet/novo?type=menu')
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

    cy.customFillFormFieldsMenu('name', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a type', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFieldsMenu('type-dog', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without an age', () => {
    expect(cy.contains('Deve ser um número').should('not.exist'))

    cy.customFillFormFieldsMenu('age', true)

    expect(cy.contains('Deve ser um número').should('exist'))
  })

  it('should not allow users to register a pet without a breed', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFieldsMenu('breed', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a sex', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFieldsMenu('sex-male', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without a phone number', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFieldsMenu('phone', true)

    expect(cy.requiredExist())
  })

  it('should not allow users to register a pet without an image', () => {
    expect(cy.requiredNotExist())

    cy.customFillFormFieldsMenu('', true)

    expect(cy.get('[id=pickAnImage]').should('be.visible'))
  })

  it('should display the image upload error toast correctly', () => {
    cy.interceptImageUpload(400, '')

    cy.customFillFormFieldsMenu('', false)
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(
      cy.get('[id=addPet]').contains('Erro ao cadastrar pet').should('exist')
    )
  })

  it('should display the register pet error toast correctly', () => {
    cy.interceptImageUpload(200, '')
    cy.interceptAddPet(400)

    cy.customFillFormFieldsMenu('', false)
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(
      cy.get('[id=addPet]').contains('Erro ao cadastrar pet').should('exist')
    )
  })

  it('should display the invalid image error toast', () => {
    cy.customFillFormFieldsMenu('', false)
    cy.dataCy('image-dropzone').attachFile('invalidFile.pdf')

    expect(cy.get('[id=imageInvalid]').should('be.visible'))
  })

  it('should complete the whole process of adding a pet', () => {
    cy.interceptImageUpload(200, 'image.jpg')
    cy.interceptAddPet(200, 2500)

    cy.customFillFormFieldsMenu('', false)
    cy.dataCy('image-dropzone').attachFile('validFile.png')
    cy.dataCy('submit-button').click()

    expect(cy.get('[id=addPet]').contains('Cadastrando pet').should('exist'))

    expect(
      cy
        .get('[id=addPet]')
        .contains('Pet cadastrado com sucesso')
        .should('exist')
    )
  })
})
