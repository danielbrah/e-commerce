describe('Sneakers', () => {
  it('Visits Sneakers e-commerce site', () => {
    cy.viewport(1680, 1050)
    cy.visit('https://sneakers-ecommerce-5150.netlify.app')
  })

  it('can click button', () => {
    cy.viewport(1680, 1050)
    cy.visit('https://sneakers-ecommerce-5150.netlify.app')
    cy.get('#hero__text--buttons').click()
  })

  // it('contains word', () => {
  //   cy.viewport(1680, 1050)
  //   cy.visit('http://sneakers-ecommerce-5150.netlify.app')
  //   cy.get('#hero__text--buttons').should('have.text', ' View items ')
  // })
})