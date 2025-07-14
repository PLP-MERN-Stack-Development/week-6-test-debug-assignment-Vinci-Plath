// client/cypress/integration/buttonClick.e2e.js

describe('Homepage Button Click Flow', () => {
  it('shows a message when the button is clicked', () => {
    // Visit the homepage
    cy.visit('/');

    // Check for the welcome message and button
    cy.contains('Welcome to the MERN Testing App').should('be.visible');
    cy.contains('button', 'Click me').should('be.visible');

    // Click the button
    cy.contains('button', 'Click me').click();

    // Assert that the message appears
    cy.get('[data-testid="clicked-msg"]').should('contain', 'Button was clicked!');
  });
}); 