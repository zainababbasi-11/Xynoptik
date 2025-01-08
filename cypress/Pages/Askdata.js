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

      selectsource(){

/*
        cy.get('#create-new-topic-modal').invoke('val') // Get the value of the selected option
        .then((dropdownValue) => {
          // Log the value to the console
          cy.log('Selected value:', dropdownValue);
  
          // You can also assert the value
          expect(dropdownValue).to.equal('DBProejct'); // Replace 'expected-value' with the expected value
        });*/


        cy.get('#create-new-topic-modal').should('be.visible');
        cy.get('label#select-sources') // Find the label for the dropdown
      .next('div#select-menu') // Move to the dropdown container
      .click(); // Open the dropdown

      cy.get('input[role="combobox"]') // Locate the combobox input
      .type('DBProject{enter}' ).click() ; 
      //cy.wait(50000);


        cy.get('#topicName').type('DPProejct');

        cy.get('#save').click({force: true});



      }



}
export default Askdata;