/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 12/17/2024
 */


class  Datasource{

    enteremail(strEmail) {
        cy.get("input[id='email']").type(strEmail); 
    }

    enterpassword(strPassword){

        cy.get("input[id='password']").type(strPassword);
        cy.get("button[type='submit']").click({ force: true });
        cy.wait(10000);
 
      }
     
      clickDatasource() {

        cy.contains('span', 'Data Sources').click();
        cy.wait(10000);
      }
    
      clickadddataset(){

        cy.get("#add-dataset").click({ force: true });
    

      }


      enterexcelprojectname(strname){

        cy.get("input[id='sourceName']").type(strname); 
        //cy.get("textarea[id='description']").type(strdetail); 
       // cy.get("input[text='.react-tagsinput-input']").type(strdetail); 
       //cy.get('input.react-tagsinput-input[placeholder="Add a tag"]').type(strdetail);


      }


      enterexcelprojectdescription(strdetail){

     //   cy.get("input[id='sourceName']").type(strdetail); 
        cy.get("textarea[id='description']").type(strdetail); 
       // cy.get("input[text='.react-tagsinput-input']").type(strdetail); 
    //   cy.get('input.react-tagsinput-input[placeholder="Add a tag"]').type(strdetail);


      }

      enterexcelprojecttag(strdetail){

     //   cy.get("input[id='sourceName']").type(strdetail); 
      //  cy.get("textarea[id='description']").type(strdetail); 
       // cy.get("input[text='.react-tagsinput-input']").type(strdetail); 
       cy.get('input.react-tagsinput-input[placeholder="Add a tag"]').type(strdetail);


      }

      clickfirstnext(){

       cy.get("button[type='button']").contains('Next').click({ force: true });

      //  cy.contains('span', 'Next').click();


      }


      selectexcelproject(){

      //  cy.contains('span', '#Microsoft Excel ').click();

       // cy.get("aria-label[id='Microsoft Excel']").click();

      // cy.get('.relative flex flex-col w-full group:contains("Microsoft Excel")').click();

       //class="relative flex flex-col w-full group"

      // cy.get('ul').contains('li', 'Microsoft\ Excel')

      cy.get('.relative.flex.flex-col.w-full.group')
  .contains('Microsoft Excel')
  .should('be.visible')
  .click();

       cy.get("button[type='button']").contains('Next').click({ force: true });

       cy.get("#upload").click({force: true });

       cy.get('input[type="file"]').attachFile('CardTransactions.xlsx');

       cy.get("button[type='button']").contains('Next').click({ force: true });

      // cy.get('.ag-input-field-input ag-checkbox-input').contains("#ag-15-input").click({ force: true });  

      //next step

      cy.get("input[id='ag-15-input']").click({ force: true });

       cy.get("button[type='button']").contains('Next').click({ force: true });

//next step
       cy.get("button[type='button']").contains('Next').click({ force: true });




      }


}






export default Datasource;