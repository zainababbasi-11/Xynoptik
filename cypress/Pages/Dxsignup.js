/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 04/10/2024
 */

class Signup {

   /* clickSignuphereButton() {
        cy.get("button[type='submit']").click({ force: true });
        //cy.get('a[href="/signup">Signup here."]').click({ force: true });
        cy.wait(1000);
      }*/


      clickSignuphereButton() {
        //cy.get("button[type='submit']").click({ force: true });
        cy.get('a[href="/signup"]').click({ force: true });
        cy.wait(1000);
      }


    enterUseremail(strEmail) {
      //console.log(strEmail)
      cy.get("input[id='email']").type(strEmail);
      
      //cy.get("input[id='email']").type('userxyz@yopmail.com');
    }

    /*
    enterUserName(strEmail) {
      cy.get("input[id='givenname']").type(strEmail);
    }

    enterUserName(strEmail) {
      cy.get("input[id='familyname']").type(strEmail);
    }
  
  
    enterPassword(strPassword) {
      cy.get("input[id='password']").type(strPassword);
    }
  

    clickcheckbox() {
      //cy.get("button[type='submit']").click({ force: true });
      cy.get('a[href="/signup"]').click({ force: true });
      cy.wait(1000);
    }

    clickSignupbutton() {
      //cy.get("button[type='submit']").click({ force: true });
      cy.get('a[href="/signup"]').click({ force: true });
      cy.wait(1000);
    }


    entercode(strPassword) {
      cy.get("input[id='password']").type(strPassword);
    }
  

    clickVerifyButton() {
      cy.get("button[type='submit']").click({ force: true });
      cy.wait(5000);
    }


  
    enterPassword(strPassword) {
      cy.get("input[id='password']").type(strPassword);
    }

    clickLoginButton() {
      cy.get("button[type='submit']").click({ force: true });
      cy.wait(5000);
    }


    clickLogOut() {
      cy.get("button.MuiButtonBase-root").click({ force: true });
      cy.wait(100);
      cy.get("li.MuiButtonBase-root").eq(1).click({ force: true });
      cy.wait(200);
    }*/
  }
  export default Signup;
  