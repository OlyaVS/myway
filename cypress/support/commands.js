Cypress.Commands.add('seedAndVisit', (state = 'fixture:state-with-route') => {
  cy.server();
  cy.route('GET', 'http://localhost:8080/route', state);
  cy.visit('/');
})
