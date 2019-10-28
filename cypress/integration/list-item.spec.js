describe('List items', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it('Properly displays items', () => {
    cy.get('[data-testid=route__list-item]')
      .should('have.length', 2);

    cy.get('[data-testid=route__list-item]')
      .first()
      .as('first-item')
      .find('p')
      .should('contain', 'Россия, Омск, улица Ленина, 5');

    cy.get('@first-item')
      .find('.item__delete')
      .should('exist');
  });

  it('Removes an item when delete item button is clicked', () => {
    const route = [{
      "id": 1570720885730,
      "address": "Россия, Омск, улица Ленина, 25",
      "coords": [
        54.979077,
        73.377932
      ]
    }];

    cy.route({
        method: 'DELETE',
        url: 'http://localhost:8080/route/0',
        status: 200,
        response: route
      })
      .as('deleteItem');

    cy.get('[data-testid=route__list-item]')
      .first()
      .find('.item__delete')
      .click();

    cy.wait('@deleteItem');

    cy.get('[data-testid=route__list-item]')
      .should('have.length', 1);
  })
});
