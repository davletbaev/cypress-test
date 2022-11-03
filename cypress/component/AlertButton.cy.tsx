import AlertButton from '../../src/components/AlertButton';

describe('AlertButton.cy.tsx', () => {
  it('should open alert', () => {
    cy.mount(<AlertButton message="It's working!">Try it out!</AlertButton>)

    cy.contains('Try it out!').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal("It's working!")
    })
  })
})
