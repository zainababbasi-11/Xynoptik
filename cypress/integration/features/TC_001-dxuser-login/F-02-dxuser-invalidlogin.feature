#
# author Zainab Abbasi
# Dated: 07/10/2024
#

Feature: User Login
    @user-login @smoke-front-end @regression
    Scenario: Verify that user is able to login in the application on entring valid credentials
        Given I go to application
        When I enter invalid email
        And I enter invalid password
        And I click on login button
        Then I have error for invalid credentials