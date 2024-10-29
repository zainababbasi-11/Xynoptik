/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zainab Abbasi
 * Dated: 24/09/2024
 */

class AddProduct {
    clickOnAddProductLink() {
        cy.contains("a",'New Product').click({ force: true });
        cy.wait(1000);
    }

    enterProductName(prodyctName) {
        const currentDate = new Date(); 
        const timestamp = currentDate. getTime();
        const productName = `${productName} - ${timestamp}`;
        cy.get("input[name='productname']").type(productName);
    }

    enterProductDescription(productDescription) {
        cy.get("input[name='productDescription']").type(productDescription);
    }

    selectProductFamily(productFamily) {
        cy.get("button.cursor-auto").click({ force: true });
        cy.wait(100);
        cy.get('li').contains(`${productFamily}`).click();
    }

    clickOnNextPage() {
        cy.get('button#Button12').click({ force: true });
        cy.wait(100);
    }

    provideIngredients() {
        cy.get('div#Text1').click({ force: true });
        cy.wait(10);
        cy.get("button.cursor-auto").eq(0).click({ force: true });
        cy.wait(100);
        cy.get('li').contains('ALOE-REV').click();
        cy.wait(100);
        cy.get("button.cursor-auto").eq(1).click({ force: true });
        cy.wait(100);
        cy.get('li').contains('BRITISH ROSE 1').click();
        cy.get("input[name='Percentage']").eq(0).type(60);
        cy.get("input[name='Percentage']").eq(1).type(40);
        cy.wait(1000);
    }

    clickOnNextPageAfterIngredients() {
        cy.get('button#Button12').click({ force: true });
        cy.wait(100);
    }

    provideFurtherDetails() {
        cy.get("input.items-start").type(100);
        cy.wait(10);
        cy.get('button').contains('+Add').click({ force: true });
        cy.wait(10);
        cy.get("button.cursor-auto").eq(0).click({ force: true });
        cy.wait(100);
        cy.get('button.cursor-auto').eq(0).next('ul').find('li').eq(0).click();
        cy.wait(10);
        cy.get("input[name='Length']").type(150);
        cy.get('div#Text1').click({ force: true });
        cy.wait(10);
        cy.get("button.cursor-auto").eq(1).click({ force: true });
        cy.wait(100);
        cy.get('button.cursor-auto').eq(1).next('ul').find('li').eq(170).click();
        cy.wait(10);
        cy.get("input[name='piecePerCarton']").type(72);
        cy.wait(1000);
    }

    triggerLastNext() {
        cy.get('button#Button12').click({ force: true });
        cy.wait(1000);
    }

    clickOnFinish() {
        cy.get('button#Button12').click({ force: true });
        cy.wait(200);
        cy.get('a[href="/products/planning/overview"]').click({ force: true });
        cy.wait(5000);
    }

}
export default AddProduct;
