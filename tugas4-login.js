describe('Login', function(){
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('TC-1',function(){
        cy.get('#login2').click().should('contain', 'Log in')
        cy.get('#loginusername').type('zain').should('exist')
        cy.get('#loginpassword').type('zain').should('have.value', 'zain')
        cy.contains('Log in').click()
    })
})
