#
# author Zainab Abbasi
# Dated: 25/02/2025
#

Feature: Askdoc
@smoke-front-end @regression @Datasource
    Scenario: Verify that user is able to login in the application and Query in AskDoc project
        Given I login 
        When I go to Askdocs
        And Askdocs page opens successfully
        And I open a project
        And Submit a query
        Then I should see the result of the query
        