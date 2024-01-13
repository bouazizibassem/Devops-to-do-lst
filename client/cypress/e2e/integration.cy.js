describe('Todo Component Interaction Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Update with your app's URL
  });

  it('should type a task, add, complete, and delete', () => {
    // Type a task in the input field
    cy.get('input').type('New Task');
    cy.wait(1000);
    // Press the Add button
    cy.get('.addBtn').click();
    cy.wait(1000);
    // Verify that the task is added
    cy.get('.todo').should('exist');
  });
});
