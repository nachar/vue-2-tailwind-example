describe('Edit task', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#add-task').click();
    cy.get('textarea[name=description]').type('Lorem ipsum dolor');
    cy.get('input[name=date]').type('3000-12-12');
    cy.contains('Save').click();
  });

  it('Task edited', () => {
    const taskDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum purus sit amet dolor ultricies';
    const taskDate = '3001-01-01';
    cy.contains('edit').click();
    cy.get('textarea[name=description]').type(taskDescription);
    cy.get('input[name=date]').type(taskDate);
    cy.contains('Save').click();
    cy.get('#to-do-list').should('contain', taskDescription);
    cy.get('#to-do-list').should('contain', taskDate);
  });
});
