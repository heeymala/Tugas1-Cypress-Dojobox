describe('Pembelian', function(){
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    })
    it('TC-1',function(){
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click().should('have.text', 'HTC One M9')
        cy.wait(5000)
        cy.get('.col-sm-12 > .btn').click().should('contain', 'Add to cart')
        cy.wait(5000)
        cy.go('back')
        cy.wait(5000)
        cy.go('back')
        cy.wait(5000)
        cy.contains('Laptops').click()
        cy.wait(5000)
        cy.contains('Dell i7 8gb').click()
        cy.wait(5000)
        cy.get('.col-sm-12 > .btn').click().should('contain', 'Add to cart')
        cy.wait(5000)
        cy.go('back')
        cy.wait(5000)
        cy.go('back')
        cy.wait(5000)
        cy.contains('Monitors').click()
        cy.wait(5000)
        cy.contains('Apple monitor 24').click()
        cy.get('.col-sm-12 > .btn').click().should('contain', 'Add to cart')
        cy.wait(5000)
        cy.get('#cartur').click().should('have.text', 'Cart')
        cy.wait(5000)
        cy.get('.col-lg-1 > .btn').click().should('have.text', 'Place Order')
        cy.wait(5000)
        cy.get('#name').type('Alya').should('have.value', 'Alya')
        cy.wait(5000)
        cy.get('#country').type('Malaysia').should('have.value', 'Malaysia')
        cy.wait(5000)
        cy.get('#city').type('Kota Baru').should('have.value', 'Kota Baru')
        cy.wait(5000)
        cy.get('#card').type('00111666').should('have.value', '00111666')
        cy.wait(5000)
        cy.get('#month').type('August').should('have.value', 'August')
        cy.wait(5000)
        cy.get('#year').type('2020').should('have.value', '2020')
        cy.wait(5000)
        cy.contains('Purchase').click()
        cy.wait(5000)
        cy.contains('OK').click()
        cy.wait(5000)

    })
})