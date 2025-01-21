/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 07/01/2025
 */


class Askdata {
    enteremail(strEmail) {
        cy.get("input[id='email']").type(strEmail); 
    }
    
    enterpassword(strPassword) {
        cy.get("input[id='password']").type(strPassword);
    }
    
    clicklogin() {
        cy.get("button[type='submit']").click({ force: true });
        cy.wait(10000);
    }
    
    clickaskdata() {
        cy.contains('span', 'Ask Data').click();
        cy.wait(5000);
    }
    
    clickcreatenewtopic() {
        cy.get("#new-topic").click({force: true });
    }
    
    selectsource() {
        cy.get('#create-new-topic-modal').should('be.visible');
        cy.get('label#select-sources') // Find the label for the dropdown
        .next('div#select-menu') // Move to the dropdown container
        .click(); // Open the dropdown
         
        cy.get('input[role="combobox"]') // Locate the combobox input
        .type('DBProject{enter}'); 
        cy.wait(20000);
        cy.get('#topicName').type('DBProject');
        cy.get('#save').click({force: true});
    }

    clickedOnRecentProject() {
        cy.get('div#DBProject').first().click();
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
    }

    writeAndSubmitQuery() {
        cy.get("input[id='data-questions']").type("Accident trends over the years"); 

        cy.get('div#send').should('be.visible').click({ force: true });
    }
}
export default Askdata;