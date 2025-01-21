/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 08/01/2025
 */
class Askdoc {
    
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
    
    clickaskdoc() {
        cy.contains('span', 'Ask Docs').click();
        cy.wait(10000);
    }
    
    clicknewproject() {
        cy.get("#new-docs").click({force: true });
    }
    
    askdocprojectname(strprjctname) {
        cy.get("input[id='projectName']").type(strprjctname);
    }
    
    askdocprojectdescription(strprjctdes) {
        cy.get("textarea[id='projectDescription']").type(strprjctdes);
    }
    
    askdocprojecttag(strprjcttag) {
        cy.get('input.react-tagsinput-input[placeholder="Add a tag"]').type(strprjcttag);
    }
    
    clicknext() {
        cy.get("button[type='button']").contains('Next').click({ force: true });
    }


    selectpdfproject(){

      cy.get('.relative.flex.flex-col.w-full.group')
      .contains('PDF')
      .should('be.visible')
      .click();

       cy.get("button[type='button']").contains('Next').click({ force: true });

       cy.get("#upload-file").click({force: true });

       cy.get('input[type="file"]').attachFile('samplepdf.pdf');

       cy.wait(10000);

       /* cy.get('#title') // Locate the modal by its ID
       .should('be.visible') // Ensure the modal is visible
       .find('button') // Find the button inside the modal
       .contains('Ok') // Locate the button with the "Ok" text
       .should('not.be.disabled') // Ensure the button is enabled
       .click() */
       // cy.get('button#ok').should('be.visible').click({ force: true });

       cy.get("button[type='button']").contains('Next').click({ force: true });

       // cy.get('button#ok').should('be.visible').click({ force: true });

       cy.wait(20000);

       cy.get('button#ok').should('be.visible').click({ force: true });

       /* cy.get('#title') // Locate the modal by its ID
       .should('be.visible') // Ensure the modal is visible
       .find('button') // Find the button inside the modal
       .contains('Ok') // Locate the button with the "Ok" text
       .should('not.be.disabled') // Ensure the button is enabled
       .click() */

    }
}
export default Askdoc;