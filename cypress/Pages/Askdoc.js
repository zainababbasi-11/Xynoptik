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
}
export default Askdoc;