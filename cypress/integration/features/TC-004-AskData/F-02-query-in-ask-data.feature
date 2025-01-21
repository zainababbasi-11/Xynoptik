#
# author Zainab Abbasi
# Dated: 07/01/2025
#

Feature: Askdata
@smoke-front-end @regression @Datasource
    Scenario: Verify that user is able to login in the application and Query in askData AskData project
        Given I visit application
        When I login to an application
        And Home page opens successfully
        And I click on AskData
        And AskData page open successfully
        And I open a new created project
        And Submit a query
        Then I should see the result of the query
        