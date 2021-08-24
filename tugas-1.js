describe('Test Suite Tugas 1', function(){
    it('TC-1', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Mala')
        cy.get('#lastName').type('Afnelia')
        cy.get('#userEmail').type('mala@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('082286194291')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
        cy.get('#currentAddress').type('Jl. Kramat No.30')
        cy.get('#submit').click()


    })

    Cypress.on('uncaught:exception', (err, runnable)=> {
        return false
    })
})