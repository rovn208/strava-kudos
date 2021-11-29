/* eslint-disable */
describe("Strava", () => {
	it("Auto kudos", () => {
		// Visit Strava
		cy.visit("https://www.strava.com/");

		// Login
		cy.get("a.btn-login").click();
		cy.url().should("include", "/login");
		cy.get("#email").should("exist").type(Cypress.env("STRAVA_USERNAME"));
		cy.get("#password").should("exist").type(Cypress.env("STRAVA_PW"), { sensitive: true });
		cy.get("#login-button").should("exist").click();

		// Homepage
		cy.url().should("include", "/dashboard");

		// Kudos
		cy.scrollTo("bottom", { duration: 1000 });
		cy.get('[data-testid="unfilled_kudos"]').each(($el, index, $list) => {
			cy.wrap($el)
				.closest(".react-feed-component")
				.within(() => {
					cy.get('a[data-testid="owner-avatar"]')
						.invoke("attr", "href")
						.then((ownerId) => {
							if (ownerId !== Cypress.env("STRAVA_ATHLETE_ID")) {
								cy.get('[data-testid="unfilled_kudos"]').should("exist").click({ force: true });
							}
						});
				});
		});
	});
});
