/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 04/10/2024
 */

class Login {
  enterUserName(strEmail) {
    cy.get("input[id='email']").type(strEmail);
  }

  clickLoginButtonEmail() {
    cy.get("button[type='submit']").click({ force: true });
    cy.wait(1000);
  }

  enterPassword(strPassword) {
    cy.get("input[id='password']").type(strPassword);
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
export default Login;
