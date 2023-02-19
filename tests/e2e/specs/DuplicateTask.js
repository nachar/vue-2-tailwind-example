describe('Duplicate task', () => {
  const taskDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum purus sit amet dolor ultricies';

  beforeEach(() => {
    cy.visit('/');
    cy.get('#add-task').click();
    cy.get('textarea[name=description]').type(taskDescription);
    cy.get('input[name=date]').type('3000-12-12');
    cy.contains('Save').click();
  });

  it('Task duplicated', () => {
    cy.contains('content_copy').click();
    cy.get('#to-do-list li').first().should('contain.text', taskDescription);
    cy.get('#to-do-list li').last().should('contain.text', taskDescription);
  });
});
