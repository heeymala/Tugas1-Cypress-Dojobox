describe('Kumpulan Test Case', function(){
    it('TC-1', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Mala Afnelia').should('have.value', 'Mala Afnelia')
        cy.get('#et_pb_contact_email_0').type('mala@gmail.com').should('have.value', 'mala@gmail.com')
        cy.contains('Email Me!').click()
    }),
    it('TC-2', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="female"]').check().should('have.value', 'female')

    }),
    it('TC-3', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').should('exist')
    }),
    it('TC-4', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').contains('Audi').should('have.text', 'Audi')
    }),
    it('TC-5', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').contains('have.text', 'button success')
    })

})