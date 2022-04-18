const tests = require('../fixtures/careers.json')

describe('Contact Us form population', () => {

    beforeEach('Open web site', () => {
        cy.visit('/')
    })

    tests.forEach(test => {
        it(test.testName, () => {
            cy.contains('Careers').click({ force: true })
            cy.get('[data-alt="Check our open positions"]').click()
            cy.url().should('eq', 'https://www.musala.com/careers/join-us/')
            cy.get('[name="get_location"]').select('Anywhere')
            cy.contains('Automation QA Engineer').click()
            cy.get('.entry-content')
                .find('.content-title').should('be.visible')
            cy.get('.btn-apply').click()
            cy.get('[name="your-name"]').type(test.Name);
            cy.get('[name="your-email"]').type(test.Email);
            cy.get('[name="mobile-number"]').type(test.Mobile);
            cy.get('[name="your-message"]').type(test.Message);
            //Uploading file was unsuccessful to field type text, couldn't resolve the problem on time.
            cy.get('#adConsentChx').check()
            cy.contains('Send').click()
            cy.get('.wpcf7').then(form => {
                cy.wrap(form)
                cy.get('.wpcf7-not-valid-tip').each(error => {
                    const errorText = error.text()
                    cy.wrap(form).should('contain', errorText).should('be.visible')
                })
            })
        })
    })
})
