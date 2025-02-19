#
# author Zainab Abbasi
# Dated: 22/01/2025
#

Feature: Autdash
@smoke-front-end @regression @Datasource
    Scenario: Verify that user is able to login in the application and Create Auto Dash
        Given I go to application
        And I enter valid email
        And I enter valid password
        And I click on login button
        And I go to Auto Dash
        And I click on Add New Dashboard
        And I Add Dashboard details and click on next
        And I choose a project and add graph or widget
        And project created successfully
        And i select graph from list
        Then I should see the dashboard created successfully


        