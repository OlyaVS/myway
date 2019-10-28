describe('App initialization', () => {
  it('Loads route when page loaded', () => {
    cy.seedAndVisit();
    cy.get('[data-testid=route__list-item]')
    .should('have.length', 2);
  });

  it('Dispalys en error on failure to load route from bd', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:8080/route',
      status: 500,
      response: {}
    });
    cy.visit('/');

    cy.get('[data-testid=error-panel]')
      .should('be.visible');

    cy.get('[data-testid=route__list-item]')
      .should('not.exist');
  });
});
