describe('Sandbox Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.contains('Welcome');
  });
  it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
    cy.checkA11y();
  });
  it('Has no a11y violations after button click', () => {
    // Interact with the page, then check for a11y issues
    cy.get('button').first().click();
    cy.checkA11y();
  });

});
