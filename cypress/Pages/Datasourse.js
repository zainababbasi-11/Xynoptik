/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 12/17/2024
 */


class  Datasource{

    enterlogindetail(strEmail) {
        cy.get("input[id='email']").type(strEmail);
        cy.get("input[id='password']").type(strPassword);
        cy.get("button[type='submit']").click({ force: true });
        cy.wait(10000);
 
      }
    
     








}






export default Datasource;