describe('Pembelian', function(){
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('TC-1',function(){
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click().should('have.text', 'Samsung galaxy s6')
        cy.get('.col-sm-12 > .btn').click().should('contain', 'Add to cart')
        cy.get('#cartur').click().should('have.text', 'Cart')
        cy.get('.col-lg-1 > .btn').click().should('contain', 'Place Order')
        cy.get('#name').type('Alya').should('have.value', 'Alya')
        cy.get('#country').type('Malaysia').should('have.value', 'Malaysia')
        cy.get('#city').type('Kota Baru').should('have.value', 'Kota Baru')
        cy.get('#card').type('00111666').should('have.value', '00111666')
        cy.get('#month').type('August').should('have.value', 'August')
        cy.get('#year').type('2020').should('have.value', '2020')
        cy.contains('Purchase').click()
        cy.contains('OK').click()
        cy.go('back')
    })
})