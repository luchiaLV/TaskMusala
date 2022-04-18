describe('Company page', () => {

    it('Positions in Sofia', () => {
        cy.visit('/')
        cy.get('#navbar')
            .find('.menu-item-478').click()
        cy.get('[data-alt="Check our open positions"]').click()
        cy.get('.job-filter')
            .find('#get_location').select('Sofia')
        cy.get('.card-container:contains(Sofia)').find('[data-alt]')
            .invoke('attr', 'data-alt')
            .then(title => {
                cy.get('.card-container:contains(Sofia) > a')
                    .invoke('attr', 'href')
                    .then(href => {
                        cy.log('Sofia')
                        cy.log(title)
                        cy.log('More info:' + href)
                    })
            })
    })

    it('Positions in Skopje', () => {
        cy.visit('/')
        cy.get('#navbar')
            .find('.menu-item-478').click()
        cy.get('[data-alt="Check our open positions"]').click()
        cy.get('.job-filter')
            .find('#get_location').select('Skopje')
        cy.get('.card-container:contains(Skopje)').find('[data-alt]')
            .invoke('attr', 'data-alt')
            .then(title => {
                cy.get('.card-container:contains(Sofia) > a')
                    .invoke('attr', 'href')
                    .then(href => {
                        cy.log('Skopje')
                        cy.log(title)
                        cy.log('More info:' + href)
                    })
            })
    })
})
