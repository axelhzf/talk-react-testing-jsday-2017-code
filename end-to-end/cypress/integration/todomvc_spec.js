describe('TODO MVC', function(){
  it('work correctly', function(){
    cy.visit('http://todomvc.com/examples/react')
    cy.title().should('include', 'TodoMVC')

    cy.get('.new-todo').type('TODO 1').type('{enter}');
    cy.get('.new-todo').type('TODO 2').type('{enter}');
    cy.get('.new-todo').type('TODO 3').type('{enter}');

    cy.get('.view').should('have.length', 3);
    cy.get('.view').last().find('.toggle').click();
    cy.get('.completed').should('have.length', 1);
    cy.get('.todo-count').should('contain', '2 items left');

    cy.get('.filters a[href="#/active"]').click();
    cy.get('.view').should('have.length', 2);
    cy.get('.filters a[href="#/completed"]').click();
    cy.get('.view').should('have.length', 1);
  });

})
