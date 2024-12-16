#
# author Zainab Abbasi
# Dated: 04/10/2024
#

Feature: User Login
    @user-signin @smoke-front-end @regression
    Scenario: Verify that user is able to login in the application on entring valid credentials
        Given I go to application
        When I enter valid email
        And I enter valid password
        And I click on login button
       And Application home page opens successfully
        Then Logout from the Application