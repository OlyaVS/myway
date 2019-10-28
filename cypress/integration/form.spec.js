describe('Form', () => {
  beforeEach(() => {
    cy.seedAndVisit({"route": [], "error": ""});
  });

  it('Adds new route item on submit', () => {
    const typedAddress = 'Омск ленина 5';
    const geocodedAddress = 'Россия, Омск, улица Ленина, 5';
    const route = [
      {
        "id":1572002736926,
        "address": "Россия, Омск, улица Ленина, 5",
        "coords": [
          54.986232,
          73.374572
        ]
      }
    ];

    cy.server();
    cy.route({
        method: 'POST',
        url: 'http://localhost:8080/route',
        response: route
      })
      .as('addItem');

    cy.get('[data-testid=form__input]')
      .as('input')
      .type(typedAddress);

    cy.get('[data-testid=address-form]')
      .find('.form__submit')
      .click();

    cy.wait('@addItem')

    cy.get('@input')
      .should('have.value', '');

    cy.get('[data-testid=route__list-item]')
      .should('have.length', 1);

    cy.get('[data-testid=route__list-item] p')
      .should('contain', geocodedAddress);
  })

  it('Dispalys en error message on a failed submission', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:8080/route',
      status: 500,
      response: {}
    }).as('addItem');

    cy.get('[data-testid=form__input]')
      .as('input')
      .type('Omsk');

    cy.get('[data-testid=form__button]')
      .click();

    cy.wait('@addItem');

    cy.get('[data-testid=error-panel]')
      .should('be.visible');

    cy.get('@input')
      .should('have.value', '');

    cy.get('[data-testid=route__list-item]')
      .should('not.exist');
  });

  it('Dispalys an error message on a failed geocoding address', () => {
    const notValidAddress = '000---000';

    cy.get('[data-testid=form__input]')
      .as('input')
      .type(notValidAddress);

    cy.get('[data-testid=form__button]')
      .click();

    cy.get('[data-testid=form__input]')
      .should('have.class', 'input--error');

    cy.get('[data-testid=route__list-item]')
      .as('route_item')
      .should('have.length', 0);
  })
})
