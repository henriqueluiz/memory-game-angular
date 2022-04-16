import { VictoryPage } from 'cypress/pages/victory';

describe('Win game', () => {
  it('should play to win and play again', () => {
    cy.visit('/');

    cy.flipAllCards();
    VictoryPage.playAgain().click();
    cy.flipAllCards();
  });

  it('should show incremented status', () => {
    VictoryPage.title().contains('You Win!');
    VictoryPage.victories().contains('Victories: 2');
    VictoryPage.errors().contains('Errors: 1');
  });
});
