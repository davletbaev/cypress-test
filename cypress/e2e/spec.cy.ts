describe('My First Test', () => {
  it('Visits my test application', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Learn React')
      .should('have.prop', 'target', '_blank')
      .should('have.prop', 'href', 'https://reactjs.org/')
  })
})
