
# author Zainab Abbasi
# Dated: 24/09/2024
#

Feature: User Failed Login
    @user-login @smoke-front-end @regression
    Scenario: Verify that user is not able to login in the application on entring invalid credentials
        Given I go to application
        When I enter invalid email
        And I enter invalid password
        And I click on login button
        Then I have error for invalid credentials