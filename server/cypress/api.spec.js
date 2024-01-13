// cypress/integration/api.spec.js

describe('API Tests', () => {
    beforeEach(() => {
      // Run this before each test to reset the database or perform any necessary setup
      cy.request('DELETE', '/api/items');
    });
  
    it('should add a new todo', () => {
      const todoName = 'Test Todo';
  
      cy.request('POST', '/api/new', { name: todoName }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.error).to.be.false;
        expect(response.body.message).to.eq('Inserted');
        expect(response.body.doc.name).to.eq(todoName);
      });
  
      cy.request('/api/items').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.items).to.have.lengthOf(1);
        expect(response.body.items[0].name).to.eq(todoName);
      });
    });
  
    it('should retrieve all todos', () => {
      cy.request('/api/items').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.error).to.be.false;
        expect(response.body.message).to.eq('All documents retrieved.');
        expect(response.body.items).to.be.an('array');
      });
    });
  
    it('should delete all todos', () => {
      cy.request('DELETE', '/api/items').then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.error).to.be.false;
        expect(response.body.message).to.eq('All items deleted.');
      });
  
      cy.request('/api/items').then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.be.true;
        expect(response.body.message).to.eq('No documents found to retrieve.');
      });
    });
  
    // Add more tests for other API endpoints (GET, PUT, DELETE) as needed
  });
  