
const tests = require('../fixtures/invalidEmails.json')

describe('Search by people returns expected result', () => {
    beforeEach(() => {
        cy.visit('/')


    })

    tests.forEach(test => {
        it(test.testName, () => {

            cy.scrollTo(1311, 517)
            cy.get('.contact-label').click()
            cy.get('form').within(($form) => {

                cy.get('input[name="your-name"]').type('Test Test')
                cy.get('input[name="your-email"]').type(test.email)
                cy.get('input[name="mobile-number"]').type('121313')
                cy.get('input[name="your-subject"]').type('subject')
                cy.get('textarea[name="your-message"]').type('Message')
                cy.root().submit()
            })

            cy.get('.your-email').within(() => {
                cy.get('.wpcf7-not-valid-tip').should('contain', 'The e-mail address entered is invalid.').should('be.visible')
            })
        })
    })
})
