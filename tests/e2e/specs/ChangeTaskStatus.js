describe('Change task status', () => {
  const taskDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

  beforeEach(() => {
    cy.visit('/');
    cy.get('#add-task').click();
    cy.get('textarea[name=description]').type(taskDescription);
    cy.get('input[name=date]').type('3000-12-12');
    cy.contains('Save').click();
  });

  it('Task edited', () => {
    cy.contains('ToDo').click();
    cy.get('#to-do-list').should('contain.text', taskDescription);
    cy.get('#to-do-list li').first().get('.task-container__done').first()
      .click();
    cy.contains('Done').click();
    cy.get('#to-do-list').should('contain.text', taskDescription);
    cy.contains('ToDo').click();
    cy.get('#to-do-list').should('contain.text', 'Please add a new task');
  });
});
