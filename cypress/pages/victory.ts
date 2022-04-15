export const VictoryPage = {
  playAgain: () => {
    return cy.get('[data-test="play-again"]');
  },

  title: () => {
    return cy.get('[data-test="victory-title"]');
  },

  victories: () => {
    return cy.get('[data-test="victories"]');
  },

  errors: () => {
    return cy.get('[data-test="errors"]');
  }
}
