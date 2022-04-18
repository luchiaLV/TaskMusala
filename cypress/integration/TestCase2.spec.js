describe('Company page', () => {

    it('Verify the url', () => {
        cy.visit('/', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        })

        cy.contains('Company').click({ force: true })
        cy.url().should('eq', 'https://www.musala.com/company/')
        cy.get('.company-members, Leadership').should('exist')
        cy.get('.musala-icon-facebook').click({ force: true })
    })

    it('Verify the logo in the main window', () => {
        cy.visit('https://www.facebook.com/MusalaSoft?fref=ts')
        cy.url().should('eq', 'https://www.facebook.com/MusalaSoft?fref=ts')
        cy.get('[mask="url(#jsc_c_k)"]').should('not.exist')

    })
})
