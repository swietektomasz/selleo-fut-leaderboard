describe('sats show', () => {
  it('succesfully loads', () => {
    cy.visit('stats/Czikarito')

    cy.contains('Player name')

    cy.get('.matches')
  })
})
