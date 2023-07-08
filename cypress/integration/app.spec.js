describe("Strava", () => {
	it("Auto kudos", () => {
		// Visit Strava
		cy.visit("https://www.strava.com/login");

		// Login
		cy.url().should("include", "/login");
		cy.get("#email").should("exist").type(Cypress.env("STRAVA_USERNAME"));
		cy.get("#password").should("exist").type(Cypress.env("STRAVA_PW"), { sensitive: true });
		cy.get("#login-button").should("exist").click();

		// Homepage
		cy.url().should("include", "/dashboard");

		// Kudos
		cy.scrollTo("bottom", { duration: 1000 }).then(() => {
			const unfillKudoButtonSelector = "[data-testid=unfilled_kudos]";
			const profileSelector = "#athlete-profile .card-body > a";

			if (Cypress.$(unfillKudoButtonSelector).length > 0) {
				cy.get(profileSelector)
					.invoke("attr", "href")
					.then((profileHref) => {
						cy.get(unfillKudoButtonSelector).each(($el) => {
							cy.wrap($el)
								.closest("[data-testid=web-feed-entry]")
								.within(() => {
									cy.get('a[data-testid="owners-name"]')
										.invoke("attr", "href")
										.then((ownerHref) => {
											if (getAthleteId(ownerHref) !== getAthleteId(profileHref)) {
												cy.wrap($el).should("exist").click({ force: true });
											}
										});
								});
						});
					});
			}
		});
	});
});

const getAthleteId = (href) => href.split("/athletes/")[1];
