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
        // cy.get("button[type='submit']").click({ force: true });
        // cy.wait(10000);
 
      }

      clicklogin(){

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
        // cy.get("textarea[id='description']").type(strdetail); 
       // cy.get("input[text='.react-tagsinput-input']").type(strdetail); 
       // cy.get('input.react-tagsinput-input[placeholder="Add a tag"]').type(strdetail);


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

      clicknext(){

       cy.get("button[type='button']").contains('Next').click({ force: true });

      //  cy.contains('span', 'Next').click();


      }


      selectexcelproject(){

      //  cy.contains('span', '#Microsoft Excel ').click();

       // cy.get("aria-label[id='Microsoft Excel']").click();

      // cy.get('.relative flex flex-col w-full group:contains("Microsoft Excel")').click();

       // class="relative flex flex-col w-full group"

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

      // next step

    //  cy.get("input[id='ag-15-input']").click({ force: true });
   // cy.get('.form-group input[type="checkbox"]').eq(0).check();

      cy.get('input[type="checkbox"]').first().check();



       cy.get("button[type='button']").contains('Next').click({ force: true });

// next step
      cy.get("button[type='button']").contains('Next').click({ force: true });
      cy.wait(10000);
      // cy.get('#data-source-date-time-format-modal ').should('be.visible').click({ force: true });

      cy.get('#data-source-date-time-format-modal') // Locate the modal by its ID
      .should('be.visible') // Ensure the modal is visible
      .find('button') // Find the button inside the modal
      .contains('Ok') // Locate the button with the "Ok" text
      .should('not.be.disabled') // Ensure the button is enabled
      .click(); // Click the button
      // cy.contains('span', 'Ok').click();

      // Next Step
      cy.get("button[type='button']#next").contains('Next').click({ force: true });

      }

      clickLogout() {
        cy.get("#arrowKey").click({ force: true });
        cy.wait(100);
        cy.get("div.profile-modal").find("p").contains("Sign out").click({ force: true });
        cy.wait(200);
      }


      selectdbproject(){

        cy.get('.relative.flex.flex-col.w-full.group')
        .contains('MariaDB')
        .should('be.visible')
        .click();
  
         cy.get("button[type='button']").contains('Next').click({ force: true });

         // cy.get('#hostname').type();

      }

      adddbcredshostname(){

        cy.get('#hostname').type('dxyfer-demo-mariadb.ce0fxmvpvtvi.ap-southeast-2.rds.amazonaws.com');



      }

      adddbcredsport(strportnum){

        cy.get('#port').type(strportnum);

      }

      adddbcredsusername(strdbusername){

        cy.get('#username').type(strdbusername);

      }

      adddbcredspass(strdbpass){

        cy.get('#password').type(strdbpass);

      }

      adddbname(strdbname){


        cy.get('#database').type(strdbname);

      }

      clickconnect(){


        cy.get("button[type='submit']").contains('Connect').click({ force: true });

      }




}






export default Datasource;