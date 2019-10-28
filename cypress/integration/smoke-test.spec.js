describe('Smoke tests', () => {
  beforeEach(() => {
    cy.request('GET', 'http://localhost:8080/route')
      .its('body.route')
      .each((item, index) => cy.request('DELETE', 'route/${index}'));
    cy.visit('/');
  });

  context('With no route', () => {
    it('Adds new item', () => {
      const address = 'Омск ленина 25';
      const geocodedAddress = 'Россия, Омск, улица Ленина, 25'

      cy.server();
      cy.route('POST', 'http://localhost:8080/route')
        .as('addItem');

      cy.get('[data-testid=form__input]')
        .type(address)

      cy.get('[data-testid=address-form] button')
        .click();

      cy.wait('@addItem');

      cy.get('[data-testid=route__list-item]')
        .should('have.length', 1);

      cy.get('[data-testid=route__list-item]')
        .should('contain', geocodedAddress);
    });
  });

  context('With route', () => {
    beforeEach(() => {
      cy.fixture('route')
        .each((item) => {
          cy.request('POST', 'http://localhost:8080/route', {
            address: {
              address: item.address,
              coords: item.coords
            }
          })
        })
      cy.visit('/');
    });

    it('Loaded existing route data from the DB', () => {
      cy.get('[data-testid=route__list-item]')
      .should('have.length', 4);
    });

    it('Sortable route list with drag and drop', () => {
      cy.server();
      cy.route({
          method:'PUT',
          url:'/route'
        })
        .as('sort');

      cy.get('[data-testid=route__list-item]')
        .eq(2)
        .should('contain', 'Россия, Омск, улица Пушкина, 7')
        .drag('[data-testid=route__list-item]', 'top');

      cy.wait('@sort');

      cy.get('[data-testid=route__list-item]')
        .first()
        .find('p')
        .should('be.visible')
        .should('contain', 'Россия, Омск, улица Пушкина, 7');
    });

    it('Delete items', () => {
      cy.server();
      cy.route('DELETE', '/route/*')
        .as('delete');

      cy.get('[data-testid=route__list-item]')
        .each(item => {
          cy.wrap(item)
            .find('.item__delete')
            .click();

          cy.wait('@delete');
        })
        .should('not.exist');
    });
  });
})
