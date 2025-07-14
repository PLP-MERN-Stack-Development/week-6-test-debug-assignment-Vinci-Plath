// cypress/integration/sample.e2e.js

describe('Sample E2E Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('button'); // Adjust selector as needed for your app
  });
}); 