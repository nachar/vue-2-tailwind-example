describe('Delete task', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#add-task').click();
    cy.get('textarea[name=description]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum purus sit amet dolor ultricies');
    cy.get('input[name=date]').type('3000-12-12');
    cy.contains('Save').click();
  });

  it('Task deleted', () => {
    cy.contains('delete').click();
    cy.contains('Yes').click();
    cy.get('#to-do-list').should('contain', 'Please add a new task');
  });
});
