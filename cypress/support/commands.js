Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (name, lastName, email, texto) {
    cy.get('#firstName').type(name)
    cy.get('#lastName').type(lastName)
    cy.get('#email').type(email)
    cy.get('#open-text-area').type(texto)
    cy.contains('button', 'Enviar').click()
})