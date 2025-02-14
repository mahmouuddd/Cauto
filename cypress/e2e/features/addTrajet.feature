Feature: add trajet

Background: User can login 
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard
Scenario: Add trajet
        Given I navigate to the add trajet page
        And I fill in the form with valid data
        Then I see the trajet added to the list
   