/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 22/01/2025
 */

class AutoDash {
    enterEmail(strEmail) {
        cy.get("input[id='email']").type(strEmail); 
    }
    
    enterPassword(strPassword) {
        cy.get("input[id='password']").type(strPassword);
    }
    
    clickLogin() {
        cy.get("button[type='submit']").click({ force: true });
        cy.wait(10000);
    }
    
    redirectToAutoDash() {
        cy.contains('span', 'Auto Dash').click();
        cy.wait(10000);
    }

    clickeOnNewDashboard() {
        cy.get("#new-dashboard").click({force: true });
    }

    enterDashboardName(strDashboardName) {
        cy.get("input#dashName").type(strDashboardName);
    }

    enterDashboardDescription(strDashboardDescription) {
        cy.get("#description").type(strDashboardDescription);
    }

    enterDashboardTags(strDashboardTags) {
        cy.get('input.react-tagsinput-input[placeholder="Add a tag"]').type(strDashboardTags);
    }

    clicknext() {
        cy.get("button[type='button']").contains('Next').click({ force: true });
    }



    clickrecentproject() {
        cy.intercept('POST', '/api/dashboard/get-graphs').as('submitData');
        cy.get('div#select-menu').click().type('FranceAccidents{enter}');
        cy.get("button[type='button']").contains('Next').click({ force: true });
        this.clicknext();
        cy.wait('@submitData').its('response.statusCode').should('eq', 200);
    }

    selectgraph(){
        cy.get('div#checkbox').first().click();
        cy.get("button[type='button']").contains('Next').click({ force: true });
        cy.wait(4000);
        cy.get("button[id='save']").click({ force: true });

        cy.wait(4000);
        cy.get("button[id='save']").click({ force: true });

    }


}
export default AutoDash;
