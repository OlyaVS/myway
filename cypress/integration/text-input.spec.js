describe('Input form', () => {
  beforeEach(() => {
    cy.seedAndVisit({ "route": [], "error": "" });
  });

  it('Focuses input on load', () => {
    cy.focused()
      .should('have.class', 'form__input input');
  });

  it('Accepts input', () => {
    const typedAddress = 'Омск ленина 5';

    cy.get('[data-testid=form__input]')
      .type(typedAddress)
      .should('have.value', typedAddress);
  });
})
