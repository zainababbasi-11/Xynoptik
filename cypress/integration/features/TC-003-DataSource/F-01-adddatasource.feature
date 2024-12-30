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
            And Project create successfully
            Then I Logout
    
    Scenario: Verify that user is able to login in the application and Add a Datasource database project
            Given I login to application and Click on Datasource
            And I click on Add Datasource Button
            And I Add DB project details
            And I Select Database Project and Add Database credentials