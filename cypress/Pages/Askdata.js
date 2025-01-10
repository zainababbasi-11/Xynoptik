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
        //data-source-info-modal
 
        cy.get('#data-source-info-modal') // Locate the modal by its ID
       .should('be.visible') // Ensure the modal is visible
       .find('button') // Find the button inside the modal
       .contains('Ok') // Locate the button with the "Ok" text
       .should('not.be.disabled') // Ensure the button is enabled
       .click() 
       // cy.get('button#ok').should('be.visible').click({ force: true });

    }
}
export default Askdata;