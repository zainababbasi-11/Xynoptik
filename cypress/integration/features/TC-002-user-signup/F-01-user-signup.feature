#
# author Zainab Abbasi
# Dated: 07/10/2024
#

Feature: User Signup
    @user-signup @smoke-front-end @regression
    Scenario: Verify that user is able to Signup in the application on entring valid Data
        Given I go to application
        When I click on Signuphere button
        And Application Signup opens successfully
        And I enter valid newemail
        And I enter first name
        And I enter Last Name
        And I enter valid password
        And I check agree terms
        And I click on Signup button
        Then the user should receive a verification code at email
        And Verification Screen opens successfully
        And I enter correct verification code
        And I click on verify account
        And I navigate to login screen
        And I enter password of new user
        And I click on login button
        Then Logout from the Application