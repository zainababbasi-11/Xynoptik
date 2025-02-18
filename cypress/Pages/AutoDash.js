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



    clickrecentproject(){

        cy.get('div#FranceAccidents').first().click();
        cy.wait(20000);
        // cy.get('button#ok').should('be.visible').click({ force: true });
        cy.get('body').then(($body) => {
            if ($body.find('#data-source-info-modal').length > 0) {
                // If the modal exists, ensure it's visible
                cy.get('#data-source-info-modal', { timeout: 15000 }).should('be.visible');
                // Find the 'OK' button inside the modal and click it
                cy.get('#data-source-info-modal button#ok').click({ force: true });
            } else {
                // Log a message when the modal is not found
                cy.log('Modal not found, continuing without clicking OK. This modal might not open on subsequent visits.');
            }
        });

        cy.get("button[type='button']").contains('Next').click({ force: true });


    }

    selectgraph(){


    }


}
export default AutoDash;
