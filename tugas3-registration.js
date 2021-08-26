describe('Registration', function(){
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('TC-1',function(){
        cy.get('#signin2').click().should('have.text', 'Sign up')
        cy.get('#sign-username').type('dojozain').should('exist')
        cy.get('#sign-password').type('dojozain').should('have.value', 'dojozain')
        cy.contains('Sign up').click()
    })
})