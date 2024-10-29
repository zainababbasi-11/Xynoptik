#nox 
# author Zainab Abbasi
# Dated: 24/09/2024
#

Feature: Add Product
    @add-product @smoke-front-end @regression
    Scenario: Verify that user is able to add a product
        Given The user is logged In and move to Product page
        And I clicked on Add Product Link
        And I enter product name
        And i provide product description
        And I select product family
        And I click on Next Now
        And I provide 2 Ingredients of 60 40
        And After Ingredients click on Next Now
        And now i provide further details about package
        And now press Next
        And now review data and click finish
        Then I Logout from Application