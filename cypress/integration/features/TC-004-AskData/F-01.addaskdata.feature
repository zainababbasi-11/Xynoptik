#
# author Zainab Abbasi
# Dated: 07/01/2025
#

Feature: Askdata
@smoke-front-end @regression @Datasource
    Scenario: Verify that user is able to login in the application and Add a AskData project
        Given I visit application
        When I login to an application
        And Home page opens successfully
        And I click on AskData
        And AskData page open successfully
        And I click on Create New Topic
        And I Select Source and Add Topic Name
        Then AskData Project created successfully

    Scenario: Verify that User is able to Query in AskData and Get accurate Results as expected
        Given I login and go to AskData
        When  I open a new created project
        And Submit a query