describe('Basic', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Visits the app root url', () => {
    cy.contains('All tasks');
  });
});
