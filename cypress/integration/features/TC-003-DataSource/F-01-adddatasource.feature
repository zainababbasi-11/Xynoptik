#
# author Zainab Abbasi
# Dated: 12/17/2024
#

Feature: Datasource
@smoke-front-end @regression @Datasource
    Scenario: Verify that user is able to login in the application and Add a Datasource project
            Given I go to application 
            When I login to application 
            And Home page opens successfully
            And I click on Datasource
            And Datasource page open successfully
            And I click on Add Datasource
            And I add excel project details
            And click on Next
            And I Choose a Datasource Excel and create

