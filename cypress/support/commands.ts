declare namespace Cypress {
  interface Chainable<Subject = any> {
    flipAllCards(): typeof flipAllCards;
  }
}

function flipAllCards(): void {
  const diferentImages = 5;

  for (let i = 0; i < diferentImages; i++) {
    cy.get('[aria-checked="false"]').first().then(($el) => {
      const id = $el.attr('data-test');
      cy.get(`[data-test="${id}"]`).click({ multiple: true });
    });
  }
}

Cypress.Commands.add('flipAllCards', flipAllCards);
