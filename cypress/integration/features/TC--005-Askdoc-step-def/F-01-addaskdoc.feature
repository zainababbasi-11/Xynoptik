#
# author Zainab Abbasi
# Dated: 08/01/2025
#

Feature: Askdoc
@smoke-front-end @regression @Datasource
    Scenario: Verify that user is able to login in the application and Add a AskData project
            Given I login 
            When I go to Askdocs
            And Askdocs page opens successfully
            And I click on +New Project
            And I Add Project details
