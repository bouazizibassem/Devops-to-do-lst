// cypress/integration/TodoInteraction.spec.js

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

    // Press the Complete button
    cy.get('#complete').click();
    cy.wait(1000);
    // Verify that the task is marked as incomplete
    cy.get('#incomplete').should('exist');

    // Verify that the task is marked as completed
    cy.get('.todo').should('exist');

    // Press the Delete button
    cy.get('.delBtn').click();
    cy.wait(1000);
    // Verify that the task is deleted
    cy.get('.todo').should('not.exist');
  });
});
