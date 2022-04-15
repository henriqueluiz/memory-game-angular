import { VictoryPage } from 'cypress/pages/victory';

describe('Victory page blocked', () => {
  it('should not be able to access victory page directly', () => {
    cy.visit('/play/victory');

    VictoryPage.title().should('not.exist');
  });
});
