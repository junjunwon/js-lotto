// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("showPrizeModal", () => {
	cy.get('#prizeResultBtn').click();
})

Cypress.Commands.add("restartLotto", () => {
	cy.get('#restartLottoBtn')
		.click()
		.then(() => {
			cy.get('#prizeModal').should("not.be.visible");
		})
})

Cypress.Commands.add("inputWinngNumber", (winningNumbers, bonusNumber) => {
	cy.get('#winnerNumbers > input').each(($input, index) => {
		cy.wrap($input).type(winningNumbers[index]);
	})
	cy.get('#bonusNumber').type(bonusNumber);

})