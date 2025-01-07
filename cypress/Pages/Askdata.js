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

    enterpassword(strPassword){

        cy.get("input[id='password']").type(strPassword);
 
      }

      clicklogin(){

        cy.get("button[type='submit']").click({ force: true });
        cy.wait(10000);
      }


      clickaskdata(){

        cy.contains('span', 'Ask Data').click();
        cy.wait(10000);
      }


      clickcreatenewtopic(){

        cy.get("#new-topic").click({force: true });



      }




}
export default Askdata;