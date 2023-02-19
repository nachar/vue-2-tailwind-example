describe('Add task', () => {
  const taskDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum purus sit amet dolor ultricies';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Initial status', () => {
    cy.get('#to-do-list').should('contain', 'Please add a new task');
  });

  it('Task added', () => {
    cy.get('#add-task').click();
    cy.get('textarea[name=description]').type(taskDescription);
    cy.get('input[name=date]').type('3000-12-12');
    cy.contains('Save').click();
    cy.get('#to-do-list').should('contain', taskDescription);
  });
});
