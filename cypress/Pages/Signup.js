/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 04/10/2024
 */
class Signup {
	clickSignuphereButton() {
		cy.get('a[href="/signup"]').click({ force: true });
		cy.wait(1000);
	}

	enterUseremail(strEmail) {
		cy.get("input[id='email']").type(strEmail);
	}
	
	enterFirstName(strEmail) {
		cy.get("input[id='given_name']").type(strEmail);
	}
	
	enterLastName(strEmail) {
		cy.get("input[id='family_name']").type(strEmail);
	}
	
	enterPassword(strPassword) {
		cy.get("input[id='password']").type(strPassword);
	}
	
	clickSignupButtonEmail() {
		cy.get("form#submit-form") // Target the form by ID
		.find("button[type='submit']") // Find the submit button inside the form
		.click(); // Perform the click action
		cy.wait(1000);
	}
	
	enterSignupCode(strCode) {
		cy.get("input[id='code']").type(strCode);
	}
	
	clickVerifyButton() {
		cy.get("button[type='submit']").click({ force: true });
		cy.wait(5000);
	}
	
	clickLoginButton() {
		cy.get("button[type='submit']").click({ force: true });
		cy.wait(10000);
	}
	
	clickLogOut() {
		cy.get("#arrowKey").click({ force: true });
		cy.wait(100);
		cy.get("div.profile-modal").find("p").contains("Sign out").click({ force: true });
		cy.wait(200);
	}
}
export default Signup;